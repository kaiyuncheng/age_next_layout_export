import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import DableFullCover from './utils/dable/DableFullCover';
import Banner from "./utils/googletags/Banner";
import GoTop from "./utils/GoTop";
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


const Layout = ({ children, siteTitle, isFBLogin, handleFBLogout }) => {
  return (
    <div>
      <Head>
        {/* <meta property="fb:admins" content="100000235436113" /> */}
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
          content="https://thebetteraging.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta
          itemProp="image"
          content="https://thebetteraging.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta property="og:type" content="website" />
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://new-thebetteraging-dev.businesstoday.com.tw/images/favicon.ico"
        />
        {/* 'https://new-thebetteraging-dev.businesstoday.com.tw/images/favicon.ico'  */}
        {/* 'https://thebetteraging.businesstoday.com.tw/images/favicon.ico'  */}
        {/* https://thebetteraging.businesstoday.com.tw/lazyweb/web/images/favicon.ico */}
        {/* <script
          async="async"
          src="https://www.googletagservices.com/tag/js/gpt.js"
        ></script> */}
      </Head>

      <GoTop />
      <DableFullCover />
      <Header isFBLogin={isFBLogin} handleFBLogout={handleFBLogout} />
      <main className="mt-28 md:mt-44 flex flex-col pb-14">{children}</main>
      <Footer />

      <Banner adId="test_thebetteraging_pc_in-cover" />
      <Banner adId="test_thebetteraging_mob_320x480_cover" />

      {/* <Banner adId="thebetteraging_pc_in-cover" />
      <Banner adId="thebetteraging_mob_320x480_cover" /> */}

     
    </div>
  );
};

export default Layout;
