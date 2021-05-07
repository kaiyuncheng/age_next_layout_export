import React, { useState } from "react";
import Slider from "react-slick";
import clsx from "clsx";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 right-0 top-36 xs:top-28 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
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
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-0 top-36 xs:top-28 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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
const VideoSlider = ({ topics }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
  };

  return (
    <div className="videos relative">
      <div className="relative inline-flex items-center rounded-tl-lg bg-primary-light pl-5 py-2 w-full shadow-mdRight rounded-br-5xl overflow-hidden outline-none focus:outline-none mb-5">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
          >
            <path
              id="Icon_material-video-library"
              data-name="Icon material-video-library"
              d="M4.5,6H3V16.5A1.5,1.5,0,0,0,4.5,18H15V16.5H4.5Zm12-3h-9A1.5,1.5,0,0,0,6,4.5v9A1.5,1.5,0,0,0,7.5,15h9A1.5,1.5,0,0,0,18,13.5v-9A1.5,1.5,0,0,0,16.5,3Zm-6,9.375V5.625L15,9Z"
              transform="translate(-3 -3)"
            />
          </svg>
        </span>
        <h2>Hot影音</h2>
        <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-t"></span>
      </div>

      <div className="video_slider relative overflow-hidden">
        <Slider {...settings}>
          <div className="bg-white outline-none focus:outline-none ">
            <div className="relative flex flex-col px-2 z-10">
              <a
                href="#"
                className="group block relative w-full mb-5 outline-none focus:outline-none"
              >
                <div className="rounded-lg overflow-hidden h-72 xs:h-56 w-full mb-5">
                  <img
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/jamiesu_149/2020OCT/1021/LeeY4.JPG"
                    alt=""
                  />
                </div>
                <span className="absolute top-36 xs:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-white opacity-60 group-hover:opacity-95 z-40">
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
                <div className=" px-2 pb-5 outline-none focus:outline-none">
                  <p className="text-base group-hover:text-gray-600">
                    1最強館長棄百萬年薪！砸千萬退休金只為做「這件事」
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white outline-none focus:outline-none ">
            <div className="relative flex flex-col px-2 z-10">
              <a
                href="#"
                className="group block relative w-full mb-5 outline-none focus:outline-none"
              >
                <div className="rounded-lg overflow-hidden h-72 xs:h-56 w-full mb-5">
                  <img
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112833/shutterstock_1935250781.jpg_1140x855.jpg"
                  alt=""
                  />
                </div>
                <span className="absolute top-36 xs:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-white opacity-60 group-hover:opacity-95 z-40">
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
                <div className=" px-2 pb-5 outline-none focus:outline-none">
                  <p className="text-base group-hover:text-gray-600">
                    2最強館長棄百萬年薪！砸千萬退休金只為做「這件事」
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white outline-none focus:outline-none ">
            <div className="relative flex flex-col px-2 z-10">
              <a
                href="#"
                className="group block relative w-full mb-5 outline-none focus:outline-none"
              >
                <div className="rounded-lg overflow-hidden h-72 xs:h-56 w-full mb-5">
                  <img
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    src="https://doqvf81n9htmm.cloudfront.net/data/jamiesu_149/2020OCT/1021/LeeY.jpg"
                  alt=""
                  />
                </div>
                <span className="absolute top-36 xs:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-white opacity-60 group-hover:opacity-95 z-40">
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
                <div className=" px-2 pb-5 outline-none focus:outline-none">
                  <p className="text-base group-hover:text-gray-600">
                    3最強館長棄百萬年薪！砸千萬退休金只為做「這件事」
                  </p>
                </div>
              </a>
            </div>
          </div> 
        </Slider>
      </div>

      <div className="absolute z-0 bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
    </div>
  );
};

export default VideoSlider;
