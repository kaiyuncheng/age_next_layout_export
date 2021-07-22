import React from "react";
import Link from "next/link";

import { Fade } from 'react-awesome-reveal';

const MainArticle = ({ topics }) => {
  function createMarkup() {
    return { __html: topics.video };
  }
  function VideoComponent() {
    return (
      <div
        className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden relative mb-5"
        dangerouslySetInnerHTML={createMarkup()}
      />
    );
  }

  return (
    <Fade triggerOnce direction="up">
      <div className="flex flex-col">
        {topics.file_type === 'image' && (
          <Link href={`/article/${topics.url_query}`}>
            <a className="group relative block rounded-lg overflow-hidden aspect-w-4 aspect-h-3 w-full mb-5 outline-none focus:outline-none">
              <img
                className="object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                src={
                  topics.image_url ||
                  'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'
                }
                alt={topics.title}
              />
            </a>
          </Link>
        )}

        {topics.file_type === 'video' && topics.video && <VideoComponent />}

        <Link href={`/article/${topics.url_query}`}>
          <a className="block mb-5 outline-none focus:outline-none">
            <h2 className="xs:text-2xl text-xl font-bold hover:text-gray-600">
              {topics.title}
            </h2>
          </a>
        </Link>
        <p className="xs:text-lg text-base mb-5">{topics.minor_title}</p>
        <div className="relative border-b border-r border-secondary-medium rounded-br-6xl w-full h-12">
          <Link href={`/article/${topics.url_query}`}>
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
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default MainArticle;
