import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HotNews = ({ topics }) => {
  return (
    <div>
      <div className="relative inline-flex items-center rounded-tl-lg bg-primary-light pl-5 py-2 w-full shadow-md rounded-br-5xl overflow-hidden outline-none focus:outline-none mb-5 h-10">
        {topics && (
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.256"
              height="15"
              viewBox="0 0 26.256 15"
            >
              <path
                id="Icon_ionic-ios-trending-up"
                data-name="Icon ionic-ios-trending-up"
                d="M27.615,9H20.537a.867.867,0,1,0,0,1.734h4.9l-8.086,8.332-5.033-4.928a.886.886,0,0,0-.627-.252.9.9,0,0,0-.627.252L2.5,22.523a.848.848,0,0,0-.246.627.8.8,0,0,0,.246.6A.886.886,0,0,0,3.123,24a.9.9,0,0,0,.627-.252L11.7,15.973,16.729,20.9a.886.886,0,0,0,.627.252.9.9,0,0,0,.627-.252L26.736,12v4.787a.885.885,0,0,0,1.77,0V9.867A.885.885,0,0,0,27.615,9Z"
                transform="translate(-2.25 -9)"
              />
            </svg>
          </span>
        )}
        {topics && <h2>熱門文章</h2>}
        {topics && (
          <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-o"></span>
        )}
      </div>

      <div className="relative">
        <div className="outline-none focus:outline-none relative z-10">
          <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col md:space-y-5 relative ">
            {topics &&
              topics.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={'/article/[id]'}
                      as={`/article/${item.url_query}`}
                    >
                      <a className="group w-1/2 md:w-full block md:border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none">
                        <div className="block md:hidden overflow-hidden rounded-lg mb-2 aspect-w-4 aspect-h-3 relative">
                          <Image
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                            src={
                              item.image_url ||
                              'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'
                            }
                            alt={item.title}
                            layout="fill"
                          />
                        </div>
                        <p className="text-sm md:text-base group-hover:text-gray-600">
                          {item.title}
                        </p>
                      </a>
                    </Link>
                  );
                })
            }

            {!topics &&
              [1, 2, 3, 4, 5].map((item, i) => {
                return (
                  <div
                    key={i}
                    className="animate-pulse group w-1/2 md:w-full block md:border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none"
                  >
                    <div className="block md:hidden overflow-hidden rounded-lg mb-2 aspect-w-4 aspect-h-3 relative bg-secondary-medium"></div>
                    <div className="text-sm md:text-base mb-1 bg-secondary-medium h-6 rounded-md md:mr-2"></div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="absolute z-0 bottom-0 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
      </div>
    </div>
  );
};

export default HotNews;
