import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Head from "next/head";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import MainArticle from "../../components/MainSection/MainArticle";
import ArticlesSlider from "../../components/utils/sliders/ArticlesSlider";
import Category from "../../components/MainSection/Category";
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const { data } = await axios.get(`Catalog/getCataloglist/${id}`);
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

const block_banners_list = [
  {
    category_id: "157144",
    name: "健康",
    data: [
      {
        url_query: "202104010001",
        title: "20210401測試文章",
        image_list: "",
        image_list_termcare: "",
        minor_title: "",
        image_url: "https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg",
      },
      {
        url_query: "202006220002",
        title: "test2",
        image_list: "data/anson_166/worker0125.jpg",
        image_list_termcare: "",
        minor_title:
          "最遠的距離我們之間多了他 5.58 inches 擋著妳的眼神沒有紮 我想記得妳的樣子有點面熟",
        image_url:
          "https://doqvf81n9htmm.cloudfront.net/data/anson_166/worker0125.jpg",
      },
      {
        url_query: "201911130001",
        title: "測試測試　實現亞洲矽谷打造產業藍海　13家企業數位轉型",
        image_list: "",
        image_list_termcare: "",
        minor_title:
          "〈台北訊〉為連結智慧科技，搶進新世代產業，國發會提出的「亞洲・矽谷推動方案」持續進展，導入人工智慧、大數據等科技應用促進產業轉型升級，驅動經濟成長。在今年的「亞洲矽谷智慧商業服務應用推廣計畫」中，經濟部協助國內13家企業，帶動企業數位轉型，也落實我國發展「數位國家、智慧島嶼」的願景。",
        image_url: "https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg",
      },
    ],
  },
  {
    category_id: "157149",
    name: "理財",
    data: [
      {
        url_query: "202105070002",
        title: "理財好棒棒",
        image_list:
          "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
        image_list_termcare: "",
        minor_title: "理財很重要",
        image_url:
          "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
      },
      {
        url_query: "202006220002",
        title: "test2",
        image_list: "data/anson_166/worker0125.jpg",
        image_list_termcare: "",
        minor_title:
          "最遠的距離我們之間多了他 5.58 inches 擋著妳的眼神沒有紮 我想記得妳的樣子有點面熟",
        image_url:
          "https://doqvf81n9htmm.cloudfront.net/data/anson_166/worker0125.jpg",
      },
      {
        url_query: "201911130001",
        title: "測試測試　實現亞洲矽谷打造產業藍海　13家企業數位轉型",
        image_list: "",
        image_list_termcare: "",
        minor_title:
          "〈台北訊〉為連結智慧科技，搶進新世代產業，國發會提出的「亞洲・矽谷推動方案」持續進展，導入人工智慧、大數據等科技應用促進產業轉型升級，驅動經濟成長。在今年的「亞洲矽谷智慧商業服務應用推廣計畫」中，經濟部協助國內13家企業，帶動企業數位轉型，也落實我國發展「數位國家、智慧島嶼」的願景。",
        image_url: "https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg",
      },
    ],
  },
  {
    category_id: "157153",
    name: "樂活",
    data: [
      {
        url_query: "202105070001",
        title: "泰戈爾講過一段深奧的話",
        image_list:
          "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/001_760x570.jpg",
        image_list_termcare: "",
        minor_title:
          "泰戈爾講過一段深奧的話，昨夜的暴風雨用金色的和平為今晨加冕。這是撼動人心的。若到今天結束時我們都還無法釐清樂活的意義，那想必我們昨天也無法釐清。",
        image_url:
          "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/001_760x570.jpg",
      },
      {
        url_query: "202104010001",
        title: "20210401測試文章",
        image_list: "",
        image_list_termcare: "",
        minor_title: "",
        image_url: "https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg",
      },
      {
        url_query: "202006220002",
        title: "test2",
        image_list: "data/anson_166/worker0125.jpg",
        image_list_termcare: "",
        minor_title:
          "最遠的距離我們之間多了他 5.58 inches 擋著妳的眼神沒有紮 我想記得妳的樣子有點面熟",
        image_url:
          "https://doqvf81n9htmm.cloudfront.net/data/anson_166/worker0125.jpg",
      },
    ],
  }
];

export default function Categories({ data }) {
  const [categoriesData, setCategoriesData] = useState(data.data);

  return (
    <Layout siteTitle={`幸福熟齡 - ${categoriesData.category_info.name}`}>
      <Head>
        <meta
          itemProp="description"
          content={categoriesData.seo_meta.meta_description}
        />
        <meta
          name="description"
          content={categoriesData.seo_meta.meta_description}
        />
        <meta name="keywords" content={categoriesData.seo_meta.meta_keyword} />
        <meta
          property="og:title"
          content={categoriesData.seo_meta.meta_og_title}
        />
        <meta
          property="og:description"
          content={categoriesData.seo_meta.meta_og_description}
        />
        <meta
          property="og:url"
          content={`http://thebetteraging.businesstoday.com.tw/categories/${categoriesData.category_info.category_id}`}
        />
        <meta
          itemProp="image"
          property="og:image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${categoriesData.seo_meta.meta_og_image}`}
        />
        <meta
          itemProp="image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${categoriesData.seo_meta.meta_og_image}`}
        />
      </Head>

      {/* <!-- bread crumb --> */}
      <BreadCrumb
        titles={[
          {
            title: `${categoriesData.category_info.name}`,
            link: `/categories/${categoriesData.category_info.category_id}`,
          },
        ]}
      />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col space-y-14 overflow-hidden mb-14">
          {categoriesData.top_info &&
            <MainArticle topics={categoriesData.top_info} />}


            {categoriesData.SliderCategoryArticle &&
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
              })}
          </div>

          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
}
