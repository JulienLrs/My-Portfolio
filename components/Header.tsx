import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
                {/*Social Icons*/}
                <SocialIcon
                    url="https://github.com/JulienLrs"
                    fgColor='#e2e6e9'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/JulienLrs"
                    fgColor='#e2e6e9'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/JulienLrs"
                    fgColor='#e2e6e9'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center cursor-pointer'>
                <SocialIcon
                    network='email'
                    fgColor='#e2e6e9'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm'>
                    Contactez moi
                </p>
            </motion.div>
        </header>
    )
}