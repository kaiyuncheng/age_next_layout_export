import React from "react";
import { useMainContext } from "../../context/main";
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";
import ProjectTitle from "./ProjectTitle";
import Fade from "react-reveal/Fade";

const AsideSection = ({ isHot, isProject }) => {
  const { mainData } = useMainContext();

  return (
    <Fade bottom>
      <aside className="w-full md:w-1/4">
        {isProject && <ProjectTitle />}

        <VideoSlider topics={mainData.hot_videos} />

        <Speakers title="最新快訊" topics={mainData.article_news} />

        {isHot && (
          <Speakers title="熱門文章" topics={mainData.hot_article_banners} />
        )}
      </aside>
    </Fade>
  );
};

export default AsideSection;
