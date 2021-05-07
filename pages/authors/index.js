import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Link from "next/link";
import AsideSection from "../../components/AsideSection";



// export const getStaticProps = async () => {
//     try {
//       const { data } = await axios.get(`Catalog/news`);
//       return {
//         props: {
//           data,
//         },
//       };
//     } catch (error) {
//       console.log("getData error", error);
//     }
//   };

export default function authors() {
    // const [authorsData, setAuthorsData] = useState(data.data);
  return (
    <Layout siteTitle="幸福熟齡 - 名人私房學">
      {/* <!-- bread crumb --> */}
      <div className="breadcrumb pt-7 md:pt-5 mb-5">
        <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
          <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
          <span className="mx-1">/</span>
          <a href="#" className="text-gray-800 font-normal">
            名人私房學
          </a>
        </nav>
      </div>

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <div className="flex flex-col lg:flex-row flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 pb-8">
                <div className="flex bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                  <div className="inline-flex items-center justify-center p-2 xs:p-5 lg:p-0">
                    <img
                      className="w-4/5 md:w-4/5 h-auto object-cover rounded-full"
                      src="https://doqvf81n9htmm.cloudfront.net/data/parislin_131/201811/1119/NEW.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative w-full md:flex-grow flex flex-col lg:justify-center pt-5 pr-5 pb-16">
                    <h2 className="text-lg font-medium mb-2">
                      我年過60，又怎樣？黎兒人生相談室
                    </h2>
                    <div className="text-gray-700 overflow-hidden overflow-ellipsis line-clamp-3">
                      <p>
                        劉黎兒，旅日作家、文化觀察家、忘齡女人。曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，小說則有《棋神物語》等。
                      </p>
                    </div>

                    <a
                      href="#"
                      className="group absolute z-50 right-0 bottom-0 bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10  inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                    >
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
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 pb-8">
                <div className="flex bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                  <div className="inline-flex items-center justify-center p-2 xs:p-5 lg:p-0">
                    <img
                      className="w-4/5 md:w-4/5 h-auto object-cover rounded-full"
                      src="https://doqvf81n9htmm.cloudfront.net/data/parislin_131/201811/1119/NEW.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative w-full md:flex-grow flex flex-col lg:justify-center pt-5 pr-5 pb-16">
                    <h2 className="text-lg font-medium mb-2">
                      我年過60，又怎樣？黎兒人生相談室
                    </h2>
                    <div className="text-gray-700 overflow-hidden overflow-ellipsis line-clamp-3">
                      <p>
                        劉黎兒，旅日作家、文化觀察家、忘齡女人。曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，小說則有《棋神物語》等。
                      </p>
                    </div>

                    <a
                      href="#"
                      className="group absolute z-50 right-0 bottom-0 bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10  inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                    >
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
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 pb-8">
                <div className="flex bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                  <div className="inline-flex items-center justify-center p-2 xs:p-5 lg:p-0">
                    <img
                      className="w-4/5 md:w-4/5 h-auto object-cover rounded-full"
                      src="https://doqvf81n9htmm.cloudfront.net/data/parislin_131/201811/1119/NEW.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative w-full md:flex-grow flex flex-col lg:justify-center pt-5 pr-5 pb-16">
                    <h2 className="text-lg font-medium mb-2">
                      我年過60，又怎樣？黎兒人生相談室
                    </h2>
                    <div className="text-gray-700 overflow-hidden overflow-ellipsis line-clamp-3">
                      <p>
                        劉黎兒，旅日作家、文化觀察家、忘齡女人。曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，小說則有《棋神物語》等。
                      </p>
                    </div>

                    <a
                      href="#"
                      className="group absolute z-50 right-0 bottom-0 bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10  inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                    >
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
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 pb-8">
                <div className="flex bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                  <div className="inline-flex items-center justify-center p-2 xs:p-5 lg:p-0">
                    <img
                      className="w-4/5 md:w-4/5 h-auto object-cover rounded-full"
                      src="https://doqvf81n9htmm.cloudfront.net/data/parislin_131/201811/1119/NEW.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative w-full md:flex-grow flex flex-col lg:justify-center pt-5 pr-5 pb-16">
                    <h2 className="text-lg font-medium mb-2">
                      我年過60，又怎樣？黎兒人生相談室
                    </h2>
                    <div className="text-gray-700 overflow-hidden overflow-ellipsis line-clamp-3">
                      <p>
                        劉黎兒，旅日作家、文化觀察家、忘齡女人。曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，小說則有《棋神物語》等。
                      </p>
                    </div>

                    <a
                      href="#"
                      className="group absolute z-50 right-0 bottom-0 bg-primary-light hover:bg-secondary-medium hover:text-primary-dark text-gray-800 py-2 px-10  inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                    >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AsideSection />
        </div>
      </div>
    </Layout>
  );
}
