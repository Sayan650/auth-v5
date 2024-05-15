"use client"

import { CardWrapper } from "./card-wrapper"
import * as z from "zod"
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return(
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonHref="/auth/signup"
            backButtonLabel="Dont have an account?"
            showSocial
        >
            Login Form
        </CardWrapper>
    )
}