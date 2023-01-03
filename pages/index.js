import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>conradevs</title>
        <meta name="description" content="Conrado Silveira portfolio website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
    </div>
  )
}
