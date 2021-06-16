import React, { useState, useEffect } from "react";
import CategorySlider from "../utils/sliders/CategorySlider";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import clsx from "clsx";

const Category = ({ name, id, data, isIndexCategory, parentName }) => {
  const [color, setColor] = useState('bg-rainbow-o');
  let linkHref = isIndexCategory ? `/catalog/${id}` : `${id}`;

  useEffect(() => {
    switch (parentName) {
      case '靚女學':
        setColor('bg-rainbow-r');
        break;
      case '健康學':
        setColor('bg-rainbow-g');
        break;
      case '理財學':
        setColor('bg-rainbow-y');
        break;
      case 'People Story':
        setColor('bg-rainbow-b');
        break;
      default:
        setColor('bg-rainbow-o');
    }
  }, []);

  return (
    <Fade bottom>
      <div className="topics_section relative border border-secondary-medium rounded-lg rounded-br-5xl flex flex-col p-5 pt-3 bg-gradient-to-t from-primary-light via-white to-white">
        <Link href={linkHref}>
          <a className="absolute -top-4 left-5 shadow-md bg-primary-light hover:bg-secondary-light transition-all duration-200 px-12 py-2 rounded-br-full rounded-tl-full overflow-hidden outline-none focus:outline-none">
            <h2 className="text-base">{name}</h2>
            <span
              className={clsx(color, 'absolute w-full h-1 left-0 bottom-0')}
            ></span>
          </a>
        </Link>

        <Link href={linkHref}>
          <a className="topics_btn group inline-flex items-center justify-center self-end mb-3 mr-2">
            <p className="mr-2 group-hover:text-primary-dark transition-all duration-300 ease-in-out">
              閱讀更多
            </p>
            <div>
              <svg
                className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
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

        <div className="topics_items hidden lg:flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
          {data &&
            data.map((item, i) => {
              return (
                <div key={i} className="topics_item flex-1">
                  <Link href={`/article/${item.url_query}`}>
                    <a className="group flex flex-col justify-center">
                      <div className="relative rounded-t-md overflow-hidden aspect-h-3 aspect-w-4 w-full">
                        <Image
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                          src={item.image_url}
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                      <div
                        className={clsx(
                          color,
                          'w-full h-1.5 rounded-b-md mb-2',
                        )}
                      ></div>
                      <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out line-clamp-3">
                        {item.title}
                      </h3>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
        <CategorySlider topics={data} color={color} />
      </div>
    </Fade>
  );
};

export default Category;
