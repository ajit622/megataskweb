import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'></link>
          <link rel="stylesheet" href="css/bootstrap.min.css" /> 
        </Head>
      <body>
        <Main />
        <NextScript />
        <script src="js/jquery-2.1.0.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </body>
    </Html>
  );
}
