import Layout from "../../components/Layout";
import Link from "next/link";
import AsideSection from "../../components/AsideSection";

export default function videos() {
  return (
    <Layout siteTitle="幸福熟齡 - Hot影音">
      {/* <!-- bread crumb --> */}
      <div className="breadcrumb pt-7 md:pt-5 mb-5">
        <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
          <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
          <span className="mx-1">/</span>
          <a href="#" className="text-gray-800 font-normal">
             Hot影音
          </a>
        </nav>
      </div>

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
          {/* <!-- video tags--> */}
                    <ul className="video_tags flex space-x-2 flex-wrap">
                        <li><a className="block border mb-5 text-white hover:text-white bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist">全部</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/3">退休規劃</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/4">幸福熟齡</a></li>
                        <li><a className="block border mb-5 text-primary-dark hover:text-white hover:bg-primary-dark border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap" href="/media/videolist/5">退休</a></li>
                    </ul>

                    {/* <!-- main video section--> */}
                    <div className="video_main flex flex-col mb-14 relative">
                        <a href="#"
                            className="group block rounded-lg relative overflow-hidden w-full mb-5 outline-none focus:outline-none">
                            <img className="w-full h-full  object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/111815/shutterstock_725663257.jpg_1140x855.jpg"
                                alt="" />
                            <span
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                    viewBox="0 0 48.405 48.405">
                                    <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                        d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                        transform="translate(-0.563 -0.563)" />
                                </svg>
                            </span>
                        </a>
                        <a href="#" className="block outline-none focus:outline-none mb-5 pr-2">
                            <h2 className="text-xl font-bold hover:text-gray-600">
                                更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                            </h2>
                        </a>
                        <div
                            className="absolute bottom-0 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full pt-5 pb-6">
                        </div>
                    </div>

                    {/* <!-- videos section--> */}
                    <div className="videos relative flex flex-col md:flex-row flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112109/shutterstock_1084534856.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
                            <div
                                className="flex flex-col bg-white rounded-bl-lg rounded-t-lg rounded-br-5xl shadow-md border border-secondary-medium">
                                <a href="#"
                                    className="group block rounded-t-lg relative overflow-hidden w-full outline-none focus:outline-none">
                                    <img className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
                                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/88155/YXH10724_meitu_123.jpg_1140x855.jpg"
                                        alt="" />
                                    <span
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out fill-current text-black opacity-60 group-hover:opacity-95 z-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.405" height="48.405"
                                            viewBox="0 0 48.405 48.405">
                                            <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle"
                                                d="M24.765.562a24.2,24.2,0,1,0,24.2,24.2A24.2,24.2,0,0,0,24.765.562ZM36.056,27.107,18.88,36.964A2.346,2.346,0,0,1,15.4,34.915v-20.3a2.348,2.348,0,0,1,3.484-2.049L36.056,23.008A2.35,2.35,0,0,1,36.056,27.107Z"
                                                transform="translate(-0.563 -0.563)" />
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className="block outline-none focus:outline-none m-5 overflow-hidden overflow-ellipsis line-clamp-3">
                                    <h2 className=" hover:text-gray-600">
                                        更年期睡眠障礙、婦科問題多，白雁教你3動作促進出汗排濕氣，重拾優雅生活，白雁教你3動作促進出汗排濕氣，重拾優雅生活
                                    </h2>
                                </a>
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
