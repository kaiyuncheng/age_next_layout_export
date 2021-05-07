import React from "react";
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";

const AsideSection = () => {
  return (
    <aside className="w-full md:w-1/4">
      <VideoSlider/>

      <Speakers title="最新快訊" />

      {/* <Speakers title="熱門文章" /> */}
    </aside>);
};

export default AsideSection;
