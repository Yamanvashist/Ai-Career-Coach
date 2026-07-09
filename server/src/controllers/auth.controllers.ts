import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

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

        profile: {
          create: {
            skills: null,
            targetRole: null,
            experience: null,
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        profile: true,
      },
    });

    const token = await generateToken(user.id);

    const isDev = process.env.NODE_ENV == "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isDev,
      sameSite: isDev ? "none" : "lax",
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

    const samePassword = comparePassword(password, user.password);
    if (!samePassword)
      return res.status(400).json({ message: "Invalid Password" });

    const token = await generateToken(user.id);

    const isDev = process.env.NODE_ENV == "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isDev,
      sameSite: isDev ? "none" : "lax",
    });

    return res.status(201).json({
      message: "User Logged in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
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

    const userId =(req as any).user.userId

    const user = await prisma.user.findUnique({
      where: {
        id : userId
      },
      select: {
        id: true,
        name: true,
        email: true,
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
