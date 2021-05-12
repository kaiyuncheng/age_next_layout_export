import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

// const siteTitle ='幸福熟齡 - 從今開始，一同勾勒熟齡的美好';
const Layout = ({ children, siteTitle }) => {
  return (
    <div>
      <Head>
        <meta property="fb:admins" content="100000235436113" />
        <meta name="title" content={siteTitle} />
        <meta
          itemProp="description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          name="description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          name="keywords"
          content="熟齡,長照,樂齡,學習,健康,照護,退休,幸福熟齡,銀髮,品味人生,今周刊"
        />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          property="og:url"
          content="http://thebetteraging.businesstoday.com.tw/"
        />
        <meta
          itemProp="image"
          property="og:image"
          content="https://thebetteraging.businesstoday.com.tw/lazyweb/web/images/metalogo201804.png"
        />
        <meta
          itemProp="image"
          content="https://thebetteraging.businesstoday.com.tw/lazyweb/web/images/metalogo201804.png"
        />
        <meta property="og:type" content="website" />
        

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

        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://thebetteraging.businesstoday.com.tw/lazyweb/web/images/favicon.ico"
        />
      </Head>

      <Header />

      <main className="mt-28 md:mt-44 flex flex-col pb-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
