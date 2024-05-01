"use client"
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

type Props = {}

const content = [
    {
        title: "Responsive Design",
        description:
            "Deliver a seamless user experience across all devices with our responsive design. Whether your users access your app on desktop, tablet, or mobile, they'll enjoy a consistent and optimized layout.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Responsive Design
            </div>
        ),
    },
    {
        title: "Offline Access",
        description:
            "Enable users to access content and functionality even when they're offline. With offline access, your app remains usable in areas with poor or no internet connectivity, ensuring uninterrupted productivity.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Offline Access
            </div>
        ),
    },
    {
        title: "Push Notifications",
        description:
            "Engage users and keep them informed with push notifications. Notify users about important updates, new features, or personalized messages, driving user engagement and retention.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--teal-500))] flex items-center justify-center text-white">
                Push Notifications
            </div>
        ),
    },
    {
        title: "Cross-Platform Compatibility",
        description:
            "Reach a wider audience by developing your app for multiple platforms. Our platform ensures seamless compatibility across web, iOS, and Android, allowing you to maximize your app's reach and impact.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
                Cross-Platform Compatibility
            </div>
        ),
    },
];


export default function WhyChooseUs({ }: Props) {
    return (
        <div className=''>
            <StickyScroll content={content} />
        </div>
    )
}