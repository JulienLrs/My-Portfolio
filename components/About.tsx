import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[10px] text-2xl text-[rgb(70,80,90)]'>
                A propos
            </h3>
        </div>
    )
}