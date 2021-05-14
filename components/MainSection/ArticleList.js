import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ topics }) => {
  let defaultNum =
    topics.length > 0 ? (topics.length < 15 ? topics.length : 15) : 0;

  const [listItems, setListItems] = useState(
    Array.from(Array(defaultNum).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching || listItems.length >= topics.length) {
      return setIsFetching(false);
    } else {
      fetchMoreListItems();
    }
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  };

  const fetchMoreListItems = () => {
    let listNum =
      (topics.length - listItems.length) % 5 !== 0
        ? ((topics.length - listItems.length) % 5) - 1
        : 5;
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(listNum).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 1000);
  };

  return (
    <div className="news_articles flex flex-col space-y-14 pb-5 mb-5">
      

      {listItems.map((listItem, i) => (
        <Fade bottom key={i} >
          <ArticleListItem item={topics[listItem - 1]} />
        </Fade>
      ))}
      {isFetching && (
        <div className="flex items-center justify-center">
        <div className="fill-current text-primary-dark animate-spin mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 29.963 30"
          >
            <path
              id="Icon_open-reload"
              data-name="Icon open-reload"
              d="M15,0A15,15,0,1,0,25.65,25.65l-2.7-2.7a11.258,11.258,0,1,1-7.988-19.2A10.909,10.909,0,0,1,22.8,7.162L18.712,11.25h11.25V0L25.5,4.463A14.916,14.916,0,0,0,14.962,0Z"
            />
          </svg>
        </div>
        <p className="text-primary-dark font-bold">MORE ...</p>
      </div>
      )}

      {/* {topics && topics.map((item,i)=>{
            return(
              <Fade bottom>
              <ArticleListItem key={i} item={item} />
              </Fade>
            );
          })} */}
    </div>
  );
};

export default ArticleList;
