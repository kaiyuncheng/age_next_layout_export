import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

const Tabs = ({ tab1topics, tab2topics }) => {
  const [topics0To3, setTopics1To3] = useState([]);
  const [topics3To6, setTopics3To6] = useState([]);
  const [isHot, setIsHot] = useState(true);

  useEffect(() => {
    setTopics1To3(tab1topics.slice(0, 3));
    setTopics3To6(tab1topics.slice(3, 6));
  }, [tab1topics]);

  const handleTabs = (item) => {
    if (item === "hot") {
      setTopics1To3(tab1topics.slice(0, 3));
      setTopics3To6(tab1topics.slice(3, 6));
      setIsHot(true);
    } else {
      setTopics1To3(tab2topics.slice(0, 3));
      setTopics3To6(tab2topics.slice(3, 6));
      setIsHot(false);
    }
  };

  return (
    <div className="latest_articles w-full md:w-1/2 rounded-lg rounded-br-5xl flex flex-col mb-10 md:mb-0">
      <div className="relative bg-secondary-medium rounded-t-lg h-10">
        <button
          onClick={() => handleTabs('hot')}
          type="button"
          className={clsx(
            isHot && 'h-11 bg-primary-light shadow-mdRight',
            !isHot && 'h-10',
            'header_tab_left hover:h-11 hover:bg-primary-light hover:border inline-flex items-center justify-center absolute bottom-0 left-0 w-1/2 border border-secondary-medium  rounded-tl-lg rounded-tr-5xl text-center outline-none focus:outline-none transition-all duration-200 ease-linear',
          )}
        >
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
          <h2 className="">熱門文章</h2>
          <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-o"></span>
        </button>
        <button
          onClick={() => handleTabs('news')}
          type="button"
          className={clsx(
            isHot && 'h-10',
            !isHot && 'h-11 bg-primary-light shadow-mdRight border',
            'header_tab_right hover:h-11 hover:bg-primary-light hover:border inline-flex items-center justify-center absolute bottom-0 right-0 h-10  border-secondary-medium rounded-tr-lg rounded-tl-5xl text-center py-2 w-1/2 overflow-hidden outline-none focus:outline-none transition-all duration-200 ease-linear',
          )}
        >
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="15"
              viewBox="0 0 17.5 15"
            >
              <g
                id="Icon_ionic-md-paper"
                data-name="Icon ionic-md-paper"
                transform="translate(-2.25 -4.5)"
              >
                <path
                  id="Path_226"
                  data-name="Path 226"
                  d="M19.125,4.5H8.5a.644.644,0,0,0-.625.645v1.23H3.891A1.645,1.645,0,0,0,2.25,8.016v8.105A3.386,3.386,0,0,0,5.609,19.5H16.535a3.223,3.223,0,0,0,3.215-3.2V5.125A.627.627,0,0,0,19.125,4.5ZM7.875,7.625v7.5H6.234V8.375a1.907,1.907,0,0,0-.129-.75ZM7.211,17.6a2.307,2.307,0,0,1-1.582.648A2.134,2.134,0,0,1,3.5,16.121V8.375a.742.742,0,1,1,1.484,0V15.75a.627.627,0,0,0,.625.625H7.855A2.055,2.055,0,0,1,7.211,17.6ZM18.5,16.3a1.974,1.974,0,0,1-1.965,1.953H8.316a3.265,3.265,0,0,0,.809-2.129V5.789H18.5Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_227"
                  data-name="Path 227"
                  d="M17.438,9.563h7.008v2.453H17.438Z"
                  transform="translate(-7.319 -2.308)"
                />
                <path
                  id="Path_228"
                  data-name="Path 228"
                  d="M17.438,15.75h7.008v1.4H17.438Z"
                  transform="translate(-7.319 -5.069)"
                />
                <path
                  id="Path_229"
                  data-name="Path 229"
                  d="M17.438,20.25h7.008v1.4H17.438Z"
                  transform="translate(-7.319 -7.097)"
                />
                <path
                  id="Path_230"
                  data-name="Path 230"
                  d="M24.234,24.75H17.225s0,1.4-.35,1.4h6.513C24.234,26.152,24.234,25.232,24.234,24.75Z"
                  transform="translate(-7.092 -9.124)"
                />
              </g>
            </svg>
          </span>
          <h2 className="">最新文章</h2>
          <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-o"></span>
        </button>
      </div>

      <div className="flex lg:flex-row flex-col flex-grow rounded-bl-lg rounded-br-5xl border-b border-r border-l border-secondary-medium shadow-md ">
        <div className="lg:w-1/2 w-full lg:border-r border-secondary-medium border-dashed flex flex-col flex-grow">
          {topics0To3 &&
            topics0To3.map((item, i) => {
              return (
                <Link href={`/article/${item.url_query}`} key={i + 1}>
                  <a className="relative h-20 flex-grow flex items-center hover:bg-primary-light transition-all duration-300 ease-in-out lg:last:border-none border-b border-secondary-medium border-dashed">
                    <span className="absolute left-1 top-1 w-8 h-8 bg-primary-dark pl-2 text-white rounded-md rounded-br-5xl">
                      {i + 1}
                    </span>
                    <h2 className="pl-12 py-5 md:py-0 pr-3">{item.title}</h2>
                  </a>
                </Link>
              );
            })}
        </div>
        <div className="lg:w-1/2 w-full flex flex-col flex-grow">
          {topics3To6 &&
            topics3To6.map((item, i) => {
              return (
                <Link href={`/article/${item.url_query}`} key={i + 4}>
                  <a className="relative h-20 flex-grow inline-flex items-center hover:bg-primary-light transition-all duration-300 ease-in-out last:rounded-br-5xl last:border-none border-b border-secondary-medium border-dashed">
                    <span className="absolute left-1 top-1 w-8 h-8 bg-secondary-dark pl-2 text-white rounded-md rounded-br-5xl">
                      {i + 4}
                    </span>
                    <h2 className="pl-12 py-5 md:py-0 pr-3">{item.title}</h2>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
