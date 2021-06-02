import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

const GoTop = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 200 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const scrollToSupport = () => {
  //   window.location.hash = "";
  //   window.location.hash = "#認購專區";
  // };

  return (
    <>
      <button
        onClick={scrollToTop}
        type="button"
        className={`${
          top && 'hidden opacity-0'
        } group fixed z-40 right-5 bottom-2 p-5 flex items-center justify-center bg-white shadow-md transition-all bg-opacity-50 hover:bg-opacity-100 border border-secondary-medium rounded-3xl outline-none focus:outline-none animate-bounce`}
      >
        <div className="btn_icon">
          <svg
            className="fill-current text-primary-dark transform transition-all -rotate-90"
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
      </button>
    </>
  );
};

export default GoTop;
