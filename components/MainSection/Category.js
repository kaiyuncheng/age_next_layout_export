import React from "react";
import CategorySlider from "../utils/sliders/CategorySlider";

const Category = () => {
  return (
    <div className="topics_section relative border border-secondary-medium rounded-lg rounded-br-5xl flex flex-col p-5 pt-3 bg-gradient-to-t from-primary-light via-white to-white">
      <button
        type="button"
        className="absolute -top-4 left-5 shadow-md bg-primary-light hover:bg-secondary-light transition-all duration-200 px-12 py-2 rounded-br-full rounded-tl-full overflow-hidden outline-none focus:outline-none"
      >
        <h2 className="text-base">熟女學</h2>
        <span className="absolute w-full h-1 left-0 bottom-0 bg-rainbow-r"></span>
      </button>

      <a
        href="#"
        className="topics_btn group inline-flex items-center justify-center self-end mb-3 mr-2"
      >
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
      <div className="topics_items hidden md:flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
        <div className="topics_item">
          <a href="#" className="group">
            <div className="rounded-t-md overflow-hidden">
              <img
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112267/shutterstock_1038990709.jpg_1140x855.jpg"
                alt=""
              />
            </div>
            <div className="bg-rainbow-r w-full h-1.5 rounded-b-md mb-2"></div>
            <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out">
              這種婚不結也罷！5血淋淋經驗告訴我們：失去自己人生、經濟上依賴先生難以幸福
            </h3>
          </a>
        </div>
        <div className="topics_item">
          <a href="#" className="group">
            <div className="rounded-t-md overflow-hidden">
              <img
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112774/2021310_210325.jpg_1140x855.jpg"
                alt=""
              />
            </div>
            <div className="bg-rainbow-r w-full h-1.5 rounded-b-md mb-2"></div>
            <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out">
              這種婚不結也罷！5血淋淋經驗告訴我們：失去自己人生、經濟上依賴先生難以幸福
            </h3>
          </a>
        </div>
        <div className="topics_item">
          <a href="#" className="group">
            <div className="rounded-t-md overflow-hidden">
              <img
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/112802/shutterstock_1917062426.jpg_1140x855.jpg"
                alt=""
              />
            </div>
            <div className="bg-rainbow-r w-full h-1.5 rounded-b-md mb-2"></div>
            <h3 className="group-hover:text-gray-600 transition-all duration-300 ease-in-out">
              這種婚不結也罷！5血淋淋經驗告訴我們：失去自己人生、經濟上依賴先生難以幸福
            </h3>
          </a>
        </div>
      </div>
      <CategorySlider/>
    </div>
  );
};

export default Category;
