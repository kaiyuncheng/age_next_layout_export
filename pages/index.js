import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "../components/utils/axios";

import Layout from "../components/Layout";

import MainSlider from "../components/utils/sliders/MainSlider";
import Tabs from "../components/LatestSection/Tabs";
import DigitalSlider from "../components/utils/sliders/DigitalSlider";
import Banner300x75 from "../components/utils/googletags/Banner300x75";
import Category from "../components/MainSection/Category";
import AsideSection from "../components/AsideSection";

const top_banners = [
  {
    image:
      "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
    title: "test",
    minor_title: "test",
    display_date: "0000-00-00",
    hyperlink:
      "http://long-termcare.lazyweb.net.tw/article/detail/201804090001/test",
    target: "_self",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
    title: "陳鴻無菜單人生，選擇陪伴父母不留遺憾",
    minor_title:
      "因《阿鴻上菜》美食節目紅遍亞洲的陳鴻，去年受邀回母校明新科大擔任副教授，現在除了教書，他的工作之一是陪伴父母的老後生活。他笑說自己一直是個「職業媽寶」，已經54歲了，仍然像個孩子，「現在我卻要帶著兩個老小孩。」但他知道，陪伴是最好的對待，只要時間允許，他就會帶著父母趴趴走，讓生命不留遺憾。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202010120010/157883/",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
    title: "平路的疾病之旅：是功課也是禮物",
    minor_title:
      "知名作家平路半年內經歷兩次癌症：肺癌和乳癌。癌症，打了潘朵拉的盒子。但，她坦然道：「這是一份禮物。」並令她得以細細思索疾病、害怕、痛楚、執念、親情…，寫下《間隙》一書。她說：「疾病沒有那麼悲苦，事實不是你原先想的那樣。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202011090013/0/%E5%B9%B3%E8%B7%AF%E7%9A%84%E7%96%BE%E7%97%85%E4%B9%8B%E6%97%85%E3%80%8B%E5%8D%8A%E5%B9%B4%E7%BD%B9%E7%99%8C2%E6%AC%A1%EF%BC%8C%E5%A5%B9%E7%85%A7%E7%88%AC%E7%99%BE%E5%B2%B3%E3%80%81%E6%97%85%E8%A1%8C%E3%80%80%E3%80%8C%E5%85%B6%E5%AF%A6%E6%B2%92%E9%80%99%E9%BA%BC%E6%82%B2%E8%8B%A6%EF%BC%8C%E6%98%AF%E5%8A%9F%E8%AA%B2%E4%B9%9F%E6%98%AF%E7%A6%AE%E7%89%A9%E3%80%8D",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
    title: "3度和至親死別，韓良憶為自己老後準備",
    minor_title:
      "作家韓良憶的父母和姐姐，在這10多年來相繼離世，讓她感覺到生命無常。荷蘭籍先生又年長她10歲，兩人沒有小孩，她坦言：「我勢必要面對一個人的老後。」於是，她結交年輕的朋友、尋覓未來居住的養老院、寫好遺囑，她強調：「我不要拖累別人。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009100001/157883/%E7%95%B6%E7%84%A1%E5%B8%B8%E8%AE%8A%E6%97%A5%E5%B8%B8%E3%80%813%E5%BA%A6%E5%92%8C%E8%87%B3%E8%A6%AA%E6%AD%BB%E5%88%A5%EF%BC%8C%E9%9F%93%E8%89%AF%E6%86%B6%E9%A0%98%E6%82%9F%E8%A6%81%E7%82%BA%E3%80%8C%E4%B8%80%E5%80%8B%E4%BA%BA%E8%80%81%E5%BE%8C%E3%80%8D%E4%BD%9C%E6%BA%96%E5%82%99",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/091803_jpg_1140x855.jpg",
    title: "春一枝老闆體悟，三分工作七分玩才自在",
    minor_title:
      "接下爸爸負債的工廠，李銘煌40歲時拼到年營收上億元，代價是失去陪伴家人的時間。就在攀上高峰之際，雙親相繼驟逝，讓他毅然放下事業，以陪伴家人為優先，用旅行閱讀人生風景。10多年前他移居台東，更意外展開事業第二春，為下半人生開啟美麗新局。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009180014/%E5%B9%B4%E7%87%9F%E6%94%B6%E6%8B%BC%E4%B8%8A%E5%84%84%E5%85%83%EF%BC%8C%E7%88%B6%E6%AF%8D%E5%8D%BB%E7%9B%B8%E7%B9%BC%E9%9B%A2%E4%B8%96%E3%80%80%E6%98%A5%E4%B8%80%E6%9E%9D%E8%80%81%E9%97%86%E9%AB%94%E6%82%9F%EF%BC%9A%E4%B8%89%E5%88%86%E5%B7%A5%E4%BD%9C%E4%B8%83%E5%88%86%E7%8E%A9%E6%A8%82%EF%BC%8C%E8%87%AA%E5%9C%A8%E6%9C%80%E9%87%8D%E8%A6%81",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/091803_jpg_1140x855.jpg",
  },
  {
    image:
      "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
    title: "test",
    minor_title: "test",
    display_date: "0000-00-00",
    hyperlink:
      "http://long-termcare.lazyweb.net.tw/article/detail/201804090001/test",
    target: "_self",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
  },
];

