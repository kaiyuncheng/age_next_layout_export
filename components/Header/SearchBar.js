import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const SearchBar = ({ toggleMenu }) => {
  const router = useRouter();
  const [keywords, setKeywords] = useState('');
  const inputRef = useRef(null);

  const handleChange = e => {
    setKeywords(e.target.value);
  };

  const handleKeyDown = e => {
    setKeywords(prev => prev.trim());
    if (e.keyCode === 13) {
      e.preventDefault();
      if (keywords.trim().length !== 0) {
        router.push(`/search/article?keywords=${keywords.trim()}`);
      }
    }
  };

  const handleRouter = e => {
    e.preventDefault();
    setKeywords(prev => prev.trim());
    if (keywords.trim().length !== 0) {
      return router.push(`/search/article?keywords=${keywords.trim()}`);
    } else {
      return setKeywords('');
    }
  };

  const handleRouterMobile = e => {
    e.preventDefault();
    toggleMenu();
    setKeywords(prev => prev.trim());
    if (keywords.trim().length !== 0) {
      return router.push(`/search/article?keywords=${keywords.trim()}`);
    } else {
      return setKeywords('');
    }
  };

  return (
    <>
      <form className="hidden md:flex items-center">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="Icon_awesome-search"
              data-name="Icon awesome-search"
              d="M15.78,13.833l-3.115-3.115a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.624v.509a.749.749,0,0,0,.219.531l3.115,3.115a.747.747,0,0,0,1.059,0l.884-.884a.753.753,0,0,0,0-1.062ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
              fill="#b0b6ba"
            />
          </svg>
        </div>
        <input
          className="h-10 w-72 placeholder-gray-400 bg-transparent outline-none focus:outline-none"
          placeholder="搜尋關鍵字..."
          type="text"
          value={keywords}
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleRouter}
          type="button"
          className="absolute right-0 top-0 bg-primary-dark hover:bg-primary-medium transition-colors duration-300 h-10 w-24 text-white rounded-br-full rounded-tl-full outline-none focus:outline-none"
        >
          搜尋
        </button>
      </form>

      <form className="md:hidden flex items-center">
        <div className="px-3">
          <svg
            className="fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="Icon_awesome-search"
              data-name="Icon awesome-search"
              d="M15.78,13.833l-3.115-3.115a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.624v.509a.749.749,0,0,0,.219.531l3.115,3.115a.747.747,0,0,0,1.059,0l.884-.884a.753.753,0,0,0,0-1.062ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
            />
          </svg>
        </div>
        <input
          className="h-10 w-72 placeholder-gray-500 bg-transparent outline-none focus:outline-none"
          placeholder="搜尋關鍵字..."
          type="text"
          value={keywords}
          onChange={handleChange}
          ref={inputRef}
        />
        <button
          onClick={handleRouterMobile}
          type="submit"
          className="absolute right-0 top-0 bg-primary-dark hover:bg-primary-medium transition-colors duration-300 h-10 w-20 text-white rounded-br-full rounded-tl-full outline-none focus:outline-none"
        >
          搜尋
        </button>
      </form>
    </>
  );
};

export default SearchBar;
