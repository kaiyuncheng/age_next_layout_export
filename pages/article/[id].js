import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const { data } = await axios.get(`article/detail/${id}`);

    if (!data.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    
    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

// const init = {
//   code: '',
//   time: '',
//   data: {
//     article_info: {
//       title: '',
//     },
//   },
// };

export default function article({ data }) {
  const [articleData, setArticleData] = useState(data);
  const [fontSize, setFontSize] = useState("text-base");

  useEffect(() => {
    setArticleData(data);
  }, [data]);

  function createMarkup() {
    return { __html: articleData.content_info[0].text };
  }
  function TextComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  const handleFontSize = (size) => {
    setFontSize(`text-${size}`);
  };

  return (
    <Layout
      siteTitle={`幸福熟齡 - ${
        articleData.article_info.title || '從今開始，一同勾勒熟齡的美好'
      }`}
    >
      <Head>
        {articleData.seo_meta.meta_description && (
          <meta
            itemProp="description"
            content={articleData.seo_meta.meta_description}
          />
        )}

        {articleData.seo_meta.meta_description && (
          <meta
            name="description"
            content={articleData.seo_meta.meta_description}
          />
        )}

        {articleData.seo_meta.meta_keyword && (
          <meta name="keywords" content={articleData.seo_meta.meta_keyword} />
        )}

        {articleData.seo_meta.meta_og_title && (
          <meta
            property="og:title"
            content={articleData.seo_meta.meta_og_title}
          />
        )}

        {articleData.seo_meta.meta_og_description && (
          <meta
            property="og:description"
            content={articleData.seo_meta.meta_og_description}
          />
        )}

        {articleData.article_info.url_query && (
          <meta
            property="og:url"
            content={`http://thebetteraging.businesstoday.com.tw/article/${articleData.article_info.url_query}`}
          />
        )}

        {articleData.seo_meta.meta_og_image && (
          <meta
            itemProp="image"
            property="og:image"
            content={articleData.seo_meta.meta_og_image}
          />
        )}

        {articleData.seo_meta.meta_og_image && (
          <meta itemProp="image" content={articleData.seo_meta.meta_og_image} />
        )}
      </Head>

      {articleData.category_info.name ? (
        <BreadCrumb
          titles={[
            {
              title: `${articleData.category_info.name} `,
              link: `/catalog/${articleData.category_info.category_id}`,
            },
            {
              title: `${articleData.article_info.title}`,
              link: `/article/${articleData.article_info.url_query}`,
            },
          ]}
        />
      ) : (
        <BreadCrumb
          titles={[
            {
              title: `${articleData.article_info.title}`,
              link: `/article/${articleData.article_info.url_query}`,
            },
          ]}
        />
      )}

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden pb-5">
            {/* <!-- main article --> */}
            <div className="article flex flex-col relative">
              <h2 className="article_title md:text-2xl text-xl font-bold mb-5">
                {articleData.article_info.title}
              </h2>
              <div className="article_img relative rounded-lg overflow-hidden w-full mb-5">
                <Image
                  className="h-full w-full object-cover"
                  src={articleData.article_info.image_url || 'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'}
                  height={300}
                  width={400}
                  layout="responsive"
                  alt={articleData.article_info.title}
                />
              </div>
              <div className="article_info mb-5">
                {articleData.article_info.writers && (
                  <p className="inline text-sm text-gray-600 mr-4">
                    撰文：{articleData.article_info.writers}
                  </p>
                )}
                {articleData.article_info.release_date && (
                  <p className="inline text-sm text-gray-600 mr-4">
                    日期：{articleData.article_info.release_date}
                  </p>
                )}
                {articleData.category_info.name && (
                  <p className="inline text-sm text-gray-600 mr-4">
                    分類：{articleData.category_info.name}
                  </p>
                )}
                {articleData.article_info.picture_source && (
                  <p className="inline text-sm text-gray-600 mr-4">
                    圖檔來源：{articleData.article_info.picture_source}
                  </p>
                )}
              </div>
              <div className="article_functions relative w-full h-12 mb-7 border-b border-r border-secondary-medium rounded-br-6xl flex flex-col xs:flex-row justify-end xs:items-center mt-10 xs:mt-0 pb-1.5 pr-1.5 space-x-2 xs:space-x-5">
                <div className="flex justify-between items-center space-x-5">
                  <div className="article_font flex space-x-2 mb-4 xs:mb-0">
                    <button
                      type="button"
                      onClick={() => handleFontSize('base')}
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-base font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                    <button
                      onClick={() => handleFontSize('lg')}
                      type="button"
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-lg font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFontSize('xl')}
                      className="text-gray-600 hover:bg-primary-light border border-primary-dark rounded-md h-8 w-8 flex items-center justify-center text-2xl font-medium transition-all duration-200 ease-in-out focus:outline-none outline-none"
                    >
                      A
                    </button>
                  </div>
                  <div className="article_socials flex space-x-4 mb-4 xs:mb-0">
                    <Link
                      href={`https://www.facebook.com/share.php?u=https://thebetteraging.businesstoday.com.tw/article/${articleData.article_info.url_query}`}
                    >
                      <a
                        className="icon_fb group"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          className="fill-current text-primary-dark group-hover:text-blue-600 transition-colors duration-200 ease-in-out"
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
                    </Link>

                    <Link
                      href={`https://lineit.line.me/share/ui?url=https://thebetteraging.businesstoday.com.tw/article/${articleData.article_info.url_query}`}
                    >
                      <a className="icon_line group">
                        <svg
                          className="fill-current text-primary-dark group-hover:text-green-500 transition-colors duration-200 ease-in-out"
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
                <a
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
                </a>
              </div>
              <div
                className={clsx(
                  fontSize,
                  'article_part bg-secondary-light border-l-4 border-secondary-dark p-5 rounded-md font-medium mb-5',
                )}
              >
                <p>{articleData.article_info.part_text}</p>
              </div>

              <div className={clsx(fontSize, 'article_content mb-5')}>
                <TextComponent />
              </div>
              <ul className="article_tags flex items-center mb-5 flex-wrap">
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

                {articleData.tag_info &&
                  articleData.tag_info.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={`/search/article?keywords=${item.keyword}`}>
                          <a className="block border text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 mb-2 mr-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap">
                            {item.keyword}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* <!-- 推薦文章 by Dable PC--> */}

            <div className="hidden mb-14 md:block border border-secondary-medium rounded-lg rounded-br-6xl shadow-md bg-white">
              <div className="text-white text-lg bg-primary-dark py-3 px-4 rounded-t-lg">
                <h2>你可能也想看</h2>
              </div>
              <ul className="p-4 flex flex-col space-y-2">
                <li className="-indent-sm pl-7">
                  <span className="inline-block bg-primary-dark rounded-sm mr-2 p-1"></span>
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                    - 幸福熟齡
                  </a>
                </li>
                <li className="-indent-sm pl-7">
                  <span className="inline-block bg-primary-dark rounded-sm mr-2 p-1"></span>
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    甲狀腺結節好發女性，健檢發現不用理會？醫師：也有5年後結節變癌症
                    [AD]
                  </a>
                </li>
                <li className="-indent-sm pl-7">
                  <span className="inline-block bg-primary-dark rounded-sm mr-2 p-1"></span>
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                    - 幸福熟齡
                  </a>
                </li>
                <li className="-indent-sm pl-7">
                  <span className="inline-block bg-primary-dark rounded-sm mr-2 p-1"></span>
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                    - 幸福熟齡
                  </a>
                </li>
                <li className="-indent-sm pl-7">
                  <span className="inline-block bg-primary-dark rounded-sm mr-2 p-1"></span>
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                    - 幸福熟齡
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- 推薦文章 by Dable Mobile--> */}
          <div className="block mb-14 md:hidden border border-secondary-medium rounded-lg rounded-br-6xl shadow-md bg-white">
            <div className="text-white text-lg bg-primary-dark py-3 px-4 rounded-t-lg">
              <h2>你可能也想看</h2>
            </div>
            <ul className="flex flex-wrap px-4 py-2 -mx-2">
              <li className="w-1/2 p-2">
                <a href="#" className="group block relative">
                  <div className="overflow-hidden rounded-lg mb-2 w-full aspect-w-4 aspect-h-3">
                    <img
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      src="https://doqvf81n9htmm.cloudfront.net/data/shenlin_127/shutterstock_707130331.jpeg"
                      alt=""
                    />
                  </div>
                  <p className="text-sm group-hover:text-gray-600">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                  </p>
                </a>
              </li>
              <li className="w-1/2 p-2">
                <a href="#" className="group block relative">
                  <div className="overflow-hidden rounded-lg mb-2 w-full aspect-w-4 aspect-h-3">
                    <img
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/jamiesu_149/2020OCT/1021/LeeY4.JPG"
                      alt=""
                    />
                  </div>
                  <p className="text-sm group-hover:text-gray-600">
                    甲狀腺結節好發女性，健檢發現不用理會？醫師：也有5年後結節變癌症
                    [AD]
                  </p>
                </a>
              </li>
              <li className="w-1/2 p-2">
                <a href="#" className="group block relative">
                  <div className="overflow-hidden rounded-lg mb-2 w-full aspect-w-4 aspect-h-3">
                    <img
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      src="https://doqvf81n9htmm.cloudfront.net/data/shenlin_127/shutterstock_707130331.jpeg"
                      alt=""
                    />
                  </div>
                  <p className="text-sm group-hover:text-gray-600">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                  </p>
                </a>
              </li>
              <li className="w-1/2 p-2">
                <a href="#" className="group block relative">
                  <div className="overflow-hidden rounded-lg mb-2 w-full aspect-w-4 aspect-h-3">
                    <img
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112708/106.jpg_1140x855.jpg"
                      alt=""
                    />
                  </div>
                  <p className="text-sm group-hover:text-gray-600">
                    退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
                  </p>
                </a>
              </li>
            </ul>
          </div>

          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
}
