import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useMainContext } from '../context/main';
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import MainSlider from "../components/utils/sliders/MainSlider";
import Tabs from "../components/LatestSection/Tabs";
import DigitalSlider from "../components/utils/sliders/DigitalSlider";
import Category from "../components/MainSection/Category";
import AsideSection from "../components/AsideSection";
import Banner from "../components/utils/googletags/Banner"

// import Banner2 from "../components/utils/googletags/Banner2";


export default function Home() {
  const {mainData} = useMainContext();

  return (
    <Layout siteTitle="幸福熟齡 - 從今開始，一同勾勒熟齡的美好">
      <MainSlider topics={mainData.top_banners} />
    {console.log(mainData)}


    <Fade bottom>
      <div className="latest border-box mb-10">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 lg:space-x-10">
          <Tabs tab1topics={mainData.hot_article_banners} tab2topics={mainData.new_article_banners} />
          <DigitalSlider topics={mainData.special_banners} />
        </div>
      </div>
    </Fade>

      {/* <Banner /> 
      <Banner2/> */}

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col space-y-14 overflow-hidden pt-5">

          {mainData.block_banners_list && mainData.block_banners_list.map((block)=>{
            return(
              <Category key={block.category_id} name={block.name} id={block.category_id} data={block.data} isInnerCategory={false} />
            );
          })}
          </div>
          <AsideSection isHot={false} isProject={false}  videoTopics={mainData.hot_videos} newsTopics={mainData.article_news}/>
        </div>
      </div>
      <Banner adId="div-gpt-ad-1529567429364-1" />
    </Layout>
  );
}
