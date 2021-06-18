import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import AsideSection from "../AsideSection";
import Banner from "../utils/googletags/Banner";

const RelatedArticleItem = ({ item, dableIds, i }) => {
  const [fontSize, setFontSize] = useState('text-lg');
  const [dableId, setDableId] = useState({
    id: 'dablewidget_goPjaJlQ_370NGgXx',
    pc: 'goPjaJlQ',
    mo: '370NGgXx',
  });

  useEffect(() => {
    setDableId(dableIds);
  }, [dableIds]);

  function createMarkup() {
    return { __html: item.content_info[0].text };
  }
  function TextComponent() {
    return (
      <div itemProp="articleBody" dangerouslySetInnerHTML={createMarkup()} />
    );
  }

  const handleFontSize = (size) => {
    setFontSize(`text-${size}`);
  };

  useEffect(() => {
    dable('renderWidgetByWidth', dableId.id);
  }, [dableId]);

  return (
    <div className="sections flex flex-col justify-center items-center">
      <div
        className={clsx(
          !i && 'mb-14',
          'w-full max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0',
        )}
      >
        <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden pb-5">
          {/* <!-- main article --> */}

          <div className="article flex flex-col relative">
            <h2 className="article_title md:text-3xl text-2xl font-bold mb-5 tracking-widest md:leading-10">
              {item.article_info.title}
            </h2>
            <div className="article_img relative rounded-lg overflow-hidden w-full mb-5 aspect-w-4 aspect-h-3">
              <img
                className="h-full w-full object-cover"
                src={
                  item.article_info.banner_image_url ||
                  'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'
                }
                alt={item.article_info.title}
              />
            </div>

            {/* Mobile 內頁 黃金特區ㄧ 文章單頁 文章大圖下方 */}
            <div className="block sm:hidden flex justify-center items-center">
              <Banner
                adId={
                  !i
                    ? `thebetteraging_mob_article_300x250_t`
                    : `thebetteraging_mob_article_300x250_t_${i}`
                }
              />
            </div>

            <div className="article_info mb-5 text-base text-secondary-dark">
              {item.article_info.writers && (
                <p className="inline mr-4">
                  撰文 |
                  <span className="ml-1 text-gray-500">
                    {item.article_info.writers}
                  </span>
                </p>
              )}
              {item.article_info.release_date && (
                <p className="inline mr-4">
                  日期 |
                  <span className="ml-1 text-gray-500">
                    {item.article_info.release_date}
                  </span>
                </p>
              )}
              {item.category_info.name && (
                <p className="inline mr-4">
                  分類 |
                  <span className="ml-1 text-gray-500">
                    {item.category_info.name}
                  </span>
                </p>
              )}
              {item.article_info.picture_source && (
                <p className="inline mr-4">
                  圖檔來源 |
                  <span className="ml-1 text-gray-500">
                    {item.article_info.picture_source}
                  </span>
                </p>
              )}
            </div>
            <div className="article_functions relative w-full h-12 mb-7 border-b border-r border-secondary-medium rounded-br-6xl flex flex-col xs:flex-row justify-end xs:items-center mt-10 xs:mt-0 pb-1.5 pr-1.5 space-x-2 xs:space-x-5">
              <div className="flex justify-between items-center space-x-5 mr-5">
                <div className="article_font flex space-x-2 mb-4 xs:mb-0">
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
                <div className="article_socials flex space-x-4 mb-4 xs:mb-0">
                  <Link
                    href={`https://www.facebook.com/share.php?u=https://thebetteraging.businesstoday.com.tw/article/${item.article_info.url_query}`}
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
                  </Link>

                  <Link
                    href={`https://lineit.line.me/share/ui?url=https://thebetteraging.businesstoday.com.tw/article/${item.article_info.url_query}`}
                  >
                    <a className="icon_line group">
                      <svg
                        className="fill-current text-green-500  group-hover:text-primary-dark transition-colors duration-200 ease-in-out"
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
                'article_part leading-relaxed tracking-widest bg-secondary-light border-l-4 border-secondary-dark p-5 rounded-md font-medium mb-5',
              )}
            >
              <p>{item.article_info.part_text}</p>
            </div>

            <div
              className={clsx(
                fontSize,
                'article_content leading-relaxed mb-5 tracking-widest',
              )}
            >
              <TextComponent />
            </div>

            <div className="border-b border-r border-secondary-medium rounded-br-6xl w-full p-5 mb-5"></div>

            {item.tag_info.length !== 0 && (
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

                {item.tag_info.map((tag, i) => {
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

          <div
            id={dableId.id}
            data-widget_id-pc={dableId.pc}
            data-widget_id-mo={dableId.mo}
          ></div>
        </div>
        <AsideSection isHot={true} type={'article'} i={i} />
      </div>

      {/* PC 內頁 廣告 下 */}

      <div className="lg:block hidden max-w-screen-2xl px-4 lg:px-2">
        <Banner
          adId={
            !i
              ? `thebetterraging_pc_article_970x250_b`
              : `thebetterraging_pc_article_970x250_b_${i}`
          }
        />
      </div>
    </div>
  );
};

export default RelatedArticleItem;
