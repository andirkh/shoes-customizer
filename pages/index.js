import Head from "next/head";
import MainPage from "../views/MainPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build Your Own Shoes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  );
}
