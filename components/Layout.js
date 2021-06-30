import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import DableFullCover from './utils/dable/DableFullCover';
import Banner from "./utils/googletags/Banner";
import GoTop from "./utils/GoTop";
// import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const Layout = ({ children, siteTitle, isFBLogin, handleFBLogout }) => {
  return (
    <div>
      <Head>
        <meta property="fb:admins" content="100000235436113" />
        <title>{siteTitle}</title>

        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="alternate icon" href="/images/favicon.ico" />

        {/* <script type="text/javascript" src="/js/mqttws31.min.js"></script>
        <script type="text/javascript" src="/js/deviceAPI.js"></script>
        <script type="text/javascript" src="/js/bt_mqtt.js"></script> */}

        {/* 全版蓋板廣告 域動廣告ID 刪除 */}
        {/* <script
          type="text/javascript"
          src={`/js/v3.js?${new Date().getTime()}`}
        ></script> */}

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

      {/* <Banner adId="test_thebetteraging_pc_in-cover" />
      <Banner adId="test_thebetteraging_mob_320x480_cover" /> */}

      <Banner adId="thebetteraging_pc_in-cover" />
      <Banner adId="thebetteraging_mob_320x480_cover" />
    </div>
  );
};

export default Layout;
