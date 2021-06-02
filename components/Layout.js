import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import DableFullCover from './utils/dable/DableFullCover';
import Banner from "./utils/googletags/Banner";

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
          content="https://new-thebetteraging-kai.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta
          itemProp="image"
          content="https://new-thebetteraging-kai.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta property="og:type" content="website" />

        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://thebetteraging.businesstoday.com.tw/lazyweb/web/images/favicon.ico"
        />

        {/* <script
          async="async"
          src="https://www.googletagservices.com/tag/js/gpt.js"
        ></script> */}
      </Head>

      <Banner adId="thebetteraging_pc_in-cover" />

      <DableFullCover />
      <Header />
      <main className="mt-28 md:mt-44 flex flex-col pb-14">{children}</main>
      <Footer />

      <div className="fixed bottom-0 left-0">
        <Banner adId="thebetteraging_pc_in-cover" />
      </div>

      <div className="fixed bottom-0 left-0">
        <Banner adId="thebetteraging_mob_320x480_cover" />
      </div>
    </div>
  );
};

export default Layout;
