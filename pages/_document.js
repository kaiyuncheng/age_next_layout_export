import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }

  render() {
    return (
      <Html>
        <Head>
          <script
            async="async"
            src="https://www.googletagservices.com/tag/js/gpt.js"
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-990045206"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-990045206');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
