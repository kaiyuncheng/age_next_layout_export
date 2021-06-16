import React from "react";
import { useMainContext } from "../../context/main";
import VideoSlider from "../utils/sliders/VideoSlider";
import Speakers from "./Speakers";
import BrandInfo from "./BrandInfo";
import Fade from "react-reveal/Fade";
import Banner from "../utils/googletags/Banner";
import clsx from "clsx";

const AsideSection = ({
  isHot,
  isBrandOpen,
  brandData,
  type,
  i,
  showPcAside,
  showMbAside,
}) => {
  const { mainData } = useMainContext();

  return (
    <Fade bottom when={true}>
      <aside
        className={clsx(
          showPcAside && 'hidden md:block',
          showMbAside && 'md:hidden block',
          'w-full md:w-[300px]',
        )}
      >
        {isBrandOpen && <BrandInfo brandData={brandData} />}
        <VideoSlider topics={mainData.hot_videos} />

        {/* PC 首頁 側邊欄 上 */}
        <div className="hidden sm:flex justify-center items-center my-5">
          <Banner
            adId={
              !i
                ? `thebetterraging_pc_${type}_300x250_rt`
                : `thebetterraging_pc_${type}_300x250_rt_${i}`
            }
            adStyle={'my-5'}
          />
        </div>

        {/* MB 首頁 側邊欄 上 */}
        <div className="flex sm:hidden justify-center items-center my-5">
          <Banner
            adId={
              !i
                ? `thebetteraging_mob_${type}_300x250_mb`
                : `thebetteraging_mob_${type}_300x250_mb_${i}`
            }
          />
        </div>

        {isHot && (
          <Speakers title="熱門文章" topics={mainData.hot_article_banners} />
        )}

        {!isHot && <Speakers title="最新快訊" topics={mainData.article_news} />}

        {/* PC 首頁 側邊欄 下 */}
        <div className="hidden sm:flex justify-center items-center my-5">
          <Banner
            adId={
              !i
                ? `thebetterraging_pc_${type}_300x250_rm`
                : `thebetterraging_pc_${type}_300x250_rm_${i}`
            }
          />
        </div>

        {/* MB 首頁 側邊欄 下 */}
        <div className="flex sm:hidden justify-center items-center my-5">
          <Banner
            adId={
              !i
                ? `thebetteraging_mob_${type}_300x250_b`
                : `thebetteraging_mob_${type}_300x250_b_${i}`
            }
          />
        </div>

        {isHot && <Speakers title="最新快訊" topics={mainData.article_news} />}
      </aside>
    </Fade>
  );
};

export default AsideSection;
