import React, { useState, useEffect } from 'react';
import axios from '../../components/utils/axios';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import Link from 'next/link';
import BreadCrumb from '../../components/utils/BreadCrumb';
import AsideSection from '../../components/AsideSection';
import MainVideo from '../../components/MainSection/MainVideo';
import VideoList from '../../components/MainSection/VideoList';

export const getServerSideProps = async context => {
  const { id } = context.query;

  try {
    const { data } = await axios.get(`Media/list`);

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

export default function videos({ data, id }) {
  const [videosData, setVideosData] = useState(data);
  const [menuTag, setMenuTag] = useState('1');
  const [menuName, setMenuName] = useState('全部');
  const [videosMain, setVideosMain] = useState(
    videosData.media_category_top[0],
  );
  const [videosList, setVideosList] = useState();

  useEffect(() => {
    setVideosData(data);
    setMenuTag(id);
    videosData.media_category_lv1[0].open_top_article === '1'
      ? setVideosMain(videosData.media_category_top)
      : setVideosMain('');
      

    if (id === '1') {
      setMenuName(videosData.media_category_lv1[0].name || '全部');
      setVideosList(videosData.media_video);
    } else {
      setMenuName(videosData.media_category[id - 2].name);
      setVideosList(videosData.media_category[id - 2].media_video);
    }
  }, [data, id]);

  return (
    <Layout siteTitle="幸福熟齡 - Hot影音">
      {/* <!-- bread crumb --> */}
      <BreadCrumb
        titles={[
          { title: 'Hot影音', link: '/videos/1' },
          { title: menuName, link: `/videos/${menuTag}` },
        ]}
      />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            {/* <!-- video tags--> */}
            <ul className="video_tags flex flex-wrap mb-3">
              <li>
                <Link href="/videos/1">
                  <button
                    type="button"
                    className={clsx(
                      menuTag === '1'
                        ? 'text-white bg-primary-dark'
                        : 'text-primary-dark',
                      'block border hover:bg-primary-dark hover:text-white   border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap outline-none focus:outline-none mb-2 mr-2',
                    )}
                  >
                    {videosData.media_category_lv1[0].name || '全部'}
                  </button>
                </Link>
              </li>
              {videosData.media_category &&
                videosData.media_category.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/videos/${item.media_category_id}`}>
                        <button
                          type="button"
                          className={clsx(
                            menuTag === item.media_category_id
                              ? 'text-white bg-primary-dark'
                              : 'text-primary-dark',
                            'block border hover:bg-primary-dark hover:text-white  border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap outline-none focus:outline-none mb-2 mr-2',
                          )}
                        >
                          {item.name}
                        </button>
                      </Link>
                    </li>
                  );
                })}
            </ul>

            {videosMain && <MainVideo topics={videosMain} />}

            {videosList && <VideoList topics={videosList} />}
          </div>
          <AsideSection isHot={true} />
        </div>
      </div>
    </Layout>
  );
}
