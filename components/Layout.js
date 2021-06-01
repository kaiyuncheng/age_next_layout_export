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

      <Header />

      <main className="mt-28 md:mt-44 flex flex-col pb-14">{children}</main>

      {/* <div className="modal">
        <div className="modal-content">
          <span className="close">×</span>

          <div id="dablewidget_goBezRXe" data-widget_id="goBezRXe">
            <iframe
              width="100%"
              height="433"
              title="你不能錯過的新聞"
              frameBorder="0"
              scrolling="no"
              name="dableframe-0.20140056594932387"
              src="https://api.dable.io/widgets/id/goBezRXe/users/45567756.1590412564953?from=https%3A%2F%2Fthebetteraging.businesstoday.com.tw%2F&amp;url=https%3A%2F%2Fthebetteraging.businesstoday.com.tw%2F&amp;ref=&amp;cid=45567756.1590412564953&amp;uid=45567756.1590412564953&amp;site=thebetteraging.businesstoday&amp;id=dablewidget_goBezRXe&amp;ad_params=%7B%7D&amp;pixel_ratio=2&amp;client_width=0&amp;network=non-wifi&amp;lang=zh-TW&amp;pre_expose=1&amp;is_top_win=1&amp;top_win_accessible=1"
              data-ready="1"
            ></iframe>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Layout;
