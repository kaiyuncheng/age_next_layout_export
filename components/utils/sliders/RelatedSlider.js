import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 right-0 md:top-[33%] sm:top-[45%] xs:top-[43%] top-[37%] -translate-y-1/2 transform transition-all duration-300 outline-none focus:outline-none"
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
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-0 md:top-[33%] sm:top-[45%] xs:top-[43%] top-[37%] -translate-y-1/2 transform transition-all duration-500 outline-none focus:outline-none"
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
const RelatedSlider = ({ topics }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {topics &&
          topics.length === 1 &&
          topics.map((item, i) => {
            return (
              <div
                key={i}
                className="relative outline-none focus:outline-none p-3"
              >
                <div className="flex flex-col">
                  <Link href={`/video/${item.url_query}`}>
                    <a className="group block">
                      <div className="group rounded-md relative overflow-hidden w-full outline-none focus:outline-none mb-2">
                        <div className="aspect-w-4 aspect-h-3">
                          <img
                            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                            src={item.image_url}
                            alt={item.title}
                          />
                        </div>

                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48.405"
                            height="48.405"
                            viewBox="0 0 48.405 48.405"
                          >
                            <path
                              id="Icon_awesome-play-circle"
                              data-name="Icon awesome-play-circle"
                              d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                              transform="translate(-0.563 -0.563)"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="mr-5 text-sm text-primary-dark mb-1 inline-flex items-center">
                        <svg
                          className="w-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                          ></path>
                        </svg>

                        {item.updated_at.slice(0, 10)}
                      </p>

                      <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out line-clamp-3">
                        {item.title}
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}

        {topics &&
          topics.length <= 2 &&
          topics.map((item, i) => {
            return (
              <div
                key={i}
                className="relative outline-none focus:outline-none p-3"
              >
                <div className="flex flex-col">
                  <Link href={`/video/${item.url_query}`}>
                    <a className="group block">
                      <div className="group rounded-md relative overflow-hidden w-full outline-none focus:outline-none mb-2">
                        <div className="aspect-w-4 aspect-h-3">
                          <img
                            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                            src={item.image_url}
                            alt={item.title}
                          />
                        </div>

                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48.405"
                            height="48.405"
                            viewBox="0 0 48.405 48.405"
                          >
                            <path
                              id="Icon_awesome-play-circle"
                              data-name="Icon awesome-play-circle"
                              d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                              transform="translate(-0.563 -0.563)"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="mr-5 text-sm text-primary-dark mb-1 inline-flex items-center">
                        <svg
                          className="w-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                          ></path>
                        </svg>

                        {item.updated_at.slice(0, 10)}
                      </p>

                      <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out line-clamp-3">
                        {item.title}
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}

        {topics &&
          topics.map((item, i) => {
            return (
              <div
                key={i}
                className="relative outline-none focus:outline-none p-3"
              >
                <div className="flex flex-col">
                  <Link href={`/video/${item.url_query}`}>
                    <a className="group block">
                      <div className="group rounded-md relative overflow-hidden w-full outline-none focus:outline-none mb-2">
                        <div className="aspect-w-4 aspect-h-3">
                          <img
                            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                            src={item.image_url}
                            alt={item.title}
                          />
                        </div>

                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48.405"
                            height="48.405"
                            viewBox="0 0 48.405 48.405"
                          >
                            <path
                              id="Icon_awesome-play-circle"
                              data-name="Icon awesome-play-circle"
                              d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                              transform="translate(-0.563 -0.563)"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="mr-5 text-sm text-primary-dark mb-1 inline-flex items-center">
                        <svg
                          className="w-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                          ></path>
                        </svg>

                        {item.updated_at.slice(0, 10)}
                      </p>

                      <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out line-clamp-3">
                        {item.title}
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default RelatedSlider;
