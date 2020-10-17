import Head from "next/head";
import { Jumbotron } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-61952975-11"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-61952975-11');
        `,
          }}
        />
      </Head>
      <div className="p-5">
        <Row>
          <Col lg={7} xs={12}>
            <h1 className="mb-5">Hello There,</h1>
            <p className="text-monospace">{`I'm Andi (@andirkh), on the last 2 years I'm working for the one of Texas - Austin based company as a Remote UI Software Engineer.`}</p>
            <p className="text-monospace">{`This project is a fun project to keep myself always creative. I love sneakers so I thought, let's create a shoes customizer site 😛.`}</p>
            <p className="text-monospace">{`I do have several fixes or features for this site. Here's the list of them :`}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
