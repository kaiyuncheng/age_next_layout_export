import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainVideo = ({ topics }) => {
  return (
    <div className="flex flex-col mb-14">
      <Link href={`/video/${topics.url_query}`}>
        <a className="group relative block rounded-lg overflow-hidden w-full mb-5 outline-none focus:outline-none">
          <Image
            className="object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
            src={topics.image_url}
            height={300}
            width={400}
            layout="responsive"
            alt={topics.title}
          />
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
        </a>
      </Link>

      <Link href={`/video/${topics.url_query}`}>
        <a className="block mb-5 outline-none focus:outline-none">
          <h2 className="xs:text-2xl text-xl font-bold hover:text-gray-600">
            {topics.title}
          </h2>
        </a>
      </Link>
      <p className="xs:text-lg text-base mb-5 line-clamp-2">
        {topics.minor_title}
      </p>
      <div className="relative border-b border-r border-secondary-medium rounded-br-6xl w-full h-12">
        {/* <Link href={`/article/${topics.url_query}`}>
          <a className="group absolute z-30 right-1.5 bottom-1.5 bg-primary-dark hover:bg-secondary-dark hover:text-primary-dark text-white py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none">
            <p className="mr-2">詳全文</p>
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
        </Link> */}
      </div>
    </div>
  );
};

export default MainVideo;
