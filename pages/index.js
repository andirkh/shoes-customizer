import Head from 'next/head'
import MainPage from '../views/MainPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build Your Own Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  )
}
