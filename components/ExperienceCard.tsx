import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.18169-9/13912598_651959451622972_6725093248253112853_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=GgXjzbowf0kAX-yHPIX&tn=bVg7MBa1FUaVDQNT&_nc_ht=scontent.fcdg1-1.fna&oh=00_AfAMpyonwxUX7CS7bgIIqWsnwHmUJWhAuN7iW2WHzO7GjA&oe=63DF5AB8"
        alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of Myself</h4>
        <p className='font-bold text-2xl mt-1'>MYSELF</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
        </div>
        <p className='uppercase py-5 text-[rgb(70,80,90)]'>Starterd work... - Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}