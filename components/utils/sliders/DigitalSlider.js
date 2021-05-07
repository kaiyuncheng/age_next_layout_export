import React, { useState } from "react";
import Slider from "react-slick";
import clsx from "clsx";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group px-2 py-2 rounded-lg absolute z-40 -right-5 lg:right-0 -top-17 transform transition-all duration-300 outline-none focus:outline-none"
    >
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
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group px-2 py-2 rounded-lg absolute z-40 right-3 lg:right-10 -top-17 transform transition-all duration-500 outline-none focus:outline-none"
    >
      <svg
        className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:-translate-x-1 transition-all duration-300 ease-in-out"
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
const DigitalSlider = ({ topics }) => {
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
    <div className="latest_digital w-full md:w-1/2 border border-secondary-medium rounded-lg rounded-br-5xl shadow-md flex flex-col overflow-hidden">
      <div className="bg-secondary-medium rounded-t-lg">
        <div className="header_box relative inline-flex items-center whitespace-nowrap rounded-tl-lg bg-primary-light pl-5 pr-32 py-2 w-3/5 xs:w-4/5 shadow-mdRight rounded-br-5xl overflow-hidden outline-none focus:outline-none">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                id="Icon_material-forum"
                data-name="Icon material-forum"
                d="M17.25,6h-1.5v6.75H6v1.5a.752.752,0,0,0,.75.75H15l3,3V6.75A.752.752,0,0,0,17.25,6Zm-3,4.5V3.75A.752.752,0,0,0,13.5,3H3.75A.752.752,0,0,0,3,3.75v10.5l3-3h7.5A.752.752,0,0,0,14.25,10.5Z"
                transform="translate(-3 -3)"
              />
            </svg>
          </span>
          <h2>數位專區</h2>
          <span className="absolute w-full h-1 left-0 bottom-0 bg-green-200"></span>
        </div>
      </div>
      <div className="digital_slider flex-grow py-8 lg:py-10 xl:py-8 px-8">
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              return (
                <div
                  key={i}
                  className="digital_slider_item outline-none focus:outline-none h-auto lg:h-60"
                >
                  <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row h-full">
                    <a
                      href={item.hyperlink}
                      className="block relative z-10 rounded-lg overflow-hidden w-full lg:w-1/2 h-full outline-none focus:outline-none"
                    >
                      <img
                        className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                        src={item.image_url}
                        alt={item.title}
                      />
                    </a>
                    <a
                      href="#"
                      className="block relative z-10 group w-full lg:w-1/2 outline-none focus:outline-none"
                    >
                      <h2 className="pb-2 mb-2 border-b border-secondary-medium border-dashed group-hover:text-primary-dark text-xl font-medium">
                        {item.title}
                      </h2>
                      <p className="text-base line-clamp-6">{item.minor_title}</p>
                    </a>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default DigitalSlider;
