"use client";

import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    INVESTMENT_GOALS,
    PREFERRED_INDUSTRIES,
    RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useForm } from "react-hook-form";

interface SignUpFormData {
    fullName: string;
    email: string;
    password: string;
    country: string;
    investmentGoals: string;
    riskTolerance: string;
    preferredIndustry: string;
}

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            country: "IN",
            investmentGoals: "Growth",
            riskTolerance: "Medium",
            preferredIndustry: "Technology",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="Full Name"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{
                        required: "Full Name is required",
                        minLength: 2,
                    }}
                />

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

                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoal"
                    label="Investment Goal"
                    placeholder="Select your Investment goals"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />
                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select You preferred industries"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
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

                <FooterLink text="Already have an account ?" linkText="Sign In" href="/sign-in"/>
            </form>
        </>
    );
};

export default SignUp;
