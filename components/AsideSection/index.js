import React from "react";
import { useMainContext } from "../../context/main";
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";
import BrandInfo from "./BrandInfo";
import Fade from "react-reveal/Fade";
import Banner from "../utils/googletags/Banner";

const AsideSection = ({ isHot, isBrandOpen, brandData, type, i }) => {
  const { mainData } = useMainContext();

  return (
    <Fade bottom>
      <aside className="w-full md:w-[300px]">
        {isBrandOpen && <BrandInfo brandData={brandData} />}
        <VideoSlider topics={mainData.hot_videos} />

        {/* PC 首頁 側邊欄 上 */}
        <div className="hidden md:flex justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner adId="thebetterraging_pc_list_300x250_rt" />
        </div>

        {/* MB 首頁 側邊欄 上 */}
        <div className="flex md:hidden justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner adId="thebetteraging_mob_home_300x250_mb" />
        </div>

        {/* <div className="hidden md:flex justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner
            adId={
              !i
                ? `thebetterraging_pc_${type}_300x250_rt`
                : `thebetterraging_pc_${type}_300x250_rt_${i}`
            }
          />
        </div>

        <div className="flex md:hidden justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner
            adId={
              !i
                ? `thebetteraging_mob_${type}_300x250_mb`
                : `thebetteraging_mob_${type}_300x250_mb_${i}`
            }
          />
        </div> */}

        <Speakers title="最新快訊" topics={mainData.article_news} />

        {/* PC 首頁 側邊欄 下 */}
        <div className="hidden md:flex justify-center items-center mt-10 mb-10 border border-red-500">
          <Banner adId="thebetterraging_pc_article_300x250_rt" />
        </div>

        {/* MB 首頁 側邊欄 下 */}
        <div className="flex md:hidden justify-center items-center mt-10 mb-10 border border-red-500">
          <Banner adId="thebetteraging_mob_home_300x250_b" />
        </div>

        {/* <div className="hidden md:flex justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner
            adId={
              !i
                ? `thebetterraging_pc_${type}_300x250_rm`
                : `thebetterraging_pc_${type}_300x250_rm_${i}`
            }
          />
        </div>

        <div className="flex md:hidden justify-center items-center mt-5 mb-10 border border-red-500">
          <Banner
            adId={
              !i
                ? `thebetteraging_mob_${type}_300x250_b`
                : `thebetteraging_mob_${type}_300x250_b_${i}`
            }
          />
        </div> */}

        {isHot && (
          <Speakers title="熱門文章" topics={mainData.hot_article_banners} />
        )}
      </aside>
    </Fade>
  );
};

export default AsideSection;
