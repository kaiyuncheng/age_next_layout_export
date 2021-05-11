import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AuthorInfo from "../../components/MainSection/AuthorInfo";
import ArticleList from "../../components/MainSection/ArticleList"

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const [authorInfoRes, authorArticlesRes] = await Promise.all([
      axios.get(`Author/release/${id}`),
      axios.get(`Author/getLongTermAuthorArticle/${id}`),
    ]);
    return {
      props: {
        authorInfo: authorInfoRes.data.data,
        authorArticles: authorArticlesRes.data.data,
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

export default function Author({ authorInfo, authorArticles }) {
  const [authorInfoData, setAuthorInfo] = useState(authorInfo);
  const [authorArticlesData, setAuthorData] = useState(authorArticles);

  return (
    <Layout siteTitle={`幸福熟齡 - ${authorInfoData.authorInfo.name}`}>
      {console.log("作者檔案", authorInfoData)}
      {console.log("作者文章", authorArticlesData)}
      <Head>
        <meta
          itemProp="description"
          content={authorInfoData.seo_meta.meta_description}
        />
        <meta
          name="description"
          content={authorInfoData.seo_meta.meta_description}
        />
        <meta name="keywords" content={authorInfoData.seo_meta.meta_keyword} />
        <meta
          property="og:title"
          content={authorInfoData.seo_meta.meta_og_title}
        />
        <meta
          property="og:description"
          content={authorInfoData.seo_meta.meta_og_description}
        />
        <meta
          property="og:url"
          content={`http://thebetteraging.businesstoday.com.tw/article/${authorInfoData.seo_meta.url_query}`}
        />
        <meta
          itemProp="image"
          property="og:image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${authorInfoData.seo_meta.meta_og_image}`}
        />
        <meta
          itemProp="image"
          content={`http://thebetteraging.businesstoday.com.tw/article/${authorInfoData.seo_meta.meta_og_image}`}
        />
      </Head>

      {/* <!-- bread crumb --> */}
      <BreadCrumb
        titles={[
          { title: "名人私房學", link: "/authors" },
          {
            title: `${authorInfoData.authorInfo.name}`,
            link: `/authors/${authorInfoData.authorInfo.id}`,
          },
        ]}
      />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <AuthorInfo author={authorInfoData.authorInfo}/>

            {/* <!-- author articles section--> */}
            <div className="author_articles flex flex-col space-y-20 pb-5 mb-5">
            {/* 等API 等API */}
            <ArticleList /> 
       
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
              <div className="flex md:flex-row flex-col relative">
                <a
                  href="#"
                  className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none"
                >
                  <img
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111807/shutterstock_1453077554%20(1).jpg_1140x855.jpg"
                    alt=""
                  />
                </a>
                <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                  <a
                    href="#"
                    className="block mb-5 outline-none focus:outline-none"
                  >
                    <h2 className="text-xl font-bold hover:text-gray-600">
                      走入大自然，遠離癌症、失智症！「健行」的11個好處，享受森林療癒、神清氣爽
                    </h2>
                  </a>
                  <p className="text-base mb-5">
                    陳小姐年近50歲，這兩年有頭痛、胸悶、失眠、情緒不穩的症狀，高血壓控制不好，體重也直線上升。陳小姐決定改變生活方式，除了控制飲食、按時服藥外，也開始練習氣功。
                    3個月不到，整個人煥然一新，不再整天心情鬱卒，更驚訝的是更年期不適症狀明顯改善，最近回診時醫生還將她的降血壓藥量調降了....
                  </p>
                  <a
                    href="#"
                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none"
                  >
                    <p className="mr-2">閱讀更多</p>
                    <div>
                      <svg
                        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.503 23.619"
                      >
                        <path
                          id="Icon_ionic-ios-arrow-back"
                          data-name="Icon ionic-ios-arrow-back"
                          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                          transform="translate(-11.25 -6.194)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
              </div>
            </div>
          </div>

          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
}
