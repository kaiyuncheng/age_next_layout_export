import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "../../components/ProjectSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AsideSection from "../../components/AsideSection";

import MainVideo from "../../components/MainSection/MainVideo";
import VideoList from "../../components/MainSection/VideoList";
import FourColumns from "../../components/MainSection/FourColumns";

const mainVideoData = {
  url_query: "12345",
  title:
    "影片標題更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活",
  minor_title:
    "影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活",
  image_url:
    "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/001_1140x855.jpg",
};
export default function projects() {
  return (
    <Layout siteTitle="幸福熟齡 - Hot影音">
      <ProjectSection />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">

          {/* <!-- project title --> */}
          <div className="flex items-center">
              <div className="overflow-hidden rounded-lg w-20 h-14 mr-5">
                <img
                  className="w-full h-full object-cover"
                  src="https://doqvf81n9htmm.cloudfront.net/data/heidilin_146/0ESG/shutterstock_556478710.jpg"
                  alt=""
                />
              </div>
              <h2 className="xs:text-2xl text-xl font-bold">LOGO標題</h2>
            </div>

          {/* <!-- bread crumb --> */}
          <BreadCrumb
              titles={[
                { title: "精選專題", link: "" },
                { title: "精選專題標題", link: `project/${"id"}` },
              ]}
            />
            
            {/* <!-- title info Mobile --> */}
            <div className="md:hidden border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col justify-cneter mb-10">
              <h3 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
                關於品牌標題
              </h3>
              <p className="p-5 text-gray-700">
                曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，《棋神物語》等。最大特點是好奇，最大願望是慢慢咀嚼幸福，最大嗜好是讀書、美食和旅行。
              </p>
            </div>

            <MainVideo topics={mainVideoData} />

            <FourColumns />

            {/* {categoriesData.SliderCategoryArticle &&
                <ArticlesSlider topics={categoriesData.SliderCategoryArticle}/>}
            
            
            {categoriesData.article_info &&
                categoriesData.article_info.map((block) => {
                return (
                  <Category
                    key={block.category_id}
                    name={block.name}
                    id={block.category_id}
                    data={block.data}
                    isInnerCategory={true}
                  />
                );
              })} */}
          </div>
          <AsideSection isHot={true} isProject={true} />
        </div>
      </div>
    </Layout>
  );
}
