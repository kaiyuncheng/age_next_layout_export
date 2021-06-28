import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import RelatedSlider from "../../components/utils/sliders/RelatedSlider";
import Banner from "../../components/utils/googletags/Banner";

const timestamp = new Date().getTime();
export const getServerSideProps = async context => {
  const { id } = context.query;
  try {
    const [videoDataRes, videosDataRes] = await Promise.all([
      axios.get(`Media/detail/${id}?${timestamp}`),
      axios.get(`Media/list?${timestamp}`),
    ]);


    if (!videoDataRes.data.data || !videosDataRes.data.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        data: videoDataRes.data.data,
        categoryData: videosDataRes.data.data,
      },
    };
  } catch (error) {
    console.log('getServerSideProps error', error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default function video({ data, categoryData }) {
  const [videoData, setVideoData] = useState(data);
  const [category, setCategory] = useState(categoryData);
  const [newID, setNewID] = useState();
  const [fontSize, setFontSize] = useState('text-lg');

  useEffect(() => {
    setVideoData(data);
    setCategory(categoryData);
    findID(videoData.mediaDetail.category_id);
  }, [data, categoryData]);


  function findID (id){
    category.media_category && category.media_category.map((item, i) => {
      if (item.media_category_id === id){
        setNewID(i+1);
      }
    })
  }


  function createMarkup() {
    return { __html: videoData.mediaDetail.full_text_content };
  }
  function TextComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  function createMinorText() {
    if (videoData.mediaDetail.introduction) {
      return { __html: videoData.mediaDetail.introduction};
    }
  }

  function MinorTextComponent() {
    return <div dangerouslySetInnerHTML={createMinorText()} />;
  }

  const handleFontSize = size => {
    setFontSize(`text-${size}`);
  };

  return (
    <Layout
      siteTitle={`幸福熟齡 - ${
        videoData.mediaDetail.title || '從今開始，勾勒美好第二人生'
      }`}
    >
      <Head>
        {videoData.seo_meta.meta_description && (
          <meta
            itemProp="description"
            content={videoData.seo_meta.meta_description}
          />
        )}

        {videoData.seo_meta.meta_description && (
          <meta
            name="description"
            content={videoData.seo_meta.meta_description}
          />
        )}

        {videoData.seo_meta.meta_keyword && (
          <meta name="keywords" content={videoData.seo_meta.meta_keyword} />
        )}

        {videoData.seo_meta.meta_og_title && (
          <meta
            property="og:title"
            content={videoData.seo_meta.meta_og_title}
          />
        )}

        {videoData.seo_meta.meta_og_description && (
          <meta
            property="og:description"
            content={videoData.seo_meta.meta_og_description}
          />
        )}

        {videoData.mediaDetail.url_query && (
          <meta
            property="og:url"
            content={`http://thebetteraging.businesstoday.com.tw/video/${videoData.mediaDetail.url_query}`}
          />
        )}

        {videoData.seo_meta.meta_og_image && (
          <meta
            itemProp="image"
            property="og:image"
            content={videoData.seo_meta.meta_og_image}
          />
        )}

        {videoData.seo_meta.meta_og_image && (
          <meta itemProp="image" content={videoData.seo_meta.meta_og_image} />
        )}
      </Head>

      {videoData.mediaDetail.category_name ? (
        <BreadCrumb
          titles={[
            {
              title: `Hot影音`,
              link: `/videos/all`,
            },
            {
              title: `${videoData.mediaDetail.category_name}`,
              link: `/videos/${newID}`,
            },
            {
              title: `${videoData.mediaDetail.title}`,
              link: `/video/${videoData.mediaDetail.url_query}`,
            },
          ]}
        />
      ) : (
        <BreadCrumb
          titles={[
            {
              title: `Hot影音`,
              link: `/videos/all`,
            },
            {
              title: `${videoData.mediaDetail.title}`,
              link: `/video/${videoData.mediaDetail.url_query}`,
            },
          ]}
        />
      )}

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            {/* <!-- main video --> */}
            <div className="flex flex-col relative">
              <h2 className="video_title md:text-3xl text-2xl font-bold mb-5 tracking-widest md:leading-10">
                {videoData.mediaDetail.title}
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative mb-5">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoData.mediaDetail.youtube_v}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video_info mb-5 text-base text-secondary-dark">
                {videoData.mediaDetail.writers && (
                  <p className="block xs:inline mr-4 xs:whitespace-nowrap whitespace-normal">
                    撰文 |
                    <span className="ml-1 text-gray-500">
                      {videoData.mediaDetail.writers}
                    </span>
                  </p>
                )}
                {videoData.mediaDetail.updated_at && (
                  <p className="block xs:inline mr-4 xs:whitespace-nowrap whitespace-normal">
                    日期 |
                    <span className="ml-1 text-gray-500">
                      {videoData.mediaDetail.updated_at.slice(0, 4)}年
                      {videoData.mediaDetail.updated_at.slice(5, 7)}月
                      {videoData.mediaDetail.updated_at.slice(8, 10)}日
                    </span>
                  </p>
                )}
                {videoData.mediaDetail.category_name && (
                  <p className="block xs:inline mr-4 xs:whitespace-nowrap whitespace-normal">
                    分類 |
                    <span className="ml-1 text-gray-500">
                      {videoData.mediaDetail.category_name}
                    </span>
                  </p>
                )}
              </div>
              <div className="video_functions relative w-full h-12 mb-7 border-b border-r border-secondary-medium rounded-br-6xl flex flex-col xs:flex-row justify-end xs:items-center mt-10 xs:mt-0 pb-1.5 pr-1.5 space-x-2 xs:space-x-5">
                <div className="flex justify-between items-center space-x-5 mr-5">
                  <div className="video_font flex space-x-2 mb-4 xs:mb-0">
                    <button
                      type="button"
                      onClick={() => handleFontSize('lg')}
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-base font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                    <button
                      onClick={() => handleFontSize('xl')}
                      type="button"
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-lg font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFontSize('2xl')}
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-2xl font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                  </div>
                  <div className="video_socials flex space-x-4 mb-4 xs:mb-0">
                    <Link
                      href={`https://www.facebook.com/share.php?u=https://thebetteraging.businesstoday.com.tw/video/${videoData.mediaDetail.url_query}`}
                    >
                      <a
                        className="icon_fb group"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          className="fill-current text-blue-600 group-hover:text-primary-dark transition-colors duration-200 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.45"
                          height="25"
                          viewBox="0 0 13.45 25"
                        >
                          <path
                            id="Icon_zocial-facebook"
                            data-name="Icon zocial-facebook"
                            d="M13.257,13.425V8.651h3.851V6.25a6.283,6.283,0,0,1,1.687-4.425A5.366,5.366,0,0,1,22.882,0h3.825V4.775H22.882a.842.842,0,0,0-.674.412,1.675,1.675,0,0,0-.3,1.013V8.65h4.8v4.774h-4.8V25h-4.8V13.425Z"
                            transform="translate(-13.257)"
                          />
                        </svg>
                      </a>

                      {/* <a className="block group flex items-center justify-center"
                      >
                        <span className="bg-blue-900 rounded-l-md h-8 w-8 flex items-center justify-center">
                          <svg
                            className="fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.45"
                            height="18"
                            viewBox="0 0 13.45 25"
                          >
                            <path
                              id="Icon_zocial-facebook"
                              data-name="Icon zocial-facebook"
                              d="M13.257,13.425V8.651h3.851V6.25a6.283,6.283,0,0,1,1.687-4.425A5.366,5.366,0,0,1,22.882,0h3.825V4.775H22.882a.842.842,0,0,0-.674.412,1.675,1.675,0,0,0-.3,1.013V8.65h4.8v4.774h-4.8V25h-4.8V13.425Z"
                              transform="translate(-13.257)"
                            />
                          </svg>
                        </span>
                        <p className="whitespace-nowrap h-8 px-2 bg-blue-600 group-hover:bg-blue-500 transition-all duration-200 ease-in-out rounded-r-lg text-white text-sm font-medium inline-flex items-center">
                          分享
                        </p>
                      </a> */}
                    </Link>

                    <Link
                      href={`https://lineit.line.me/share/ui?url=https://thebetteraging.businesstoday.com.tw/video/${videoData.mediaDetail.url_query}`}
                    >
                      <a className="icon_line group">
                        <svg
                          className="fill-current text-primary-dark text-green-500  group-hover:text-primary-dark transition-colors duration-200 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="26.251"
                          height="25"
                          viewBox="0 0 26.251 25"
                        >
                          <path
                            id="Icon_simple-line"
                            data-name="Icon simple-line"
                            d="M21.181,11.02a.69.69,0,0,1,0,1.379h-1.92V13.63h1.92a.689.689,0,1,1,0,1.377h-2.61a.69.69,0,0,1-.686-.688V9.1a.691.691,0,0,1,.689-.689h2.61a.689.689,0,0,1,0,1.378h-1.92V11.02h1.92Zm-4.217,3.3a.688.688,0,0,1-.473.652.707.707,0,0,1-.218.034.676.676,0,0,1-.558-.273L13.044,11.1v3.216a.687.687,0,1,1-1.375,0V9.1a.685.685,0,0,1,.47-.651.636.636,0,0,1,.212-.036.707.707,0,0,1,.541.278l2.693,3.642V9.1a.689.689,0,0,1,1.378,0v5.218Zm-6.279,0a.688.688,0,1,1-1.376,0V9.1a.688.688,0,1,1,1.376,0Zm-2.7.688H5.378a.693.693,0,0,1-.689-.688V9.1a.689.689,0,0,1,1.378,0V13.63H7.988a.689.689,0,0,1,0,1.377m18.263-3.494c0-5.875-5.89-10.656-13.125-10.656S0,5.639,0,11.514c0,5.262,4.67,9.671,10.976,10.509.428.09,1.01.282,1.157.645a2.672,2.672,0,0,1,.042,1.181L12,24.965c-.049.329-.263,1.3,1.147.705s7.565-4.46,10.321-7.629a9.431,9.431,0,0,0,2.787-6.528"
                            transform="translate(0 -0.858)"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <a
                  href="#"
                  className="article_star group bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                >
                  <div className="mr-2 stroke-current text-gray-800 group-hover:text-primary-dark transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 17.705 17.023"
                    >
                      <path
                        id="Icon_awesome-star"
                        data-name="Icon awesome-star"
                        d="M8.437.521,6.524,4.4l-4.28.624a.938.938,0,0,0-.518,1.6l3.1,3.017L4.089,13.9a.937.937,0,0,0,1.359.987l3.829-2.012,3.829,2.012a.938.938,0,0,0,1.359-.987L13.733,9.64l3.1-3.017a.938.938,0,0,0-.518-1.6L12.031,4.4,10.118.521a.938.938,0,0,0-1.681,0Z"
                        transform="translate(-0.425 1.001)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">加入最愛</p>
                </a> */}
              </div>
              <div
                className={clsx(
                  fontSize,
                  'article_part leading-relaxed tracking-widest bg-secondary-light border-l-4 border-secondary-dark rounded-md font-medium mb-5',
                )}
              >
                <MinorTextComponent />
              </div>

              <div
                className={clsx(
                  fontSize,
                  'article_content leading-relaxed tracking-widest',
                )}
              >
                <TextComponent />
              </div>

              <div className="border-b border-r border-secondary-medium rounded-br-6xl w-full p-5 mb-5"></div>

              {videoData.tag_info.length !== 0 && (
                <ul className="flex items-center mb-5 flex-wrap">
                  <li className="mr-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.326"
                      height="18.326"
                      viewBox="0 0 18.326 18.326"
                    >
                      <path
                        id="Icon_awesome-tag"
                        data-name="Icon awesome-tag"
                        d="M0,9.024V1.718A1.718,1.718,0,0,1,1.718,0H9.024a1.718,1.718,0,0,1,1.215.5l7.584,7.584a1.718,1.718,0,0,1,0,2.43l-7.306,7.306a1.718,1.718,0,0,1-2.43,0L.5,10.239A1.718,1.718,0,0,1,0,9.024ZM4.009,2.291A1.718,1.718,0,1,0,5.727,4.009,1.718,1.718,0,0,0,4.009,2.291Z"
                        fill="#ec6009"
                      />
                    </svg>
                  </li>

                  {videoData.tag_info.map((tag, i) => {
                    return (
                      <li key={i}>
                        <Link href={`/search/article?keywords=${tag.keyword}`}>
                          <a className="block border text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 mb-2 mr-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap">
                            {tag.keyword}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* <!-- related videos --> */}
            {videoData.mediaRecommend.length !== 0 && (
              <div className="mt-5 mb-5 block border border-secondary-medium rounded-lg rounded-br-6xl shadow-md bg-white relative px-2 pt-10 pb-5">
                <div className="absolute -top-4 left-5 shadow-md bg-primary-light hover:bg-secondary-light transition-all duration-200 px-12 py-2 rounded-br-full rounded-tl-full overflow-hidden outline-none focus:outline-none">
                  <h2 className="text-base">相關影音</h2>
                  <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-t"></span>
                </div>

                <RelatedSlider topics={videoData.mediaRecommend} />
              </div>
            )}
          </div>

          <AsideSection isHot={true} type={'article'} />
        </div>
      </div>
      {/* PC 內頁 廣告 下 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetterraging_pc_article_970x250_b" />
      </div>
    </Layout>
  );
}
