"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type Props = {}

export default function TestimonialCard({ }: Props) {
    return (
        <>
            <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
        </>
    )
}

const testimonials = [
    {
        quote:
            "Throughout the web development process, we focused on user-centric design principles and cutting-edge technologies, resulting in a highly intuitive and engaging user experience. Our collaboration with the design team ensured seamless integration of visual elements, enhancing the overall aesthetics of the platform.",
        name: "John Doe",
        title: "Lead Web Developer",
    },
    {
        quote:
            "In mobile app development, we prioritized performance and functionality, delivering a feature-rich application that meets the needs of modern users. By leveraging native APIs and optimizing code efficiency, we achieved smooth performance across various devices and platforms.",
        name: "Jane Smith",
        title: "Mobile App Developer",
    },
    {
        quote:
            "Our web application development team embraced an agile approach, allowing us to iterate quickly and adapt to evolving requirements. By fostering collaboration and communication, we delivered a scalable and robust solution that exceeded our client's expectations.",
        name: "Alex Johnson",
        title: "Senior Web Developer",
    },
    {
        quote:
            "As a mobile app designer, I focused on creating an intuitive and visually appealing user interface that enhances usability and engagement. By conducting thorough user research and prototyping, we crafted a seamless mobile experience that delights users and drives retention.",
        name: "Emily Brown",
        title: "Mobile App Designer",
    },
    {
        quote:
            "Our web development team's commitment to excellence drove the success of our latest project. By meticulously planning and executing each stage of development, we delivered a high-quality web solution that not only meets but exceeds our client's business objectives.",
        name: "Michael Wilson",
        title: "Web Development Team Lead",
    },
];
