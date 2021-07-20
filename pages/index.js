import Head from 'next/head'
import Image from 'next/image'
import HomePage from './home'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Unsplashed</title>
        <meta name="description" content="Image gallery with unsplash api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
