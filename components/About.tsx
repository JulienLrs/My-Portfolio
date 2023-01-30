import React from 'react'
import { motion } from 'framer-motion'; 

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
            max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[10px] 
            text-2xl text-[rgb(70,80,90)]'>
                A propos
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.18169-9/13912598_651959451622972_6725093248253112853_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=GgXjzbowf0kAX-yHPIX&tn=bVg7MBa1FUaVDQNT&_nc_ht=scontent.fcdg1-1.fna&oh=00_AfAMpyonwxUX7CS7bgIIqWsnwHmUJWhAuN7iW2WHzO7GjA&oe=63DF5AB8"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                />

            <div className='space-y-10 px-10 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Voici un petit récap:
                </h4>
                <p className='text-base'>Après avoir été responsable d’un bureau opérationnel et manager d’équipe pour des
                    grands loueurs de véhicule, j’ai décidé de réorienter mon parcours professionnel en souhaitant accompagner l’évolution
                    digitale de nos métiers et services.
                    J’ai donc décidé en 2022 de suivre une formation de développeur Web / Web
                    mobile (projet de fin d'étude réalisé sur le développement d'une application mobile en MERN, interface
                    dynamique, conception d’API, etc…) et compte la poursuivre au sein de xxxxx dans le cadre d’un
                    contrat de professionnalisation.
                    Fort de mon expérience dans cet environnement métier et grâce aux connaissances acquises, je recherche
                    donc un poste au sein de vos équipes en charge du développement de vos services digitaux, ou celles
                    agissant en maitrise d’ouvrage pour définir, suivre et contrôler des réalisations faites par des
                    prestataires externes.
                    Vous l’aurez noté mon parcours est atypique, mais il témoigne de ma motivation à atteindre mes
                    objectifs.
                </p>
            </div>
        </motion.div>
    )
}