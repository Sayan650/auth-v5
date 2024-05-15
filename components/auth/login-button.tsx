"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
    mode?: "modal" | "redirect";
}

export const LoginButton = ({
    children,
    asChild,
    mode = "modal",
}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    }

    // const onEnter = () => {
    //     console.log("enter")
    // }

    if (mode === "modal") {
        return(
            <span>
                Implemented modal
            </span>
        )
    }

  return (
    <div onClick={onClick} className='cursor-pointer'>
        {children}
    </div>
  )
}
