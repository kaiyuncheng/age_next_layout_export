import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Head from "next/head";
import Image from "next/image";
import ProjectSection from "../../components/ProjectSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AsideSection from "../../components/AsideSection";
import MainArticle from "../../components/MainSection/MainArticle";
import FourColumns from "../../components/MainSection/FourColumns";
import ArticlesSlider from "../../components/utils/sliders/ArticlesSlider";
import Category from "../../components/MainSection/Category";
import ArticleList from "../../components/MainSection/ArticleList";

// export const getServerSideProps = async (context) => {
//   const { id } = context.query;
//   await axios.get(`Catalog/list/${id}`).then((res)=>{ 
//       return {
//       props: {
//         res,
//       },
//     }}).catch((error) => { console.error(error) })
// };

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const { code, data } = await axios.get(`Catalog/list/${id}`);
    console.log(code);
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

export default function cataloglist({ data }) {
  const [catalogData, setCatalogData] = useState(data.data);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  useEffect(() => {
    setIsBrandOpen(!!catalogData.brand_area);
  }, []);
  

  return (
    <Layout
      siteTitle={
        `幸福熟齡 - ${catalogData.category_info.name || '從今開始，一同勾勒熟齡的美好'}`
      }
    >
      <Head>
        {catalogData.seo_meta.meta_description && (
          <meta
            itemProp="description"
            content={catalogData.seo_meta.meta_description}
          />
        )}

        {catalogData.seo_meta.meta_description && (
          <meta
            name="description"
            content={catalogData.seo_meta.meta_description}
          />
        )}

        {catalogData.seo_meta.meta_keyword && (
          <meta name="keywords" content={catalogData.seo_meta.meta_keyword} />
        )}

        {catalogData.seo_meta.meta_og_title && (
          <meta
            property="og:title"
            content={catalogData.seo_meta.meta_og_title}
          />
        )}

        {catalogData.seo_meta.meta_og_description && (
          <meta
            property="og:description"
            content={catalogData.seo_meta.meta_og_description}
          />
        )}

        {catalogData.category_info.category_id && (
          <meta
            property="og:url"
            content={`http://thebetteraging.businesstoday.com.tw/categories/${catalogData.category_info.category_id}`}
          />
        )}

        {catalogData.seo_meta.meta_og_image && (
          <meta
            itemProp="image"
            property="og:image"
            content={`http://thebetteraging.businesstoday.com.tw/article/${catalogData.seo_meta.meta_og_image}`}
          />
        )}

        {catalogData.seo_meta.meta_og_image && (
          <meta
            itemProp="image"
            content={`http://thebetteraging.businesstoday.com.tw/article/${catalogData.seo_meta.meta_og_image}`}
          />
        )}
      </Head>

      {catalogData.category_top_img && (
        <ProjectSection topics={catalogData.category_top_img} />
      )}

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            {/* <!-- brand area --> */}
            {isBrandOpen && (
              <div className="flex items-center">
                <div className="relative overflow-hidden rounded-lg w-20 h-14 mr-5">
                  <Image
                    className="w-full h-full object-cover"
                    src={catalogData.brand_area.logo_url}
                    layout="fill"
                    alt={catalogData.brand_area.logo_title}
                  />
                </div>
                <h2 className="xs:text-2xl text-xl font-bold">
                  {catalogData.brand_area.logo_title}
                </h2>
              </div>
            )}

            {/* <!-- bread crumb --> */}

            {catalogData.category_info.categoryLevel === "1" ? (
              <BreadCrumb
                titles={[
                  {
                    title: `${catalogData.category_info.name}`,
                    link: `/catalog/${catalogData.category_info.category_id}`,
                  },
                ]}
              />
            ) : (
              <BreadCrumb
                titles={[
                  {
                    title: `${catalogData.category_info.parent_name}`,
                    link: `/catalog/${catalogData.category_info.parent_id}`,
                  },
                  {
                    title: `${catalogData.category_info.name}`,
                    link: `/catalog/${catalogData.category_info.category_id}`,
                  },
                ]}
              />
            )}

            {/* <!-- brand area info Mobile --> */}
            {isBrandOpen && (
              <>
                <div className="md:hidden mb-5 border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col justify-center">
                  <h3 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
                    {catalogData.brand_area.about_brand_title}
                  </h3>
                  <p className="p-5 text-gray-700">
                    {catalogData.brand_area.brand_description}
                  </p>
                </div>

                <a
                  href={catalogData.brand_area.mobile_advertising_url}
                  className="md:hidden block relative overflow-hidden rounded-lg mb-14"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={catalogData.brand_area.mobile_advertising_image_url}
                    layout="responsive"
                    width={300}
                    height={250}
                    alt={catalogData.brand_area.about_brand_title}
                  />
                </a>
              </>
            )}

            <div className="space-y-14">

            {catalogData.top_article && <MainArticle topics={catalogData.top_article} />}

            {catalogData.focus_content && <FourColumns topics={catalogData.focus_content} />}

            {catalogData.slider_category_article && <ArticlesSlider topics={catalogData.slider_category_article} />}

            {!catalogData.category_info.is_project_based_style_enable && catalogData.article_info &&
              <ArticleList topics={catalogData.article_info} />}

              {catalogData.category_info.is_project_based_style_enable && catalogData.article_project_info &&
                catalogData.article_project_info.map((block, i) => {
                return (
                  <Category
                    key={i+1}
                    name={block.name}
                    id={block.category_id}
                    data={block.data}
                  />
                );
              })}   

            </div>
          </div>

          <AsideSection
            isHot={true}
            isBrandOpen={isBrandOpen}
            brandData={catalogData.brand_area}
          />
        </div>
      </div>
    </Layout>
  );
}
