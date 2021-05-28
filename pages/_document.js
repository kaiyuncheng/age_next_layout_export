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

          <script
            async
            charSet="utf-8"
            src="https://static.dable.io/dist/plugin.min.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `(function (d, a, b, l, e, _) {
                          d[b] =
                            d[b] ||
                            function () {
                              (d[b].q = d[b].q || []).push(arguments);
                            };
                          e = a.createElement(l);
                          e.async = 1;
                          e.charSet = 'utf-8';
                          e.src = 'https://static.dable.io/dist/plugin.min.js';
                          _ = a.getElementsByTagName(l)[0];
                          _.parentNode.insertBefore(e, _);
                        })(window, document, 'dable', 'script');
                        dable('setService', 'thebetteraging.businesstoday');
                        dable('sendLogOnce');`,
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