const tab1topics = [
  {
    image:
      "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
    title: "test",
    minor_title: "test",
    display_date: "0000-00-00",
    hyperlink:
      "http://long-termcare.lazyweb.net.tw/article/detail/201804090001/test",
    target: "_self",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
  },
  {
    image:
      "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
    title: "test",
    minor_title: "test",
    display_date: "0000-00-00",
    hyperlink:
      "http://long-termcare.lazyweb.net.tw/article/detail/201804090001/test",
    target: "_self",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
    title: "陳鴻無菜單人生，選擇陪伴父母不留遺憾",
    minor_title:
      "因《阿鴻上菜》美食節目紅遍亞洲的陳鴻，去年受邀回母校明新科大擔任副教授，現在除了教書，他的工作之一是陪伴父母的老後生活。他笑說自己一直是個「職業媽寶」，已經54歲了，仍然像個孩子，「現在我卻要帶著兩個老小孩。」但他知道，陪伴是最好的對待，只要時間允許，他就會帶著父母趴趴走，讓生命不留遺憾。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202010120010/157883/",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
    title: "平路的疾病之旅：是功課也是禮物",
    minor_title:
      "知名作家平路半年內經歷兩次癌症：肺癌和乳癌。癌症，打了潘朵拉的盒子。但，她坦然道：「這是一份禮物。」並令她得以細細思索疾病、害怕、痛楚、執念、親情…，寫下《間隙》一書。她說：「疾病沒有那麼悲苦，事實不是你原先想的那樣。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202011090013/0/%E5%B9%B3%E8%B7%AF%E7%9A%84%E7%96%BE%E7%97%85%E4%B9%8B%E6%97%85%E3%80%8B%E5%8D%8A%E5%B9%B4%E7%BD%B9%E7%99%8C2%E6%AC%A1%EF%BC%8C%E5%A5%B9%E7%85%A7%E7%88%AC%E7%99%BE%E5%B2%B3%E3%80%81%E6%97%85%E8%A1%8C%E3%80%80%E3%80%8C%E5%85%B6%E5%AF%A6%E6%B2%92%E9%80%99%E9%BA%BC%E6%82%B2%E8%8B%A6%EF%BC%8C%E6%98%AF%E5%8A%9F%E8%AA%B2%E4%B9%9F%E6%98%AF%E7%A6%AE%E7%89%A9%E3%80%8D",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
    title: "3度和至親死別，韓良憶為自己老後準備",
    minor_title:
      "作家韓良憶的父母和姐姐，在這10多年來相繼離世，讓她感覺到生命無常。荷蘭籍先生又年長她10歲，兩人沒有小孩，她坦言：「我勢必要面對一個人的老後。」於是，她結交年輕的朋友、尋覓未來居住的養老院、寫好遺囑，她強調：「我不要拖累別人。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009100001/157883/%E7%95%B6%E7%84%A1%E5%B8%B8%E8%AE%8A%E6%97%A5%E5%B8%B8%E3%80%813%E5%BA%A6%E5%92%8C%E8%87%B3%E8%A6%AA%E6%AD%BB%E5%88%A5%EF%BC%8C%E9%9F%93%E8%89%AF%E6%86%B6%E9%A0%98%E6%82%9F%E8%A6%81%E7%82%BA%E3%80%8C%E4%B8%80%E5%80%8B%E4%BA%BA%E8%80%81%E5%BE%8C%E3%80%8D%E4%BD%9C%E6%BA%96%E5%82%99",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/091803_jpg_1140x855.jpg",
    title: "春一枝老闆體悟，三分工作七分玩才自在",
    minor_title:
      "接下爸爸負債的工廠，李銘煌40歲時拼到年營收上億元，代價是失去陪伴家人的時間。就在攀上高峰之際，雙親相繼驟逝，讓他毅然放下事業，以陪伴家人為優先，用旅行閱讀人生風景。10多年前他移居台東，更意外展開事業第二春，為下半人生開啟美麗新局。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009180014/%E5%B9%B4%E7%87%9F%E6%94%B6%E6%8B%BC%E4%B8%8A%E5%84%84%E5%85%83%EF%BC%8C%E7%88%B6%E6%AF%8D%E5%8D%BB%E7%9B%B8%E7%B9%BC%E9%9B%A2%E4%B8%96%E3%80%80%E6%98%A5%E4%B8%80%E6%9E%9D%E8%80%81%E9%97%86%E9%AB%94%E6%82%9F%EF%BC%9A%E4%B8%89%E5%88%86%E5%B7%A5%E4%BD%9C%E4%B8%83%E5%88%86%E7%8E%A9%E6%A8%82%EF%BC%8C%E8%87%AA%E5%9C%A8%E6%9C%80%E9%87%8D%E8%A6%81",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/091803_jpg_1140x855.jpg",
  },
];

