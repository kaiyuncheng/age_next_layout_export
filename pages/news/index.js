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

    useEffect(() => {
      setNewsData(data);
    }, [data]);

  return (
    <Layout siteTitle="幸福熟齡 - 最新文章">
      {/* PC 內頁廣告上 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto mt-10 mb-5 px-4 lg:px-2 flex justify-center items-center border border-red-500">
        <Banner adId="thebetteraging_pc_home_970x250_t" />
      </div>

      {/* Mobile 內頁廣告上 */}

      <div className="block sm:hidden mt-14 mb-4 flex justify-center items-center border border-red-500">
        <Banner adId="thebetteraging_mob_home_300x250_t" />
      </div>

      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[{ title: '最新文章', link: '/news' }]} />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <ArticleList topics={newsData} />
          </div>
          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
}
