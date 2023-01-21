import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import ProfilePicture from "../public/images/photo-profile.jpeg";

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, Je suis Julien",
            "J'adore le café.tsx",
            "<MaisEncorePlusCoder />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src={ProfilePicture}
                className="relative rounded-full h-32 w-32 mx-auto object-cover" alt="photo de profil"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase ² pb-2 tracking-[10px]'>
                    Développeur Web
                </h2>
                <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#C09B23' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>A propos</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Expérience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projets</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}