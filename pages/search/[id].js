import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import axios from '../../components/utils/axios';
import Layout from '../../components/Layout';
import AsideSection from '../../components/AsideSection';
import BreadCrumb from '../../components/utils/BreadCrumb';
import ArticleListItem from '../../components/MainSection/ArticleListItem';
import Banner from '../../components/utils/googletags/Banner';

export const getServerSideProps = async context => {
  const { keywords, sort, count, yearFrom, yearTo } = context.query;
  try {
    const { data } = await axios.get(
      `search?q=${encodeURIComponent(keywords)}?${new Date().getTime()}`,
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
        yearTo: yearTo || new Date().getFullYear(),
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

const Search = ({ data, keywords, sort, count, yearFrom, yearTo }) => {
  const router = useRouter();
  const [resultData, setResultData] = useState('');
  const [resultNewData, setResultNewData] = useState([]);
  const [newKeywords, setNewKeywords] = useState('');
  const [newCount, setNewCount] = useState('');
  const [sortBy, setSortBy] = useState('related');

  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [dataYears, setDataYears] = useState([]);

  const [resultYearData, setResultYearData] = useState([]);
  const [resultPageData, setResultPageData] = useState([]);

  const [resultDateData, setResultDateData] = useState([]);
  const [resultRelatedData, setResultRelatedData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [pages, setPages] = useState(0);
  const [isPage, setIsPage] = useState(1);

  useEffect(() => {
    setNewKeywords(keywords);
  }, [keywords]);

  useEffect(() => {
    setSortBy(sort);
  }, [sort]);

  useEffect(() => {
    setNewCount(count);
  }, [count]);

  useEffect(() => {
    setYearStart(yearFrom);
    setYearEnd(yearTo);
  }, [yearFrom, yearTo]);

  useEffect(() => {
    setResultData(data);
    sortByYears();
    sortByDate();
    createData();
    setResultNewData(data.search_data);
  }, [data]);

  useEffect(() => {
    sortByDate();
    setResultRelatedData(resultYearData);
  }, [resultYearData]);

  useEffect(() => {
    if (sortBy === 'date') {
      setResultNewData(resultDateData);
    } else {
      setResultNewData(resultRelatedData);
    }
    setPages(Math.ceil(resultNewData.length / Number(count)));
  }, [sortBy, resultNewData]);

  useEffect(() => {
    sortByPage();
  }, [pages, resultNewData]);

  useEffect(() => {
    setArticleData(resultPageData);
  }, [resultPageData]);

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
  const handleSort = e => {
    setSortBy(e.target.value);
  };

  const sortByPage = () => {
    setResultPageData(resultNewData);
    setResultPageData(prevData => {
      let newAry = [];
      for (let n = 1; n <= pages; n++) {
        newAry.push(prevData.slice(count * (n - 1), count * n));
      }
      return [...newAry];
    });
  };
  const sortByYears = () => {
    setResultYearData(data.search_data);
    setResultYearData(prevData =>
      prevData.filter(item => {
        return (
          item.pubtime.slice(0, 4) >= yearFrom &&
          item.pubtime.slice(0, 4) <= yearTo
        );
      }),
    );
  };
  const sortByDate = () => {
    setResultDateData(resultYearData);
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
        {years &&
          years.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
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
        {years &&
          years.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
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

  const handleAdvSearch = e => {
    e.preventDefault();
    setNewKeywords(prev => prev.trim());

    if (newKeywords.trim().length !== 0) {
      return router.push(
        `/search/article?keywords=${newKeywords.trim()}&sort=${sortBy}&count=${newCount}&yearFrom=${yearStart}&yearTo=${yearEnd}`,
        `/search/article?keywords=${newKeywords.trim()}`,
      );
    } else {
      return setNewKeywords('');
    }
  };

  const handleKeyDown = e => {
    setNewKeywords(prev => prev.trim());
    if (e.keyCode === 13) {
      e.preventDefault();
      if (newKeywords.trim().length !== 0) {
        router.push(
          `/search/article?keywords=${newKeywords.trim()}&sort=${sortBy}&count=${newCount}&yearFrom=${yearStart}&yearTo=${yearEnd}`,
          `/search/article?keywords=${newKeywords.trim()}`,
        );
      }
    }
  };

  return (
    <Layout siteTitle="幸福熟齡 - 搜尋結果">
      {/* PC 列表頁 廣告上 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetterraging_pc_list_970x250_t" />
      </div>

      {/* Mobile 列表頁 廣告上 */}
      <div className="block sm:hidden flex justify-center items-center">
        <Banner adId="thebetteraging_mob_list_300x250_t" />
      </div>

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
                    <span>搜尋指定關鍵字：</span>
                    <input
                      className="form-input flex-grow sm:flex-grow-0 ml-1 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                      type="text"
                      name="keywords"
                      value={newKeywords}
                      onChange={handleChangeKeywords}
                      onKeyDown={handleKeyDown}
                    />
                  </label>
                </div>
                <div className="advancedsearch_sortBy inline-flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:h-10">
                  <label htmlFor="newSortBy">搜尋結果排序規則：</label>

                  <div>
                    <label className="inline-flex items-center ml-2 mr-4">
                      <input
                        type="radio"
                        name="newSortBy"
                        className="form-radio text-primary-dark border border-secondary-medium focus:border-primary-medium"
                        name="radio-colors"
                        value="related"
                        checked={sortBy === 'related'}
                        onChange={handleSort}
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
                        checked={sortBy === 'date'}
                        onChange={handleSort}
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
                  <button
                    type="button"
                    onClick={handleAdvSearch}
                    className="group absolute right-1 bottom-1 bg-primary-dark hover:bg-secondary-dark hover:text-primary-dark text-white py-2 px-10 inline-flex items-center justify-center rounded-br-full rounded-tl-full transition-all duration-300 ease-in-out outline-none focus:outline-none"
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
                </div>
              </form>
            </div>

            {/* <!-- search results bar--> */}
            <div className="search_results_bar flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-5 pr-1">
              <div className="results_info text-sm text-gray-700">
                <p className="text-sm text-gray-700">
                  顯示第
                  <span className="font-medium mx-1">
                    {(isPage - 1) * count + 1}
                  </span>
                  到<span className="font-medium mx-1">{isPage * count}</span>
                  項，全部搜尋結果有
                  <span className="font-medium mx-1">
                    {resultNewData.length}
                  </span>
                  項
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
                articleData[isPage - 1].map((item, i) => {
                  return (
                    <ArticleListItem
                      key={i + 1}
                      item={item}
                      isSearch={true}
                      keywords={keywords}
                    />
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
                <button
                  onClick={() => {
                    isPage > 1 && setIsPage(prevPage => prevPage - 1);
                    return window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  type="button"
                  className={clsx(
                    isPage <= 1 && 'cursor-not-allowed text-gray-200',
                    isPage > 1 && 'hover:bg-primary-light text-gray-700 ',

                    'relative inline-flex items-center px-4 py-2 rounded-md border border-secondary-medium bg-white text-sm font-medium outline-none focus:outline-none',
                  )}
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
                </button>

                <p className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700">
                  {isPage} / {pages || 1}
                </p>

                <button
                  onClick={() => {
                    isPage < pages && setIsPage(prevPage => prevPage + 1);
                    return window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  type="button"
                  className={clsx(
                    isPage >= pages && 'cursor-not-allowed text-gray-200',
                    isPage < pages && 'hover:bg-primary-light text-gray-700',

                    'ml-3 relative inline-flex items-center px-4 py-2 border rounded-md border-secondary-medium bg-white text-sm font-medium outline-none focus:outline-none',
                  )}
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
                </button>
              </div>
              <div className="hidden md:flex-1 md:flex md:flex-col lg:flex-row lg:items-center md:justify-between">
                <div className="mb-5 lg:mb-0">
                  <p className="text-sm text-gray-700">
                    第<span className="font-medium mx-1">{isPage}</span>頁，共
                    <span className="font-medium mx-1">{pages || 1}</span>頁
                  </p>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => {
                        isPage > 1 && setIsPage(prevPage => prevPage - 1);
                        return window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      type="button"
                      className={clsx(
                        isPage <= 1 && 'cursor-not-allowed text-gray-200',
                        isPage > 1 && 'hover:bg-primary-light text-gray-500 ',

                        'relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-medium bg-white text-sm font-medium outline-none focus:outline-none',
                      )}
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
                    </button>
                    {articleData.length !== 0 &&
                      articleData.length <= 7 &&
                      articleData.map((item, i) => {
                        return (
                          <button
                            key={i}
                            onClick={() => {
                              setIsPage(i + 1);
                              return window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              });
                            }}
                            type="button"
                            className={clsx(
                              isPage === i + 1 && 'bg-primary-light',
                              'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                            )}
                          >
                            {i + 1}
                          </button>
                        );
                      })}

                    {articleData.length !== 0 && articleData.length > 7 && (
                      <>
                        <button
                          onClick={() => {
                            setIsPage(1);
                            return window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            });
                          }}
                          type="button"
                          className={clsx(
                            isPage === 1 && 'bg-primary-light',
                            'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                          )}
                        >
                          1
                        </button>

                        <button
                          onClick={() => {
                            setIsPage(2);
                            return window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            });
                          }}
                          type="button"
                          className={clsx(
                            isPage === 2 && 'bg-primary-light',
                            isPage > 3 &&
                              isPage < articleData.length - 2 &&
                              'hidden',
                            'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                          )}
                        >
                          2
                        </button>
                        <span
                          className={clsx(
                            isPage === 3 && 'hidden',
                            'relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700',
                          )}
                        >
                          ...
                        </span>
                      </>
                    )}

                    {articleData.length !== 0 &&
                      articleData.length > 7 &&
                      isPage > 2 && (
                        <>
                          {articleData
                            .slice(2, articleData.length - 2)
                            .map((item, i) => {
                              return (
                                <button
                                  key={i}
                                  onClick={() => {
                                    setIsPage(i + 3);
                                    return window.scrollTo({
                                      top: 0,
                                      behavior: 'smooth',
                                    });
                                  }}
                                  type="button"
                                  className={clsx(
                                    isPage === i + 3 && 'bg-primary-light',
                                    (isPage > i + 4 || isPage < i + 2) &&
                                      'hidden',
                                    'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                                  )}
                                >
                                  {i + 3}
                                </button>
                              );
                            })}
                          <span
                            className={clsx(
                              isPage >= articleData.length - 2 && 'hidden',
                              'relative inline-flex items-center px-4 py-2 border border-secondary-medium bg-white text-sm font-medium text-gray-700',
                            )}
                          >
                            ...
                          </span>
                        </>
                      )}

                    {articleData.length !== 0 && articleData.length > 7 && (
                      <>
                        <button
                          onClick={() => {
                            setIsPage(articleData.length - 1);
                            return window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            });
                          }}
                          type="button"
                          className={clsx(
                            isPage === articleData.length - 1 &&
                              'bg-primary-light',
                            isPage > 2 &&
                              isPage < articleData.length - 2 &&
                              'hidden',
                            'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                          )}
                        >
                          {articleData.length - 1}
                        </button>

                        <button
                          onClick={() => {
                            setIsPage(articleData.length);
                            return window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            });
                          }}
                          type="button"
                          className={clsx(
                            isPage === articleData.length && 'bg-primary-light',
                            'relative inline-flex items-center px-4 py-2 border border-secondary-medium text-sm font-medium text-gray-700 hover:bg-primary-light outline-none focus:outline-none',
                          )}
                        >
                          {articleData.length}
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => {
                        isPage < pages && setIsPage(prevPage => prevPage + 1);
                        return window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }}
                      type="button"
                      className={clsx(
                        isPage >= pages && 'cursor-not-allowed text-gray-200',
                        isPage < pages &&
                          'hover:bg-primary-light text-gray-500 ',

                        'relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-medium bg-white text-sm font-medium outline-none focus:outline-none',
                      )}
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
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <AsideSection isHot={true} type={'list'} />
        </div>
      </div>

      {/* PC 列表頁 廣告下 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetterraging_pc_list_970x250_b" />
      </div>
    </Layout>
  );
};

export default Search;
