import Layout from "../../components/Layout";
import Link from "next/link";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AsideSection from "../../components/AsideSection";
import MainVideo from "../../components/MainSection/MainVideo";
import VideoList from "../../components/MainSection/VideoList";

const mainVideoData = {
    url_query: '12345',
    title:'影片標題更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活',
    minor_title:'影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活',
    image_url:"https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/001_1140x855.jpg"
};
export default function videos() {
  return (
    <Layout siteTitle="幸福熟齡 - Hot影音">
      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[ { title: 'Hot影音', link: '/videos' }]}/>


      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
          {/* <!-- video tags--> */}
                    <ul className="video_tags flex space-x-2 flex-wrap">
                        <li><a className="block border mb-5 text-white hover:text-white bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist">全部</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/3">退休規劃</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/4">幸福熟齡</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/5">退休</a></li>
                    </ul>

                    
                    <MainVideo topics={mainVideoData} />

                    
                    {/* <!-- videos section--> */}
                    <VideoList/>
          </div>
          <AsideSection isHot={true}/>
        </div>
      </div>
    </Layout>
  );
}
