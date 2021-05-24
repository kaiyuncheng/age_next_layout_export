import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../../components/utils/axios';
import Layout from '../../components/Layout';
import Link from 'next/link';
import AsideSection from '../../components/AsideSection';
import ArticleList from '../../components/MainSection/ArticleList';
import BreadCrumb from '../../components/utils/BreadCrumb';
import ArticleListItem from '../../components/MainSection/ArticleListItem';

export const getServerSideProps = async context => {
  const { keywords, sort, count, yearFrom, yearTo } = context.query;
  try {
    const { data } = await axios.get(
      `search?q=${encodeURIComponent(keywords)}`,
    );

    if (!data.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return {
      props: {
        data: data.data,
        keywords: keywords,
        sort: sort || 'related',
        count: count || '10',
        yearFrom: yearFrom || '2008',
        yearTo: yearTo || '2021',
      },
    };
  } catch (error) {
    console.log('getServerSideProps error', error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

const Search = ({ data, keywords, sort, count, yearFrom, yearTo}) => {
  const [resultData, setResultData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [newKeywords, setNewKeywords] = useState('');
  const [newSortBy, setNewSortBy] = useState('');
  const [newCount, setNewCount] = useState('');


  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [dataYears, setDataYears] = useState([]);
  


  const [sortBy, setSortBy] = useState('');

  const [resultDateData, setResultDateData] = useState([]);
  const [resultRelatedData, setResultRelatedData] = useState([]);

  const [resultPageData, setResultPageData] = useState([]);

  let newAry;

  useEffect(() => {
    setResultData(data);
    sortByDate();
    createData();
    setResultRelatedData(data.search_data);
    setArticleData(data.search_data);
  }, [data]);

  useEffect(() => {
    setNewKeywords(keywords);
  }, [keywords]);

  useEffect(() => {
    setSortBy(sort);
    setNewSortBy(sort);
  }, [sort]);

  useEffect(() => {
    setNewCount(count);
  }, [count]);

  useEffect(() => {
    setYearStart(yearFrom);
    setYearEnd(yearTo);
  }, [yearFrom, yearTo]);

  useEffect(() => {
    if (sortBy === 'date') {
      setArticleData(resultDateData);
    } else {
      setArticleData(resultRelatedData);
    }
  }, [sortBy]);



  // useEffect(() => {
  //   let pages = Math.ceil(resultData.search_data.length / count);
  //   setResultPageData(resultData.search_data.slice(0, count));
  // }, []);

  const yearStartHandler = e => {
    setYearStart(e.target.value);
    setYearEnd('');
  };
  const yearEndHandler = e => {
    setYearEnd(e.target.value);
  };

  const countHandler = e => {
    setNewCount(e.target.value);
  };

  const handleChangeKeywords = e => {
    setNewKeywords(e.target.value);
  };


  const sortByDate = () => {
    setResultDateData(data.search_data);
    setResultDateData(prevData =>
      prevData.map(item => {
        let timestamp = new Date(item.pubtime).getTime();
        return {
          ...item,
          timestamp: timestamp,
        };
      }),
    );
    setResultDateData(prevData =>
      prevData.sort((a, b) => {
        return b.timestamp - a.timestamp;
      }),
    );
  };

  const handleSort = e => {
    setSortBy(e.target.value);
  };

  const handleNewSort = e => {
    setNewSortBy(e.target.value);
  };


  // const changeArticle = () => {
  //   if (sortBy === 'date') {
  //     setArticleData(resultDateData);
  //   } else {
  //     setArticleData(resultRelatedData);
  //   }
  // };

  const sortPage = () => {
    let pages = Math.ceil(resultData.search_data.length / newCount);
    setResultPageData(resultData.search_data.slice(0, newCount));
  };


  const YearStartSelect = ({ yearStart, yearStartHandler, years }) => (
    <label htmlFor="yearStart">
      <span className="block sm:inline mb-2">搜尋結果限定年份：</span>
      <select
        name="yearStart"
        className="form-select ml-2 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none"
        onChange={yearStartHandler}
        value={yearStart}
      >
        <option value="">請選擇</option>
        {years && years.map(item => <option value={item}>{item}</option>)}
      </select>
    </label>
  );

  const YearEndSelect = ({ yearEnd, yearEndHandler, years }) => (
    <label htmlFor="yearEnd">
      <span className="mx-2">~</span>
      <select
        name="yearEnd"
        className="form-select border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none"
        onChange={yearEndHandler}
        value={yearEnd}
      >
        <option value="">請選擇</option>
        {years && years.map(item => <option value={item}>{item}</option>)}
      </select>
    </label>
  );

  const createData = () => {
    const thisYear = new Date().getFullYear();
    const data = [];
    data.push(thisYear);
    for (let i = 1; i <= thisYear - 2008; i++) {
      data.push(thisYear - i);
    }
    setDataYears(data);
  };

  return (
    <Layout siteTitle="幸福熟齡 - 搜尋結果">
      {console.log('取10筆', resultPageData)}
      {console.log('日期排列', resultDateData)}
      {console.log('相關排列', resultRelatedData)}
      {console.log('分類', sortBy)}
      {console.log('列表檔案', articleData)}
      {console.log('New分類', newSortBy)}
      {console.log('開始年份', yearStart)}
      {console.log('結束年份', yearEnd)}
      {/* <!-- bread crumb --> */}
      <BreadCrumb
        titles={[
          {
            title: `搜尋結果`,
            link: `/search/article?keywords=${keywords}`,
          },
        ]}
      />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <div className="search_form mb-5">
              <form className="flex flex-col space-y-4">
                <h2 className="search_title text-xl font-bold inline-flex items-center mb-2">
                  <span className="mr-2">
                    <svg
                      className="fill-current text-primary-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 15.997 16"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="Icon awesome-search"
                        d="M15.78,13.833l-3.115-3.115a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.624v.509a.749.749,0,0,0,.219.531l3.115,3.115a.747.747,0,0,0,1.059,0l.884-.884a.753.753,0,0,0,0-1.062ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
                      />
                    </svg>
                  </span>
                  搜尋條件：
                  <span className="search_keywords text-primary-dark">
                    {keywords}
                  </span>
                </h2>

                <div className="advancedsearch_keywords">
                  <label className="inline-flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center w-full pr-1">
                    <span className="">搜尋指定關鍵字：</span>
                    <input
                      className="form-input flex-grow sm:flex-grow-0 ml-1 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                      type="text"
                      name="keywords"
                      value={newKeywords}
                      onChange={handleChangeKeywords}
                    />
                  </label>
                </div>
                <div className="advancedsearch_sortBy inline-flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:h-10">
                  <label htmlFor="sortBy">搜尋結果排序規則：</label>

                  <div>
                    <label className="inline-flex items-center ml-2 mr-4">
                      <input
                        type="radio"
                        name="newSortBy"
                        className="form-radio text-primary-dark border border-secondary-medium focus:border-primary-medium"
                        name="radio-colors"
                        value="related"
                        checked={newSortBy === 'related'}
                        onChange={handleNewSort}
                      />
                      <span className="ml-2 whitespace-nowrap">最相關</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="newSortBy"
                        className="form-radio text-primary-dark border border-secondary-medium focus:border-primary-medium"
                        name="radio-colors"
                        value="date"
                        checked={newSortBy === 'date'}
                        onChange={handleNewSort}
                      />
                      <span className="ml-2 whitespace-nowrap">最新</span>
                    </label>
                  </div>
                </div>
                <div className="advancedsearch_count">
                  <label htmlFor="count">
                    <span>顯示結果筆數：</span>
                    <select
                      name="count"
                      className="form-select ml-1 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none"
                      onChange={countHandler}
                      value={newCount}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                    </select>
                  </label>
                </div>

                <div className="advancedsearch_years">
                  <YearStartSelect
                    yearStart={yearStart}
                    years={[...dataYears]}
                    yearStartHandler={yearStartHandler}
                  />

                  {yearStart && (
                    <YearEndSelect
                      yearEnd={yearEnd}
                      years={dataYears.filter(data => data >= yearStart)}
                      yearEndHandler={yearEndHandler}
                    />
                  )}
                </div>
                <div className="relative border-b border-r border-secondary-medium rounded-br-6xl w-full pt-5 pb-6">
                  <Link
                    href={`/search/article?keywords=${newKeywords}&sort=${newSortBy}&count=${newCount}&yearFrom=${yearStart}&yearTo=${yearEnd}`}
                    as="/search/article"
                  >
                    <button
                      type="button"
                      className="group absolute z-50 right-1 bottom-1 bg-primary-dark hover:bg-secondary-dark hover:text-primary-dark text-white py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
                    >
                      <p className="mr-2">搜尋</p>
                      <div>
                        <svg
                          className="fill-current text-white group-hover:text-primary-dark transform group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15.997 16"
                        >
                          <path
                            id="Icon_awesome-search"
                            data-name="Icon awesome-search"
                            d="M15.78,13.833l-3.115-3.115a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.624v.509a.749.749,0,0,0,.219.531l3.115,3.115a.747.747,0,0,0,1.059,0l.884-.884a.753.753,0,0,0,0-1.062ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            {/* <!-- search results bar--> */}
            <div className="search_results_bar flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-5 pr-1">
              <div className="results_info text-sm text-gray-700">
                <p className="text-sm text-gray-700">
                  顯示
                  <span className="font-medium mx-1">1</span>到
                  <span className="font-medium mx-1">{count}</span>
                  項的結果，共有
                  <span className="font-medium mx-1">
                    {data.search_data.length}
                  </span>
                  項結果
                </p>
              </div>
              <div className="results_select">
                <label htmlFor="count">
                  <span>排序依據：</span>
                  <select
                    name="count"
                    className="form-select ml-1 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none"
                    onChange={handleSort}
                    value={sortBy}
                  >
                    <option value="related">相關性</option>
                    <option value="date">日期</option>
                  </select>
                </label>
              </div>
            </div>

            {/* <!-- search results section--> */}
            <div className="search_results flex flex-col space-y-20 pb-5 mb-5">
              {articleData.length !== 0 &&
                articleData.map((item, i) => {
                  return (
                    <ArticleListItem key={i} item={item} isSearch={true} />
                  );
                })}

              {articleData.length === 0 && (
                <p className="text-primary-dark text-center">
                  --查無相關文章--
                </p>
              )}
            </div>

            {/* <!-- search pagination --> */}
            <div className="search_pagination flex items-center justify-between">
              <div className="flex-1 flex justify-between md:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-primary-light"
                >
                  <span className="sr-only">上一頁</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-primary-light"
                >
                  <span className="sr-only">下一頁</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="hidden md:flex-1 md:flex md:flex-col lg:flex-row lg:items-center md:justify-between">
                <div className="mb-5 lg:mb-0">
                  <p className="text-sm text-gray-700">
                    顯示
                    <span className="font-medium mx-1">1</span>到
                    <span className="font-medium mx-1">{count}</span>
                    項的結果，共有
                    <span className="font-medium mx-1">
                      {data.search_data.length}
                    </span>
                    項結果
                  </p>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-medium bg-white text-sm font-medium text-gray-500 hover:bg-primary-light"
                    >
                      <span className="sr-only">上一頁</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="hidden md:inline-flex relative items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700">
                      ...
                    </span>
                    <a
                      href="#"
                      className="hidden md:inline-flex relative items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700 hover:bg-primary-light"
                    >
                      10
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-medium bg-white text-sm font-medium text-gray-500 hover:bg-primary-light"
                    >
                      <span className="sr-only">下ㄧ頁</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* <ArticleList topics={newsData} /> */}
          </div>
          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Search;
