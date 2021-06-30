import React from "react";
import Image from "next/image";
import Link from 'next/link';

const ProjectSection = ({ topics }) => {
  function createMarkup() {
    return { __html: topics.video };
  }
  function VideoComponent() {
    return (
      <div
        className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative"
        dangerouslySetInnerHTML={createMarkup()}
      />
    );
  }

  return (
    <div className="main bg-primary-light shadow-innerBottomLg p-10 mb-5 relative">
      <div className="absolute -top-2 left-0 p-1 bg-white shadow-md w-full"></div>
      <div className="max-w-screen-2xl mx-auto px-0 lg:px-2 relative">
        {topics.file_type === 'image' && topics.image_url && (
          <Link href={`/article/${topics.url_query}`}>
            <a className="block aspect-w-4 aspect-h-3 rounded-lg overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src={topics.image_url}
                alt={topics.title}
              />
            </a>
          </Link>
        )}

        {topics.file_type === 'video' && topics.video && <VideoComponent />}

        {topics.file_type === 'image' && (
          <div className="md:absolute bottom-10 left-12 text-white  bg-black bg-opacity-75 p-5 lg:p-10 mt-5 md:mt-0 rounded-lg rounded-br-6xl w-full md:w-2/5">
            {topics.name && (
              <span className="bg-primary-dark p-2 rounded-md inline-block mb-4">
                {topics.name}
              </span>
            )}
            {topics.title && (
              <Link href={`/article/${topics.url_query}`}>
                <a>
                  <h2 className="hover:text-gray-200 font-bold text-2xl lg:text-3xl mb-2">
                    {topics.title}
                  </h2>
                </a>
              </Link>
            )}
            {topics.minor_title && <p>{topics.minor_title}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
