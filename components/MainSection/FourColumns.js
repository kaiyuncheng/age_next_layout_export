import React from "react";

import Link from "next/link";

const FourColumns = ({ topics }) => {
  return (
    <ul className="flex flex-wrap -mx-2 mb-20">
      {topics &&
        topics.map((item, i) => {
          return (
            <li className="w-full md:w-1/2 px-2" key={i}>
              <Link href={`/article/${item.url_query}`}>
                <a className="group block relative">
                  <div className="relative overflow-hidden rounded-lg mb-4 w-full aspect-w-4 aspect-h-3">
                    <img
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="absolute w-full bottom-0 left-0 rounded-b-lg bg-black bg-opacity-75 text-white p-3 text-sm group-hover:bg-primary-dark transition-all duration-500 ease-in-out">
                    {item.title}
                  </h3>
                </a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default FourColumns;
