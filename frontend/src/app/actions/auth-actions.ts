"use server";

import { FormState, SignUpSchema } from "@/validators/auth";

export const signUp = async (data: FormData) => {
    // TODO: Validate data
    const validationResult = SignUpSchema.safeParse({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
    });
    if (!validationResult.success) {
        return { errors: validationResult.error.flatten().fieldErrors }
    }

    // await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // TODO: Create user
    // TODO: Create session
}