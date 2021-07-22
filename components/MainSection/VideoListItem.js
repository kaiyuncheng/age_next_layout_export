import React from "react";
import Link from "next/link";

import { Fade } from 'react-awesome-reveal';

const VideoListItem = ({ item }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
      <Fade triggerOnce direction="up">
        <div className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
          <Link href={`/video/${item.url_query}`}>
            <a className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
              <div className="aspect-h-3 aspect-w-4">
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
            </a>
          </Link>

          <Link href={`/video/${item.url_query}`}>
            <a className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3 h-18">
              <h2 className="hover:text-gray-600">{item.title}</h2>
            </a>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default VideoListItem;
