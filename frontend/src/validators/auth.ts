import { z } from "zod";

export const SignUpSchema = z.object({
    firstName: z.string().min(3).max(64),
    lastName: z.string().min(3).max(64),
    email: z.string().email().min(3).max(64),
    password: z.string().min(3).max(64),
    confirmPassword: z.string().min(3).max(64)
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

export type FormState =
    | {
            errors?: {
            firstName?: string[];
            lastName?: string[];
            email?: string[];
            password?: string[];
            confirmPassword?: string[];
        };
        message?: string;
    }
    | undefined;

export type SessionPayload = {
    userId: string | number;
    expiresAt: Date;
};