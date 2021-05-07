import React, { useState } from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({topics}) => {
  return (<div className="news_articles flex flex-col space-y-14 pb-5 mb-5">

  {topics && topics.map((item,i)=>{
            return(
              <ArticleListItem key={i} item={item} />

            );
          })}
    </div>);
};

export default ArticleList;
