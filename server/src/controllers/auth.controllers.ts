import { Request, Response } from "express";
import prisma from "../lib/prisma.js";
import { googleClient } from "../lib/googleClient.js";

import { hashPassword, comparePassword } from "../services/hashPassword.js";
import generateToken from "../services/generateToken.js";

import "dotenv/config";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ message: "Name field is empty" });
    if (!email)
      return res.status(400).json({ message: "Email field is empty" });
    if (!password)
      return res.status(400).json({ message: "Password field is empty" });

    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist)
      return res.status(400).json({ message: "User Already Exist" });

    const hashedPassword = await hashPassword(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        credits: true,
      },
    });

    const token = await generateToken(user.id);

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.error("Error creating Account", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email)
      return res.status(400).json({ message: "Email field is empty" });
    if (!password)
      return res.status(400).json({ message: "Password field is empty" });

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const samePassword = await comparePassword(password, user.password);
    if (!samePassword)
      return res.status(400).json({ message: "Invalid Password" });

    const token = await generateToken(user.id);

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User Logged in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        credits: user.credits,
      },
    });
  } catch (err) {
    console.error("Error Logging", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const signOut = (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error Logout", err);
    return res.status(200).json({ message: "Logout failed" });
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    if (!userId) return;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        credits: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      authenticated: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;

  if (!userId) {
    return res.status(401).json({
      message: "User not logged in",
    });
  }

  try {
    const { password, newPassword } = req.body;

    if (!password || !newPassword) {
      return res.status(400).json({
        message: "Current password and new password are required.",
      });
    }

    if (password === newPassword) {
      return res.status(400).json({
        message: "New password must be different from the current password.",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        password: true,
      },
    });

    if (!user?.password) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect.",
      });
    }

    const hashedPassword = await hashPassword(newPassword, 10);

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    return res.status(200).json({
      message: "Password updated successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};


export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body

    if (!credential) return res.status(400).json({ message: "Credentials not provided" });

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    if (!payload) {
      return res.status(401).json({
        message: "Invalid Google Token",
      });
    };

    const { name, email, email_verified } = payload


    if (!email || !email_verified) {
      return res.status(401).json({
        message: "Google account is not verified",
      });
    }

    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: name ?? "Google User",
          email,
          password: "",
        },
      });
    }

    console.log(user)

    const token = await generateToken(user.id)

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Google login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Google login failed",
    });

  }

};