const special_banners = [
  {
    image:
      "data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
    title: "test",
    minor_title: "test",
    display_date: "0000-00-00",
    hyperlink:
      "http://long-termcare.lazyweb.net.tw/article/detail/201804090001/test",
    target: "_self",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
    title: "陳鴻無菜單人生，選擇陪伴父母不留遺憾",
    minor_title:
      "因《阿鴻上菜》美食節目紅遍亞洲的陳鴻，去年受邀回母校明新科大擔任副教授，現在除了教書，他的工作之一是陪伴父母的老後生活。他笑說自己一直是個「職業媽寶」，已經54歲了，仍然像個孩子，「現在我卻要帶著兩個老小孩。」但他知道，陪伴是最好的對待，只要時間允許，他就會帶著父母趴趴走，讓生命不留遺憾。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202010120010/157883/",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU_6824a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
    title: "平路的疾病之旅：是功課也是禮物",
    minor_title:
      "知名作家平路半年內經歷兩次癌症：肺癌和乳癌。癌症，打了潘朵拉的盒子。但，她坦然道：「這是一份禮物。」並令她得以細細思索疾病、害怕、痛楚、執念、親情…，寫下《間隙》一書。她說：「疾病沒有那麼悲苦，事實不是你原先想的那樣。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202011090013/0/%E5%B9%B3%E8%B7%AF%E7%9A%84%E7%96%BE%E7%97%85%E4%B9%8B%E6%97%85%E3%80%8B%E5%8D%8A%E5%B9%B4%E7%BD%B9%E7%99%8C2%E6%AC%A1%EF%BC%8C%E5%A5%B9%E7%85%A7%E7%88%AC%E7%99%BE%E5%B2%B3%E3%80%81%E6%97%85%E8%A1%8C%E3%80%80%E3%80%8C%E5%85%B6%E5%AF%A6%E6%B2%92%E9%80%99%E9%BA%BC%E6%82%B2%E8%8B%A6%EF%BC%8C%E6%98%AF%E5%8A%9F%E8%AA%B2%E4%B9%9F%E6%98%AF%E7%A6%AE%E7%89%A9%E3%80%8D",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/PKH_0758__jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
    title: "3度和至親死別，韓良憶為自己老後準備",
    minor_title:
      "作家韓良憶的父母和姐姐，在這10多年來相繼離世，讓她感覺到生命無常。荷蘭籍先生又年長她10歲，兩人沒有小孩，她坦言：「我勢必要面對一個人的老後。」於是，她結交年輕的朋友、尋覓未來居住的養老院、寫好遺囑，她強調：「我不要拖累別人。」",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009100001/157883/%E7%95%B6%E7%84%A1%E5%B8%B8%E8%AE%8A%E6%97%A5%E5%B8%B8%E3%80%813%E5%BA%A6%E5%92%8C%E8%87%B3%E8%A6%AA%E6%AD%BB%E5%88%A5%EF%BC%8C%E9%9F%93%E8%89%AF%E6%86%B6%E9%A0%98%E6%82%9F%E8%A6%81%E7%82%BA%E3%80%8C%E4%B8%80%E5%80%8B%E4%BA%BA%E8%80%81%E5%BE%8C%E3%80%8D%E4%BD%9C%E6%BA%96%E5%82%99",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/LIU4571a_jpg_1140x855.jpg",
  },
  {
    image: "data/c33772002_229/202009/091803_jpg_1140x855.jpg",
    title: "春一枝老闆體悟，三分工作七分玩才自在",
    minor_title:
      "接下爸爸負債的工廠，李銘煌40歲時拼到年營收上億元，代價是失去陪伴家人的時間。就在攀上高峰之際，雙親相繼驟逝，讓他毅然放下事業，以陪伴家人為優先，用旅行閱讀人生風景。10多年前他移居台東，更意外展開事業第二春，為下半人生開啟美麗新局。",
    display_date: "0000-00-00",
    hyperlink:
      "https://api-thebetteraging-hardy.businesstoday.com.tw/article/detail/202009180014/%E5%B9%B4%E7%87%9F%E6%94%B6%E6%8B%BC%E4%B8%8A%E5%84%84%E5%85%83%EF%BC%8C%E7%88%B6%E6%AF%8D%E5%8D%BB%E7%9B%B8%E7%B9%BC%E9%9B%A2%E4%B8%96%E3%80%80%E6%98%A5%E4%B8%80%E6%9E%9D%E8%80%81%E9%97%86%E9%AB%94%E6%82%9F%EF%BC%9A%E4%B8%89%E5%88%86%E5%B7%A5%E4%BD%9C%E4%B8%83%E5%88%86%E7%8E%A9%E6%A8%82%EF%BC%8C%E8%87%AA%E5%9C%A8%E6%9C%80%E9%87%8D%E8%A6%81",
    target: "_blank",
    mark_name: "",
    image_url:
      "https://doqvf81n9htmm.cloudfront.net/data/c33772002_229/202009/091803_jpg_1140x855.jpg",
  },
];

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`Home`);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("getData error", error);
  }
};

export default function Home({ data }) {
  const [mainData, setMainData] = useState(data.data);

  return (
    <Layout siteTitle="幸福熟齡 - 從今開始，一同勾勒熟齡的美好">
      <MainSlider topics={mainData.top_banners} />

      <div className="latest border-box mb-10">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 lg:space-x-10">
          <Tabs tab1topics={mainData.hot_article_banners} tab2topics={mainData.new_article_banners} />
          <DigitalSlider topics={mainData.special_banners} />
        </div>
      </div>

      {/* <Banner300x75/> */}

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col space-y-14 overflow-hidden pt-5">
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
          <AsideSection videoTopics={mainData.hot_videos} newsTopics={mainData.article_news}/>
        </div>
      </div>

      <Link href="/testpage">
        <a>test page</a>
      </Link>
      <Link href="/second">
        <a>第二頁</a>
      </Link>
    </Layout>
  );
}
