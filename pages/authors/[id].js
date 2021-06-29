import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Head from "next/head";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AuthorInfo from "../../components/MainSection/AuthorInfo";
import ArticleList from "../../components/MainSection/ArticleList";

const timestamp = new Date().getTime();
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const [authorInfoRes, authorArticlesRes] = await Promise.all([
      axios.get(`Author/release/${id}?${timestamp}`),
      axios.get(
        `Author/getLongTermAuthorArticle/${id}?${timestamp}`,
      ),
    ]);

    if (!authorInfoRes.data.data || !authorArticlesRes.data.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        authorInfo: authorInfoRes.data.data,
        authorArticles: authorArticlesRes.data.data,
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default function author({ authorInfo, authorArticles }) {
  const [authorInfoData, setAuthorInfo] = useState('');
  const [authorArticlesData, setAuthorData] = useState('');
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    setAuthorInfo(authorInfo);
    setAuthorData(authorArticles);
  }, [authorInfo, authorArticles]);

  return (
    authorInfoData && (
      <Layout
        siteTitle={`幸福熟齡 - ${
          authorInfoData.authorInfo.name || '從今開始，勾勒美好第二人生'
        }`}
      >
        <Head>
          {authorInfoData.authorInfo && (
            <meta
              name="title"
              content={`幸福熟齡 - ${
                authorInfoData.authorInfo.name || '從今開始，勾勒美好第二人生'
              }`}
            />
          )}

          {authorInfoData.seo_meta.meta_description && (
            <meta
              itemProp="description"
              content={authorInfoData.seo_meta.meta_description}
            />
          )}

          {authorInfoData.authorInfo.image_url && (
            <meta
              itemProp="image"
              content={authorInfoData.authorInfo.image_url}
            />
          )}

          {authorInfoData.seo_meta.meta_description && (
            <meta
              name="description"
              content={authorInfoData.seo_meta.meta_description}
            />
          )}

          {authorInfoData.seo_meta.meta_keyword && (
            <meta
              name="keywords"
              content={authorInfoData.seo_meta.meta_keyword}
            />
          )}

          {authorInfoData.authorInfo.id && (
            <meta
              property="og:url"
              content={`http://thebetteraging.businesstoday.com.tw/authors/${authorInfoData.authorInfo.id}`}
            />
          )}

          {authorInfoData.seo_meta.meta_og_title && (
            <meta
              property="og:title"
              content={authorInfoData.seo_meta.meta_og_title}
            />
          )}

          {authorInfoData.seo_meta.meta_og_description && (
            <meta
              property="og:description"
              content={authorInfoData.seo_meta.meta_og_description}
            />
          )}

          {authorInfoData.authorInfo.image_url && (
            <meta 
              property="og:image"
              content={authorInfoData.authorInfo.image_url}
            />
          )}
          <meta property="og:type" content="website" />
        </Head>

        {/* <!-- bread crumb --> */}
        <BreadCrumb
          titles={[
            { title: '名人私房學', link: '/authors' },
            {
              title: `${authorInfoData.authorInfo.name}`,
              link: `/authors/${authorInfoData.authorInfo.id}`,
            },
          ]}
        />

        <div className="sections">
          <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col md:flex-row md:space-x-10 md:space-y-0">
            <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
              <AuthorInfo author={authorInfoData.authorInfo} />

              {/* <!-- author articles section--> */}
              <div className="author_articles flex flex-col space-y-20 pb-5 mb-5">
                <ArticleList
                  topics={authorArticlesData.articleInfo}
                  setShowAside={setShowAside}
                />
              </div>
            </div>

            <AsideSection isHot={true} type={'list'} showPcAside={true} />

            {showAside && (
              <AsideSection isHot={true} type={'article'} showMbAside={true} />
            )}
          </div>
        </div>
      </Layout>
    )
  );
}
