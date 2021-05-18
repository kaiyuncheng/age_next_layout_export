import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import clsx from 'clsx';
import Fade from 'react-reveal/Fade';

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 -right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
    >
      <svg
        className="fill-current text-white group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
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
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
    >
      <svg
        className="fill-current text-white group-hover:text-primary-dark transform group-hover:-translate-x-1 transition-all duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 13.503 23.619"
      >
        <path
          id="Icon_ionic-ios-arrow-back"
          data-name="Icon ionic-ios-arrow-back"
          d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
          transform="translate(-11.25 -6.194)"
        />
      </svg>
    </button>
  );
}
const MainSlider = ({ topics }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
  };

  return (
    <Fade bottom>
      <div className={clsx('articles_slider relative')}>
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              let markColor = 'bg-primary-dark';
              switch (item.mark_background_color_class) {
                case 'preset':
                  markColor = 'bg-primary-dark';
                  break;
                case 'hot':
                  markColor = 'bg-red-600';
                  break;
                case 'ad':
                  markColor = 'bg-green-500';
                  break;
                case 'hot-person':
                  markColor = 'bg-[#ff8a00]';
                  break;
                case 'build':
                  markColor = 'bg-blue-500';
                  break;
                case 'video':
                  markColor = 'bg-purple-600';
                  break;
                default:
                  markColor = 'bg-primary-dark';
              }

              return (
                <div
                  key={i}
                  className="relative outline-none focus:outline-none"
                >
                  <div className="relative shadow-lg mx-5 flex flex-col lg:flex-row bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl  border border-secondary-medium">
                    <Link href={`/article/${item.article_id}`}>
                      <a className="group relative z-30 rounded-t-lg md:rounded-l-lg md:rounded-r-none block overflow-hidden flex-grow w-full lg:w-1/2 h-72">
                        {/* 圖片連結api不正確 {item.image_url} 小標題顏色需增加橘色並設定可以變換顏色*/}
                        <Image
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                          src={item.image_url}
                          alt={item.title}
                          layout="fill"
                        />

                        <span
                          className={clsx(
                            markColor,
                            'absolute left-1 top-1 pl-3 pr-5 py-1 text-white rounded-md rounded-br-5xl',
                          )}
                        >
                          {item.mark_name}
                        </span>
                      </a>
                    </Link>

                    <div className="main_slider_contents relative z-30 p-8 pb-20 w-full lg:w-1/2 h-72">
                      <Link href={`/article/${item.article_id}`}>
                        <a>
                          <h2 className="text-xl font-bold mb-5 transition-all duration-300 ease-in-out hover:text-primary-dark text-gray-800">
                            {item.title}
                          </h2>
                        </a>
                      </Link>

                      <p className="text-base overflow-ellipsis md:overflow-clip line-clamp-6">
                        {item.minor_title}
                      </p>

                      <Link href={`/article/${item.article_id}`}>
                        <a className="group absolute z-30 right-0 bottom-0 bg-primary-light hover:bg-secondary-dark hover:text-primary-dark text-gray-800 py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none">
                          <p className="mr-2">詳全文</p>
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
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </Fade>
  );
};

export default MainSlider;
