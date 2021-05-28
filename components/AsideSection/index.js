import React from "react";
import { useMainContext } from "../../context/main";
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";
import BrandInfo from "./BrandInfo";
import Fade from "react-reveal/Fade";
import Banner from "../utils/googletags/Banner";

const AsideSection = ({ isHot, isBrandOpen, brandData }) => {
  const { mainData } = useMainContext();

  return (
    <Fade bottom>
      <aside className="w-full md:w-[300px]">
        {isBrandOpen && <BrandInfo brandData={brandData} />}

        <VideoSlider topics={mainData.hot_videos} />

        <div className="flex justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner adId="thebetterraging_pc_list_300x250_rt" />
        </div>

        <Speakers title="最新快訊" topics={mainData.article_news} />

        {/* 廣告目前無此欄位 */}
        <div className="flex justify-center items-center mt-10 mb-10 border border-red-500">
          <Banner adId="thebetterraging_pc_article_300x250_rt" />
        </div>

        {isHot && (
          <Speakers title="熱門文章" topics={mainData.hot_article_banners} />
        )}
      </aside>
    </Fade>
  );
};

export default AsideSection;
