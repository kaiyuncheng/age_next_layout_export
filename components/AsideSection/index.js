import React from "react";
import { useMainContext } from '../../context/main';
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";

const AsideSection = ({isHot}) => {
  const {mainData} = useMainContext();
  
  return (
    <aside className="w-full md:w-1/4">
      <VideoSlider topics={mainData.hot_videos}/>

      <Speakers title="最新快訊" topics={mainData.article_news} />
      

      {isHot && <Speakers title="熱門文章" topics={mainData.hot_article_banners} />}
    </aside>);
};

export default AsideSection;
