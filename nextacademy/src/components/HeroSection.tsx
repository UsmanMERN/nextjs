import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

type Props = {};

export default function HeroSection({ }: Props) {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <div className="p-4 relative z-10 w-full text-center">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Development</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Elevate your craft, forge digital experiences, and transform ideas into reality. Join a community of innovators, creators, and problem solvers, where every line of code written opens doors to endless possibilities. Dive deep into the ever-evolving landscape of technology, where creativity meets functionality, and innovation knows no bounds.</p>
                <div className="mt-4">
                    <Link href={"/"}>
                        <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
