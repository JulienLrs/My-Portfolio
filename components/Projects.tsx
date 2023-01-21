import React from 'react'

type Props = {}

export default function
    ({ }: Props) {
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[10px] text-2xl text-[rgb(70,80,90)]'>
                Projets
            </h3>

            <div className='w-full absolute top-[30%] bg-[#C09B23]/50 left-0 h-[500px] -skew-y-12'/>
        </div>
    )
}