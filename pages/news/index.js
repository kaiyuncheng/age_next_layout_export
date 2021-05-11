import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import AsideSection from "../../components/AsideSection";
import ArticleList from "../../components/MainSection/ArticleList";
import BreadCrumb from "../../components/utils/BreadCrumb";


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
    const [newsData, setNewsData] = useState(data.data);

  return (
    <Layout siteTitle="幸福熟齡 - 最新文章">
      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[ { title: '最新文章', link: '/news' }]}/>

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
