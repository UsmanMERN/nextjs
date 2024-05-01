'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { title } from 'process';

type Props = {}

export default function UpcomingWebinar({ }: Props) {
    return (
        <div className='p-12 bg-gray-900'>
            <div className="max-w-7xl mx-auto ox-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-bsae text-teal-600 font-semibold tracking-wide uppercase transition duration-500 ease-in-out transform hover:scale-105 hover:text-teal-800">Upcoming Events</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl transition duration-500 ease-in-out transform hover:scale-105 hover:text-teal-400 capitalize">Learn With the Best</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={upcomingEvents.map((webinar) => ({
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.slug,
                    }))} />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const upcomingEvents = [
    {
        title: "Full Stack Web Development Bootcamp",
        description: "A comprehensive course covering front-end and back-end technologies, equipping you with the skills to build dynamic web applications.",
        slug: "/"
    },
    {
        title: "Mobile App Development Masterclass",
        description: "Learn how to develop mobile apps for iOS and Android platforms from scratch, including UI design, app architecture, and deployment.",
        slug: "/"
    },
    {
        title: "UI/UX Design Fundamentals",
        description: "Explore the principles of user interface and user experience design, and learn how to create intuitive and visually appealing digital experiences.",
        slug: "/"
    },
    {
        title: "Data Science and Machine Learning Bootcamp",
        description: "Dive into the world of data science and machine learning, and learn how to extract insights from data and build predictive models.",
        slug: "/"
    },
    {
        title: "Cybersecurity Essentials",
        description: "Gain essential knowledge and skills in cybersecurity, including threat detection, risk management, and secure coding practices.",
        slug: "/"
    },
    {
        title: "Cloud Computing Certification",
        description: "Become proficient in cloud computing technologies and platforms, and learn how to deploy and manage scalable cloud-based solutions.",
        slug: "/"
    },
];
