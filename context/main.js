import React,{ createContext, useContext, useState, useEffect } from 'react';
import axios from "../components/utils/axios";

const MainContext = createContext();

const defaultMainData= {
    top_banners: [],
    new_article_banners: [],
    hot_article_banners: [],
    special_banners: [],
    block_banners_list: [],
    hot_videos: [],
    article_news: [],
    seo_meta: {}
    }
export function MainContextWrapper({ children }) {
  const [mainData, setMainData] = useState(defaultMainData);

  useEffect(() => {
    const getMainData = async () => {
      try {
        const res = await axios.get(`Home`);
        setMainData(res.data.data);
      } catch (error) {
        console.log("getMainData error", error);
      }
    };
    getMainData();
  }, []);

  return (
    <MainContext.Provider value={{mainData}}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}