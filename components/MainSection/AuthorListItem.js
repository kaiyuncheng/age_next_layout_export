import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import Fade from "react-reveal/Fade";
const AuthorListItem = ({author}) => {
  return (
    <Fade bottom>
      <div className="w-full lg:w-1/2 px-4 pb-8">
        <div className="flex bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
          <Link href={`/authors/${author.id}`}>
            <a className="w-2/5 h-auto md:h-56 inline-flex items-center justify-center p-2 xs:p-5">
              <div className="relative group rounded-full overflow-hidden aspect-w-3 aspect-h-3 w-full md:w-full">
                <Image
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src={
                    author.image_url ||
                    'https://doqvf81n9htmm.cloudfront.net/data/no_image.jpg'
                  }
                  alt={author.name}
                  layout="fill"
                />
              </div>
            </a>
          </Link>

          <div className="w-3/5 relative md:flex-grow flex flex-col lg:justify-center pt-5 pr-5 pl-0 pb-16">
            <Link href={`/authors/${author.id}`}>
              <a className="hover:text-primary-dark">
                <h2 className="text-lg font-medium mb-2">{author.name}</h2>
              </a>
            </Link>
            <div className="text-gray-700 overflow-hidden overflow-ellipsis line-clamp-3">
              <p>{author.introduction}</p>
            </div>

            <Link href={`/authors/${author.id}`}>
              <a className="group absolute z-20 right-0 bottom-0 bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10  inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none">
                <p className="mr-2 whitespace-nowrap">查看文章</p>
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
        </div>
      </div>
    </Fade>
  );
};

export default AuthorListItem;
