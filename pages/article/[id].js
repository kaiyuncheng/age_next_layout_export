import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/Layout';
import axios from '../../components/utils/axios';
import Head from 'next/head';
import BreadCrumb from '../../components/utils/BreadCrumb';
import RelatedArticleItem from '../../components/MainSection/RelatedArticleItem';
import RelatedArticleList from '../../components/MainSection/RelatedArticleList';
import clsx from 'clsx';
import DableHiddenBar from '../../components/utils/dable/DableHiddenBar';

export const getServerSideProps = async context => {
  const { id } = context.query;
  try {
    const { data } = await axios.get(`article/detail/${id}`);

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
        id: id,
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

const dableIds = [
  {
    id: 'dablewidget_V7aNVKlB_ko84KeoE',
    pc: 'V7aNVKlB',
    mo: 'ko84KeoE',
  },
  {
    id: 'dablewidget_Ql9RE5X4_2XnxmM7d',
    pc: 'Ql9RE5X4',
    mo: '2XnxmM7d',
  },
  {
    id: 'dablewidget_2o2ZBJoe_xXAWam7G',
    pc: '2o2ZBJoe',
    mo: 'xXAWam7G',
  },
  {
    id: 'dablewidget_3o5bB17j_JXdW63lb',
    pc: '3o5bB17j',
    mo: 'JXdW63lb',
  },
  {
    id: 'dablewidget_GlYJMVXy_1oVPkLlP',
    pc: 'GlYJMVXy',
    mo: '1oVPkLlP',
  },
];

export default function article({ data, id }) {
  const [articleData, setArticleData] = useState(data);
  const [isFetching, setIsFetching] = useState(false);
  const [isShowList, setIsShowList] = useState(false);
  
  useEffect(() => {
    setArticleData(data);
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollBottom);
    return () => window.removeEventListener('scroll', handleScrollBottom);
  }, []);

  useEffect(() => {
    if (
      isFetching &&
      !isShowList &&
      articleData.article_other_list.length !== 0
    ) {
        setIsFetching(false);
        setIsShowList(true);
    } else {
      return setIsFetching(false);
    }
  }, [isFetching]);

  const handleScrollBottom = () => {
    if (document.documentElement.scrollTop >= document.documentElement.offsetHeight - window.innerHeight - 1000) {
      setIsFetching(true);
    } else {
      return null;
    }
  };

  return (
    <Layout
      siteTitle={`幸福熟齡 - ${
        articleData.article_info.title || '從今開始，勾勒美好第二人生'
      }`}
    >
      <Head>
        {articleData.seo_meta.meta_description && (
          <meta
            itemProp="description"
            content={articleData.seo_meta.meta_description}
          />
        )}

        {articleData.seo_meta.meta_description && (
          <meta
            name="description"
            content={articleData.seo_meta.meta_description}
          />
        )}

        {articleData.seo_meta.meta_keyword && (
          <meta name="keywords" content={articleData.seo_meta.meta_keyword} />
        )}

        {articleData.seo_meta.meta_og_title && (
          <meta
            property="og:title"
            content={articleData.seo_meta.meta_og_title}
          />
        )}

        {articleData.seo_meta.meta_og_description && (
          <meta
            property="og:description"
            content={articleData.seo_meta.meta_og_description}
          />
        )}

        {articleData.article_info.url_query && (
          <meta
            property="og:url"
            content={`http://thebetteraging.businesstoday.com.tw/article/${articleData.article_info.url_query}`}
          />
        )}

        {articleData.seo_meta.meta_og_image && (
          <meta
            itemProp="image"
            property="og:image"
            content={articleData.seo_meta.meta_og_image}
          />
        )}

        {articleData.seo_meta.meta_og_image && (
          <meta itemProp="image" content={articleData.seo_meta.meta_og_image} />
        )}

        <meta
          property="dable:item_id"
          content={articleData.article_info.url_query || id}
        />
        <meta
          property="dable:author"
          content={articleData.article_info.writers || '幸福熟齡編輯'}
        />
        <meta
          property="dable:image"
          content={articleData.article_info.dable_image_url}
        />

        <meta property="article:section" content="最新文章" />
        <meta property="article:section2" content="aging" />
        <meta
          property="article:published_time"
          content={articleData.article_info.date_2}
        />
      </Head>

      {articleData.category_info.parent_id && articleData.category_info.name && (
        <BreadCrumb
          titles={[
            {
              title: `${articleData.category_info.parent_name} `,
              link: `/catalog/${articleData.category_info.parent_id}`,
            },
            {
              title: `${articleData.category_info.name} `,
              link: `/catalog/${articleData.category_info.category_id}`,
            },
            {
              title: `${articleData.article_info.title}`,
              link: `/article/${articleData.article_info.url_query}`,
            },
          ]}
        />
      )}

      {!articleData.category_info.parent_id && articleData.category_info.name && (
        <BreadCrumb
          titles={[
            {
              title: `${articleData.category_info.name} `,
              link: `/catalog/${articleData.category_info.category_id}`,
            },
            {
              title: `${articleData.article_info.title}`,
              link: `/article/${articleData.article_info.url_query}`,
            },
          ]}
        />
      )}

      {!articleData.category_info.parent_id && !articleData.category_info.name && (
        <BreadCrumb
          titles={[
            {
              title: `${articleData.article_info.title}`,
              link: `/article/${articleData.article_info.url_query}`,
            },
          ]}
        />
      )}

      {/* Dable 大家都在看 隱藏 下滑顯示 */}
      <DableHiddenBar />
      <Fade bottom>
        <RelatedArticleItem
          item={articleData}
          dableIds={{
            id: 'dablewidget_6oMPxGXb_OoR43ely',
            pc: '6oMPxGXb',
            mo: 'OoR43ely',
          }}
          type={'article'}
          i={0}
        />
      </Fade>

      {articleData.article_other_list.length !== 0 &&
        !isShowList &&
        isFetching && (
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

      {articleData.article_other_list.length !== 0 && isShowList && (
        <RelatedArticleList
          topics={articleData.article_other_list}
          dableIds={dableIds}
        />
      )}
    </Layout>
  );
}
