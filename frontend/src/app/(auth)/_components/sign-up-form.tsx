"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from 'react-hook-form';
import { SignUpSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/app/actions/auth-actions";
import { useMutation } from "@tanstack/react-query";

export type SignUpData = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {
    const { register, reset } = useForm<SignUpData>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            firstName: "Robert",
            lastName: "Muchiri",
            email: "developedbyrobbiegmailcom",
            password: "wareva",
            confirmPassword: "wareva"
        }
    });

    const { mutate: action, data, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            reset();
        }
    });

  return (
    <>
        <form action={action} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input {...register("firstName")} id="firstName" name="firstName" />
                    {data?.errors?.firstName && (
                        <p className="text-sm text-red-500">{data.errors.firstName}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input {...register("lastName")} id="lastName" name="lastName" />
                    {data?.errors?.lastName && (
                        <p className="text-sm text-red-500">{data.errors.lastName}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} id="email" name="email" />
                {data?.errors?.email && (
                    <p className="text-sm text-red-500">{data.errors.email}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input {...register("password")} id="password" name="password" type="password" />
                {data?.errors?.password && (
                    <p className="text-sm text-red-500">{data.errors.password}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input {...register("confirmPassword")} id="confirmPassword" name="confirmPassword" type="password" />
                {data?.errors?.confirmPassword && (
                    <p className="text-sm text-red-500">{data.errors.confirmPassword}</p>
                )}
            </div>

            <Button disabled={isPending} className="w-full">
                Sign Up
            </Button>
        </form>

        <p className="text-sm text-muted-foreground">
            Already have an account? <a href="/sign-in" className="text-primary hover:underline">Log in</a>
        </p>
    </>
  )
}