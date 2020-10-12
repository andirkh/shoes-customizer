import Head from 'next/head'
import MainPage from '../views/MainPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shoe Configurator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  )
}
