import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import AsideSection from "../../components/AsideSection";
import ArticleList from "../../components/MainSection/ArticleList";
import BreadCrumb from "../../components/utils/BreadCrumb";
import Banner from '../../components/utils/googletags/Banner';

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`Catalog/news`);
    
    if (!data.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        data: data.data,
      },
    };

  } catch (error) {
    console.log("getData error", error);
  }
};

export default function news({data}) {
    const [newsData, setNewsData] = useState(data);
    const [showAside, setShowAside] = useState(false);

    useEffect(() => {
      setNewsData(data);
    }, [data]);

  return (
    <Layout siteTitle="幸福熟齡 - 最新文章">
      {/* PC 列表頁 廣告上 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetterraging_pc_list_970x250_t" />
      </div>

      {/* Mobile 列表頁廣告上 */}
      <div className="block sm:hidden flex justify-center items-center">
        <Banner adId="thebetteraging_mob_list_300x250_t" />
      </div>

      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[{ title: '最新文章', link: '/news' }]} />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <ArticleList topics={newsData} setShowAside={setShowAside} />
          </div>
          <AsideSection isHot={true} type={'list'} showPcAside={true} />
          
          {showAside && (
            <AsideSection isHot={true} type={'article'} showMbAside={true} />
          )}
        </div>
      </div>
    </Layout>
  );
}
