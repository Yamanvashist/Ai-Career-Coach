import { Response } from "express";

const validateField = (
    value: unknown,
    field: string,
    res: Response
) => {
    if (
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
    ) {
        res.status(400).json({
            success: false,
            message: `${field} is required.`,
        });

        return false;
    }

    return true;
};

export default validateField;