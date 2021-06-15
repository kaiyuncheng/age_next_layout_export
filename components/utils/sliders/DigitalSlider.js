import React, { useState } from "react";
import Slider from "react-slick";
import Image from 'next/image';

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group px-2 py-2 rounded-lg absolute z-40 -right-5 lg:-right-5 xl:right-0 -top-17 lg:-top-19 xl:-top-17  transform transition-all duration-300 outline-none focus:outline-none"
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
      className="group px-2 py-2 rounded-lg absolute z-40 right-3 lg:right-3 xl:right-10 -top-17 lg:-top-19 xl:-top-17 transform transition-all duration-500 outline-none focus:outline-none"
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
      <div className="bg-secondary-medium rounded-t-lg h-10">
        <div className="header_box relative h-10 inline-flex items-center whitespace-nowrap rounded-tl-lg bg-primary-light pl-5 pr-32 py-2 w-3/5 xs:w-4/5 shadow-mdRight rounded-br-5xl overflow-hidden outline-none focus:outline-none border-b border-secondary-medium">
          {topics && (
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
          )}
          {topics && <h2>數位專區</h2>}
          {topics && (
            <span className="absolute w-full h-1 left-0 bottom-0 bg-green-200"></span>
          )}
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
                      target="_blank"
                      className="relative z-10 rounded-lg overflow-hidden w-full lg:w-3/5 outline-none  flex items-center focus:outline-none relative"
                    >
                      <div className="aspect-h-3 aspect-w-4 w-full rounded-lg overflow-hidden">
                        <Image
                          className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                          src={
                            item.image_url ||
                            'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'
                          }
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                    </a>
                    <a
                      href={item.hyperlink}
                      target="_blank"
                      className="block relative z-10 group w-full lg:w-2/5 outline-none focus:outline-none"
                    >
                      <h2 className="pb-2 mb-2 border-b border-secondary-medium border-dashed group-hover:text-primary-dark text-xl font-medium">
                        {item.title}
                      </h2>
                      <p className="text-base line-clamp-6">
                        {item.minor_title}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}

          {!topics && (
            <div className="animate-pulse outline-none focus:outline-none h-auto lg:h-60">
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row h-full">
                <div className="block relative z-10 rounded-lg overflow-hidden w-full h-52 xs:h-72 md:h-52 lg:w-1/2 lg:h-full outline-none focus:outline-none relative bg-secondary-medium"></div>
                <div className="block relative z-10 group w-full lg:w-1/2 outline-none focus:outline-none">
                  <div className="mb-1 border-b border-secondary-medium border-dashed text-xl font-medium bg-secondary-medium rounded-md h-8"></div>
                  <div className="pb-2 mb-3 border-b border-secondary-medium border-dashed text-xl font-medium rounded-md h-1"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6"></div>
                  <div className="mb-1 text-base bg-secondary-medium rounded-md h-6 w-1/2"></div>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default DigitalSlider;
