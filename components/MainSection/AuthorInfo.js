import React from "react";

import { Fade } from 'react-awesome-reveal';
const AuthorInfo = ({ author }) => {
  function createMarkup() {
    return { __html: author.introduction2 };
  }
  function TextComponent() {
    return (
      <div dangerouslySetInnerHTML={createMarkup()} />
    );
  }

  return (
    <Fade triggerOnce direction="up">
      <div className="border border-secondary-medium bg-white shadow-md rounded-lg rounded-br-5xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 p-5 md:p-10 mb-14">
        <div className="w-full md:w-1/3 inline-flex items-center justify-center">
            <img
              className="w-1/2 md:w-full h-auto object-cover rounded-full"
              src={author.image_url}
              alt={author.name}
            />
          </div>
        <div className="w-full md:w-2/3 md:flex-grow flex flex-col justify-center">
          <h2 className="text-xl font-medium mb-4">{author.name}</h2>
          <div className="flex flex-col space-y-2 text-gray-700 leading-7 tracking-wider">
            <TextComponent />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AuthorInfo;
