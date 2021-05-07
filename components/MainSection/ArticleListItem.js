import React, { useState } from "react";
import Link from "next/link";

const ArticleListItem = ({item}) => {
  return (
    <div className="flex md:flex-row flex-col relative">
                            <a href="#"
                                className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none">
                                <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                    src={item.image_url}
                                    alt={item.title} />
                            </a>
                            <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
                                {/* <a href="#" className="block mb-5 outline-none focus:outline-none">
                                    <h2 className="text-xl font-bold hover:text-gray-600">
                                    {item.title}
                                    </h2>
                                </a> */}

                                <Link href={`/news/${item.url_query}`}>
                                <a className="block mb-5 outline-none focus:outline-none">
                                    <h2 className="text-xl font-bold hover:text-gray-600">
                                    {item.title}
                                    </h2>
                                </a>
                                 </Link>



                                <p className="text-base mb-5">
                                {item.minor_title}</p>
                                <a href="#"
                                    className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none">
                                    <p className="mr-2">閱讀更多</p>
                                    <div>
                                        <svg className="fill-current text-gray-800 group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                            viewBox="0 0 13.503 23.619">
                                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                                d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                                                transform="translate(-11.25 -6.194)" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5">
                            </div>
                        </div>
  );
};

export default ArticleListItem;
