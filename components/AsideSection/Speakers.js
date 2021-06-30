import React from 'react';
import Link from 'next/link';

const Speakers = ({ topics }) => {
  return (
    <div className="speakers mb-10 md:mb-0">
      <div className="relative inline-flex items-center rounded-tl-lg bg-primary-light pl-5 py-2 w-full shadow-md rounded-br-5xl overflow-hidden outline-none focus:outline-none mb-5 h-10">
        {topics && (
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
        )}
        {topics && <h2>最新快訊</h2>}
        {topics && (
          <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-o"></span>
        )}
      </div>

      <div className="relative">
        <div className="outline-none focus:outline-none relative z-10">
          <div className="flex flex-nowrap flex-col space-y-5 relative ">
            {topics &&
              topics.map((item, i) => {
                if (!item.internal) {
                  return (
                    <a
                      key={i}
                      href={item.hyperlink}
                      target="_blank"
                      rel="noreferrer"
                      className="group w-full block border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none"
                    >
                      <p className="line-clamp-3 text-base group-hover:text-gray-600">
                        {item.title}
                      </p>
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={i}
                      href={'/article/[id]'}
                      as={`/article/${item.url_query}`}
                    >
                      <a className="group w-full block border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none">
                        <p className="text-base group-hover:text-gray-600">
                          {item.title}
                        </p>
                      </a>
                    </Link>
                  );
                }
              })}

            {!topics &&
              [1, 2, 3, 4, 5].map((item, i) => {
                return (
                  <div
                    key={i}
                    className="animate-pulse group w-full block border-b last:border-none border-dashed border-secondary-medium px-2 pb-5 outline-none focus:outline-none"
                  >
                    <div className="text-base mb-1 bg-secondary-medium h-6 rounded-md md:mr-2"></div>
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

export default Speakers;
