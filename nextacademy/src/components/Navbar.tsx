"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className=" flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses/web-development">Web Development</HoveredLink>
                        <HoveredLink href="/courses/mobile-app-development">Mobile App Development</HoveredLink>
                        <HoveredLink href="/courses/frontend-development">Frontend Development</HoveredLink>
                        <HoveredLink href="/courses/backend-development">Backend Development</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        <HoveredLink href="/contact">Get in Touch</HoveredLink>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}
