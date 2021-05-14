import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "../../components/ProjectSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AsideSection from "../../components/AsideSection";

import MainVideo from "../../components/MainSection/MainVideo";
import VideoList from "../../components/MainSection/VideoList";
import FourColumns from "../../components/MainSection/FourColumns";
import ArticlesSlider from "../../components/utils/sliders/ArticlesSlider";
import ArticleList from "../../components/MainSection/ArticleList";

const mainVideoData = {
  url_query: "12345",
  title:
    "影片標題更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活",
  minor_title:
    "影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活影片小標 更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，白雁教你3動作促進出汗排濕氣，重拾優雅生活",
  image_url:
    "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/001_1140x855.jpg",
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const { data } = await axios.get(`Catalog/list/${id}`);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default function Project({ data }) {
  const [projectData, setProjectData] = useState(data.data);

  return (
    <Layout siteTitle={`幸福熟齡 - ${projectData.category_info.name}`}>
      <Head>
        <meta
          itemProp="description"
          content={projectData.seo_meta.meta_description}
        />
        <meta
          name="description"
          content={projectData.seo_meta.meta_description}
        />
        <meta name="keywords" content={projectData.seo_meta.meta_keyword} />
        <meta
          property="og:title"
          content={projectData.seo_meta.meta_og_title}
        />
        <meta
          property="og:description"
          content={projectData.seo_meta.meta_og_description}
        />
        <meta
          property="og:url"
          content={`http://thebetteraging.businesstoday.com.tw/categories/${projectData.category_info.category_id}`}
        />
        <meta
          itemProp="image"
          property="og:image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${projectData.seo_meta.meta_og_image}`}
        />
        <meta
          itemProp="image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${projectData.seo_meta.meta_og_image}`}
        />
      </Head>

      <ProjectSection topics={projectData.category_top_img} />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            {/* <!-- project title --> */}
            

            <div className="flex items-center">
              <div className="relative overflow-hidden rounded-lg w-20 h-14 mr-5">
                <Image
                  className="w-full h-full object-cover"
                  src={projectData.brand_area.logo_url}
                  layout="fill"
                  alt={projectData.brand_area.logo_title}
                />
              </div>
              <h2 className="xs:text-2xl text-xl font-bold">
                {projectData.brand_area.logo_title}
              </h2>
            </div>

            {/* <!-- bread crumb --> */}
            <BreadCrumb
              titles={[
                {
                  title: `${projectData.brand_area.logo_title}`,
                  link: `projects/${projectData.category_info.category_id}`,
                },
              ]}
            />

            {/* <!-- title info Mobile --> */}
            <div className="md:hidden mb-14 border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col justify-center">
              <h3 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
                {projectData.brand_area.about_brand_title}
              </h3>
              <p className="p-5 text-gray-700">
                {projectData.brand_area.brand_description}
              </p>
            </div>

            <div className="md:hidden block relative overflow-hidden rounded-lg mb-14">
                <Image
                  className="w-full h-full object-cover"
                  src={projectData.brand_area.logo_url}
                  layout="responsive"
                  width={300}
                  height={600}
                  alt={projectData.brand_area.logo_title}
                />
            </div>

            <div className="space-y-14">

            <MainVideo topics={projectData.top_info} />

            <FourColumns topics={projectData.focus_content} />

            {projectData.slider_category_article && (
              <ArticlesSlider topics={projectData.slider_category_article} />
            )}

            {projectData.article_info && (
              <ArticleList topics={projectData.article_info[0].data} />
            )}

            </div>
            

            

          </div>
          <AsideSection
            isHot={true}
            isProject={true}
            title={projectData.brand_area.about_brand_title}
            description={projectData.brand_area.brand_description}
          />
        </div>
      </div>
    </Layout>
  );
}
