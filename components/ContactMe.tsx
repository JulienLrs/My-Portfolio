import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { getPageStaticInfo } from 'next/dist/build/analysis/get-page-static-info';

type Props = {}

function ContactMe({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[10px] text-2xl text-[rgb(70,80,90)]'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Tout ce dont vous avez besoin.{" "}
                    <span className='decoration-[#F7AB0A]/80 underline'>Parlons-en !</span>
                </h4>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+33 123456789</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>julien.larrouse@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>8 developer lane</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input
                            placeholder='Name'
                            className='contactInput'
                            type="text"
                        />
                        <input
                            placeholder='Email'
                            className='contactInput'
                            type="email"
                        />
                    </div>

                    <input
                        placeholder='Sujet'
                        className='contactInput'
                        type="text"
                    />

                    <textarea
                        placeholder='Message'
                        className='contactInput' />

                    <button 
                    type='submit'
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;