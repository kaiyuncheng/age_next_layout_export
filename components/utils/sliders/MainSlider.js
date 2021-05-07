import React, { useState } from "react";
import Slider from "react-slick";
import clsx from "clsx";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[380px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
      className="prev group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[380px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow350({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[350px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow350({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="left-[350px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow300({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[300px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow300({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[300px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow250({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[250px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow250({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[250px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow200({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[200px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow200({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[200px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow150({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[150px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow150({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[150px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow100({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[100px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow100({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[100px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow50({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[50px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow50({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[50px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

function NextArrow0({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "right-[0px] group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 top-1/2 transform -translate-y-1/2 transition-all duration-300 outline-none focus:outline-none"
      )}
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
function PrevArrow0({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-primary-dark hover:bg-secondary-dark px-3 py-2 rounded-lg absolute z-40 left-[0px] top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "380px",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1890,
        settings: {
          centerPadding: "350px",
          prevArrow: <PrevArrow350 />,
          nextArrow: <NextArrow350 />,
        },
      },
      {
        breakpoint: 1790,
        settings: {
          centerPadding: "300px",
          prevArrow: <PrevArrow300 />,
          nextArrow: <NextArrow300 />,
        },
      },
      {
        breakpoint: 1690,
        settings: {
          centerPadding: "250px",
          prevArrow: <PrevArrow250 />,
          nextArrow: <NextArrow250 />,
        },
      },
      {
        breakpoint: 1590,
        settings: {
          centerPadding: "200px",
          prevArrow: <PrevArrow200 />,
          nextArrow: <NextArrow200 />,
        },
      },
      {
        breakpoint: 1490,
        settings: {
          centerPadding: "150px",
          prevArrow: <PrevArrow150 />,
          nextArrow: <NextArrow150 />,
        },
      },
      {
        breakpoint: 1390,
        settings: {
          centerPadding: "100px",
          prevArrow: <PrevArrow100 />,
          nextArrow: <NextArrow100 />,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          centerPadding: "50px",
          prevArrow: <PrevArrow50 />,
          nextArrow: <NextArrow50 />,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          centerPadding: "0px",
          prevArrow: <PrevArrow0 />,
          nextArrow: <NextArrow0 />,
        },
      },
      {
        breakpoint: 479,
        settings: {
          dots: true,
          centerPadding: "0px",
          prevArrow: <PrevArrow0 />,
          nextArrow: <NextArrow0 />,
        },
      },
    ],

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
  };

  return (
    <div className="main bg-primary-light shadow-innerBottomLg mb-10">
      <div className="main_slider relative py-10 overflow-hidden">
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              return (
                <div key={i} className="outline-none focus:outline-none">
                  <div className="flex flex-col lg:flex-row lg:h-[450px] rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-lg bg-white mx-5 overflow-hidden">
                    <a
                      href={item.hyperlink}
                      className="main_slider_img block overflow-hidden h-72 md:h-96 lg:h-full w-full lg:w-2/5 "
                    >
                      <img
                        className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                        src={item.image_url}
                        alt={item.title}
                      />
                    </a>
                    <div className="main_slider_contents relative p-10 w-full lg:w-3/5">
                      <a href={item.hyperlink}>
                        <h2 className="text-xl md:text-2xl font-bold mb-5 transition-all duration-300 ease-in-out hover:text-primary-dark text-gray-800">
                          {item.title}
                        </h2>
                      </a>

                      <p className="text-base md:text-lg mb-10">
                        {item.minor_title}
                      </p>
                      <a
                        href={item.hyperlink}
                        className="group absolute z-50 right-0 bottom-0 bg-primary-dark hover:bg-secondary-dark hover:text-primary-dark text-white py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                      >
                        <p className="mr-2">閱讀更多</p>
                        <div>
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
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
