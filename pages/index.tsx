import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(21,24,32)] text-[#bbc0c5] h-screen snap-y snap-mandatory overflow-scroll z-0" >
      <Head>
        <title>Jay's Portfolio</title>
      </Head>

      {/*HEADER*/}

      <Header />

      {/*HERO*/}

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/*ABOUT*/}

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/*EXPERIENCE*/}
      <section id="experience" className='snap-center'>
        <Experiences />
      </section>

      {/*Skills*/}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/*Projects*/}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      {/*Contact Me*/}

    </div>
  )
}
