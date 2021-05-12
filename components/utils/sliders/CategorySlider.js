import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 -right-4 top-28 xs:top-30 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
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
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 -left-4 top-28 xs:top-30 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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
const CategorySlider = ({ topics }) => {
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
    <div className="topics_slider relative block md:hidden">
      <Slider {...settings}>
        {topics &&
          topics.map((item, i) => {
            return (
              <div key={i} className="outline-none focus:outline-none">
                <div className="flex flex-col">
                  <Link href={`/article/${item.url_query}`}>
                    <a className="group">
                      <div className="relative rounded-t-md overflow-hidden h-56 xs:h-60">
                        <Image
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                          src={item.image_url}
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                      <div className="bg-rainbow-r w-full h-1.5 rounded-b-md mb-2"></div>
                      <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out">
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

export default CategorySlider;
