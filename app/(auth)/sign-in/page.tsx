"use client";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Welcome Back !</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="emai"
                    label="Email"
                    placeholder="John@Doe.com"
                    register={register}
                    error={errors.email}
                    type="email"
                    validation={{
                        required: "Email is required",
                        pattern: /^\w+@\w+\.\W+$/,
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="********"
                    register={register}
                    error={errors.password}
                    type="password"
                    validation={{
                        required: "Password is required",
                        minLength: 8,
                    }}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="yellow-btn w-full mt-5"
                >
                    {isSubmitting
                        ? "Creating Account"
                        : "Start Your Investing Journey"}
                </Button>

                <FooterLink
                    text="Don't have an account ?"
                    linkText="Sign Up"
                    href="/sign-up"
                />
            </form>
        </>
    );
};

export default SignIn;
