import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AuthorListItem from "../../components/MainSection/AuthorListItem";
import Banner from '../../components/utils/googletags/Banner';

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`Author/getLongTermAuthor`);
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
      },
      revalidate: 300,
    };
  } catch (error) {
    console.log('getData error', error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default function authors({data}) {
  
  const [authorsData, setAuthorsData] = useState('');

  useEffect(() => {
    setAuthorsData(data);
  }, [data]);
  
  return (
    <Layout siteTitle="幸福熟齡 - 名人私房學">
      <Head>
        <meta name="title" content="幸福熟齡 - 名人私房學" />
        <meta
          itemProp="description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          itemProp="image"
          content="https://thebetteraging.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta
          name="description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          name="keywords"
          content="熟齡,長照,樂齡,學習,健康,照護,退休,幸福熟齡,銀髮,品味人生,今周刊"
        />
        <meta
          property="og:url"
          content="http://thebetteraging.businesstoday.com.tw/"
        />
        <meta property="og:title" content="幸福熟齡 - 名人私房學" />
        <meta
          property="og:description"
          content="打造多元觀點的熟世代題材，用新觀點活出成熟態度"
        />
        <meta
          property="og:image"
          content="https://thebetteraging.businesstoday.com.tw/images/og_image.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* PC 列表頁 廣告上 */}
      <div className="lg:block hidden max-w-screen-2xl mx-auto px-4 lg:px-2 flex justify-center items-center">
        <Banner adId="thebetterraging_pc_list_970x250_t" />
      </div>

      {/* Mobile 列表頁 廣告上 */}
      <div className="block sm:hidden flex justify-center items-center">
        <Banner adId="thebetteraging_mob_list_300x250_t" />
      </div>

      <BreadCrumb titles={[{ title: '名人私房學', link: '/authors' }]} />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <div className="flex flex-col lg:flex-row flex-wrap -mx-4">
              {authorsData &&
                authorsData.map((author, i) => {
                  return <AuthorListItem author={author} key={i + 1} />;
                })}
            </div>
          </div>
          <AsideSection isHot={true} type={'list'} />
        </div>
      </div>
    </Layout>
  );
}
