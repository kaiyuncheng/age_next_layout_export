import React from "react";
import Link from "next/link";

const Speakers = ({ title, topics }) => {
  return (
    <div className="speakers mb-5">
      <div className="relative inline-flex items-center rounded-tl-lg bg-primary-light pl-5 py-2 w-full shadow-mdRight rounded-br-5xl overflow-hidden outline-none focus:outline-none mb-5">
        {title === "最新快訊" ? (
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.557"
              height="15"
              viewBox="0 0 18.557 15"
            >
              <g id="icon" transform="translate(-1370 -2234.505)">
                <g
                  id="Icon_ionic-ios-megaphone"
                  data-name="Icon ionic-ios-megaphone"
                  transform="translate(1370 2234.505)"
                >
                  <path
                    id="Path_238"
                    data-name="Path 238"
                    d="M4.89,10.24A3.312,3.312,0,0,1,6.458,7.4.117.117,0,0,0,6.4,7.179h0A2.785,2.785,0,0,0,3.725,9.7a.512.512,0,0,0-.357.537.492.492,0,0,0,.389.534,3.182,3.182,0,0,0,2.207,2.326h0a.157.157,0,0,0,.137-.27A3.593,3.593,0,0,1,4.89,10.24Z"
                    transform="translate(-3.368 -5.228)"
                  />
                  <path
                    id="Path_239"
                    data-name="Path 239"
                    d="M20.224,5.351c-.036-.1-.076-.188-.115-.278a3.7,3.7,0,0,0-.782-1.161,1.78,1.78,0,0,0-1.255-.537,1.648,1.648,0,0,0-.93.281,12.861,12.861,0,0,1-5.553,1.659c-1.5,0-1.421.007-1.421.007a3.381,3.381,0,0,0-.375,5.95c.436.364.851.317.761.8s-.811,3.516-.9,4.147-.1.992.144,1.3a5.321,5.321,0,0,0,2.452.858c.667,0,.5-.314.5-1.579s-.335-4.749.595-4.749c1.742,0,2.65.624,4.013,1.143a1.932,1.932,0,0,0,.725.169A1.779,1.779,0,0,0,19.33,12.7a3.736,3.736,0,0,0,.782-1.161c.04-.094.079-.188.119-.288A8.42,8.42,0,0,0,20.725,8.3,8.425,8.425,0,0,0,20.224,5.351Zm-.959,5.661c-.231.566-.635,1.017-.97,1.017s-.642-.451-.873-1.017a7.436,7.436,0,0,1-.444-2.694,7.463,7.463,0,0,1,.444-2.7c.231-.563.537-.9.869-.9s.732.343.966.9a7.265,7.265,0,0,1,.007,5.394Z"
                    transform="translate(-5.718 -3.375)"
                  />
                </g>
                <line
                  id="Line_8"
                  data-name="Line 8"
                  y1="2.251"
                  x2="4.409"
                  transform="translate(1383.476 2236.002)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x2="3.597"
                  transform="translate(1383.882 2239.379)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x2="4.409"
                  y2="2.251"
                  transform="translate(1383.476 2240.504)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </span>
        ) : (
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
        <h2>{title}</h2>
        <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-o"></span>
      </div>

      <div className="relative">
        <div className="bg-white outline-none focus:outline-none ">
          <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col md:space-y-5 relative ">
          {topics &&
            topics.map((item, i) => {
              return ( 
                

            <Link href={`/article/${item.url_query}`} key={i}>
            <a 
              className="group w-1/2 md:w-full block md:border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none"
            >
              <div className="block md:hidden overflow-hidden rounded-lg mb-2 w-full aspect-w-4 aspect-h-3">
                <img
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src={item.image_url}
                  alt={item.title}
                />
              </div>
              <p className="text-sm md:text-base group-hover:text-gray-600">
              {item.title}
              </p>
            </a>
                      </Link>
            
            );
            })}
            </div>
        </div>

        <div className="absolute bottom-0 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
      </div>
    </div>
  );
};

export default Speakers;
