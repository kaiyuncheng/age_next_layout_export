import React from 'react';
import VideoListItem from './VideoListItem';

const ArticleList = ({topics}) => {
  return (<div className="videos relative flex flex-col md:flex-row flex-wrap -mx-4">

   {/* {topics && topics.map((item,i)=>{
            return(
              <VideoListItem key={i} item={item} />
            );
          })} */}

    <VideoListItem />
    <VideoListItem />
    <VideoListItem />
    <VideoListItem />
    <VideoListItem />

  <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
      <div
          className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
          <a href="#"
              className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
              <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                  alt="" />
              <span
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                      viewBox="0 0 48.405 48.405">
                      <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                          d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                          transform="translate(-0.563 -0.563)" />
                  </svg>
              </span>
          </a>
          <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
              <h2 className=" hover:text-gray-600">
                  更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
              </h2>
          </a>
      </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
      <div
          className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
          <a href="#"
              className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
              <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                  alt="" />
              <span
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                      viewBox="0 0 48.405 48.405">
                      <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                          d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                          transform="translate(-0.563 -0.563)" />
                  </svg>
              </span>
          </a>
          <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
              <h2 className=" hover:text-gray-600">
                  更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
              </h2>
          </a>
      </div>
  </div>
</div>);
};

export default ArticleList;
