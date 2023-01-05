import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(16,18,24)] text-[#bbc0c5] h-screen snap-y snap-mandatory overflow-scroll z-0" >
      <Head>
        <title>Jay's Portfolio</title>
      </Head>

      {/*HEADER*/}

      <Header />

      {/*HERO*/}

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/*ABOUT*/}

      <section id='about' className='snap-center'>
        <About />
      </section>
      {/*EXPERIENCE*/}

      {/*Skills*/}

      {/*Projects*/}

      {/*Contact Me*/}

    </div>
  )
}
