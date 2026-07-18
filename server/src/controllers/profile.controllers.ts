import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const upsertProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;

        if (!userId) {
            return res.status(401).json({
                message: "User not logged in",
            });
        }

        const {
            targetRole,
            experience,
            about,
            skills = [],
        } = req.body;

        const profile = await prisma.profile.upsert({
            where: {
                userId,
            },
            update: {
                targetRole,
                experience,
                about,
                skills,
            },
            create: {
                userId,
                targetRole,
                experience,
                about,
                skills,
            },
        });

        return res.status(200).json({
            message: "Profile saved successfully",
            profile,
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Failed to save profile",
        });
    }
};

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;
       

        const profile = await prisma.profile.findUnique({
            where: {
                userId,
            },
        });

        if (!profile) {
            return res.status(200).json(null);
        }

        return res.status(200).json(profile);
    } catch (err) {
        console.log("failed to give profile", err)
        return res.status(500).json({
            message: "Failed to fetch profile",
        });
    }
};