import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleListItem = ({ item, isSearch, keywords }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isSearch && keywords && item.title && item.title.includes(keywords)) {
      setTitle(item.title.split(keywords));
    }
    if (
      isSearch &&
      keywords &&
      item.minor_title &&
      item.minor_title.includes(keywords)
    ) {
      setContent(item.minor_title.split(keywords));
    }
  }, [keywords, item]);

  return (
    <div className="flex md:flex-row flex-col relative">
      <Link href={`/article/${item.url_query}`}>
        <a className="block w-full md:w-1/3 outline-none focus:outline-none">
          <div className="rounded-lg overflow-hidden aspect-h-3 aspect-w-4 relative">
            <Image
              className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
              src={item.image_url}
              layout="fill"
              alt={item.title}
            />
          </div>
        </a>
      </Link>

      <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
        {isSearch && (
          <div className="flex space-x-4">
            <p className="text-sm text-primary-dark mb-2 inline-flex items-center">
              <svg
                className="w-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                ></path>
              </svg>

              {item.pubtime.slice(0, 10)}
            </p>
            <p className="text-sm text-primary-dark mb-2 inline-flex items-center">
              <svg
                className="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                ></path>
              </svg>

              {item.author.slice(0, item.author.indexOf('圖檔來源'))}
            </p>
          </div>
        )}
        <Link href={`/article/${item.url_query}`}>
          <a className="block mb-3 outline-none focus:outline-none">
            {isSearch && item.title.includes(keywords) ? (
              <h2 className="text-xl font-bold hover:text-gray-600">
                {title &&
                  title.map((word, i) => {
                    if (i === title.length - 1) {
                      return <span key={i + 1}>{word}</span>;
                    } else {
                      return (
                        <React.Fragment key={i + 1}>
                          <span>{word}</span>
                          <span className="text-primary-dark bg-primary-light">
                            {keywords}
                          </span>
                        </React.Fragment>
                      );
                    }
                  })}
              </h2>
            ) : (
              <h2 className="text-xl font-bold hover:text-gray-600">
                {item.title}
              </h2>
            )}
          </a>
        </Link>

        {isSearch && item.minor_title.includes(keywords) ? (
          <p className="text-base mb-10 line-clamp-5">
            {content &&
              content.map((word, i) => {
                if (i === content.length - 1) {
                  return <span key={i + 1}>{word}</span>;
                } else {
                  return (
                    <React.Fragment key={i + 1}>
                      <span>{word}</span>
                      <span className="text-primary-dark bg-primary-light">
                        {keywords}
                      </span>
                    </React.Fragment>
                  );
                }
              })}
          </p>
        ) : (
          <p className="text-base mb-10 line-clamp-5"> {item.minor_title}</p>
        )}

        <Link href={`/article/${item.url_query}`}>
          <a className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none">
            <p className="mr-2">閱讀更多</p>
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
      </div>
      <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
    </div>
  );
};

export default ArticleListItem;
