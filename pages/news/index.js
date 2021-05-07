import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Link from "next/link";
import { useMainContext } from '../../context/main';
import AsideSection from "../../components/AsideSection";
import ArticleList from "../../components/MainSection/ArticleList";


export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`Catalog/news`);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("getData error", error);
  }
};

export default function news({data}) {
    const {mainData} = useMainContext();
    const [newsData, setNewsData] = useState(data.data);

  return (
    <Layout siteTitle="幸福熟齡 - 最新文章">
      {/* <!-- bread crumb --> */}
      <div className="breadcrumb pt-7 md:pt-5 mb-5">
        <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
          <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
          <span className="mx-1">/</span>
          <a href="#" className="text-gray-800 font-normal">
            最新文章
          </a>
        </nav>
      </div>

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
             <ArticleList topics={newsData}/>
          </div>
          <AsideSection isHot={true}/>
        </div>
      </div>
    </Layout>
  );
}
