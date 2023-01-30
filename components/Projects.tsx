import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function
    ({ }: Props) {

    const projects = [1, 2, 3, 4, 5]

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[10px] text-2xl text-[rgb(70,80,90)]'>
                Projets
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img 
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold'>
                                <span className='underline decoration-[#F7AB0A]/80'>
                                    Etude de cas {i + 1} sur {projects.length} :
                                </span>
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                            Netflix est une entreprise multinationale américaine créée à Scotts Valley en 1997 par Reed Hastings et Marc Randolph appartenant au secteur d'activité des industries créatives
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/40 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}