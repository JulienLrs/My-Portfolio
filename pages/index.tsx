import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../componentes/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay's Portfolio</title>
      </Head>

    {/*Header*/}
    <Header />

    {/*Hero*/}
    <section id='hero'>

    </section>
    {/*About*/}

    {/*Experience*/}

    {/*Skills*/}

    {/*Projects*/}

    {/*Contact Me*/}

    </>
  )
}
