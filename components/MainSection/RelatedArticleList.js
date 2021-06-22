import React, { useState, useEffect } from "react";
import RelatedArticleItem from './RelatedArticleItem';
import { Fade } from 'react-awesome-reveal';
const RelatedArticleList = ({ topics, dableIds }) => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let defaultNum =
      topics.length > 0 ? (topics.length < 1 ? topics.length : 1) : 0;
    setListItems(Array.from(Array(defaultNum).keys(), n => n + 1));
  }, [topics]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching || listItems.length >= topics.length) {
      return setIsFetching(false);
    } else {
      fetchMoreListItems();
    }
  }, [isFetching]);

  const handleScroll = () => {
    if (listItems.length >= 4){
      if (
        document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - window.innerHeight - 1400
      ) {
        setIsFetching(true);
      } 

    }else{
      if (
        document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - window.innerHeight - 1000
      ) {
        setIsFetching(true);
      } 
    }
    
  };

  const fetchMoreListItems = () => {
    let listNum =
      topics.length - listItems.length - 1 < 0
        ? (topics.length - listItems.length) % 1
        : 1;
    setListItems(prevState => [
        ...prevState,
        ...Array.from(Array(listNum).keys(), n => n + prevState.length + 1),
    ]);
    setIsFetching(false);
  };

  return (
      <div className="news_articles flex flex-col space-y-14 pb-5 mb-5">
        {listItems.length <= topics.length &&
          listItems.map((listItem, i) => {
            if (topics[listItem - 1].article_info.title){
              return (
                <Fade triggerOnce key={i + 1}>
                  <RelatedArticleItem
                    item={topics[listItem - 1]}
                    dableIds={dableIds[listItem - 1]}
                    i={i + 1}
                  />
                </Fade>
              );}}
        )}

        {listItems.length < topics.length && isFetching && (
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
      </div>
  );
};

export default RelatedArticleList;
