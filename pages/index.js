import React, { useState, useEffect } from "react";
import { useMainContext } from '../context/main';
import { Fade } from 'react-awesome-reveal';
import Layout from "../components/Layout";
import MainSlider from "../components/utils/sliders/MainSlider";
import Tabs from "../components/LatestSection/Tabs";
import DigitalSlider from "../components/utils/sliders/DigitalSlider";
import Category from "../components/MainSection/Category";
import AsideSection from "../components/AsideSection";
import Banner from "../components/utils/googletags/Banner";

export default function Home() {
  const {mainData} = useMainContext();

  return (
    <Layout siteTitle="幸福熟齡 - 從今開始，勾勒美好第二人生">
      {mainData && (
          <MainSlider topics={mainData.top_banners} />
      )}

      <Fade triggerOnce direction="up">
        <div className="latest border-box mb-10">
          <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row space-y-0 md:space-x-4 lg:space-x-10">
            {mainData && (
              <Tabs
                tab1topics={mainData.hot_article_banners}
                tab2topics={mainData.new_article_banners}
              />
            )}

            {/* Mobile 首頁 廣告上 */}
            <div className="block sm:hidden flex justify-center items-center">
              <Banner adId="thebetteraging_mob_home_300x250_t" />
            </div>

            {mainData && <DigitalSlider topics={mainData.special_banners} />}
          </div>
        </div>
      </Fade>

      {/* PC 首頁 廣告上 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetteraging_pc_home_970x250_t" />
      </div>

      {/* Mobile 首頁 廣告下 */}
      <div className="block sm:hidden flex justify-center items-center">
        <Banner adId="thebetteraging_mob_home_300x250_m" />
      </div>

      <div className="sections mb-14">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col space-y-14 overflow-hidden pt-5">
            {mainData &&
              mainData.block_banners_list &&
              mainData.block_banners_list.map(block => {
                return (
                  <Category
                    key={block.category_id}
                    name={block.name}
                    id={block.category_id}
                    data={block.data}
                    isIndexCategory={true}
                    parentName={block.name}
                  />
                );
              })}
          </div>
          {mainData && (
            <AsideSection
              isHot={false}
              isProject={false}
              videoTopics={mainData.hot_videos}
              newsTopics={mainData.article_news}
              type={'home'}
            />
          )}
        </div>
      </div>

      {/* PC 首頁 廣告下 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetteraging_pc_home_970x250_b" adStyle={''} />
      </div>
    </Layout>
  );
}