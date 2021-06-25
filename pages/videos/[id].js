import React, { useState, useEffect } from 'react';
import axios from '../../components/utils/axios';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import Link from 'next/link';
import BreadCrumb from '../../components/utils/BreadCrumb';
import AsideSection from '../../components/AsideSection';
import MainVideo from '../../components/MainSection/MainVideo';
import VideoList from '../../components/MainSection/VideoList';

const timestamp = new Date().getTime();
export const getServerSideProps = async context => {
  const { id } = context.query;
  try {
    const { data } = await axios.get(`Media/list/${id}?${timestamp}`);

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
  const [videosData, setVideosData] = useState('');
  const [menuTag, setMenuTag] = useState('3');
  const [menuName, setMenuName] = useState('看人物');
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    setVideosData(data);
  }, [data]);

  useEffect(() => {
    videosData.media_category && videosData.media_category.map((item)=>{
      if (item.media_category_id && item.media_category_id === id) {
        setMenuName(item.name);
        setMenuTag(item.media_category_id);
      } 
    });
  }, [videosData, id]);

  return (
    <Layout siteTitle="幸福熟齡 - Hot影音">
      {/* <!-- bread crumb --> */}

      <BreadCrumb
        titles={[
          { title: 'Hot影音', link: '/videos' },
          { title: menuName, link: `/videos/${menuTag}` },
        ]}
      />

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            {/* <!-- video tags--> */}
            <ul className="video_tags flex flex-wrap mb-3">
              <li>
                <Link href="/videos">
                  <button
                    type="button"
                    className="text-primary-dark block border hover:bg-primary-dark hover:text-white   border-primary-dark px-2 py-1 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap outline-none focus:outline-none mb-2 mr-2"
                  >
                    全部
                  </button>
                </Link>
              </li>
              {videosData.media_menu &&
                videosData.media_menu.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/videos/${item.media_category_id}`}>
                        <button
                          type="button"
                          className={clsx(
                            menuTag == item.media_category_id
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

            {videosData.media_category_top && (
              <MainVideo topics={videosData.media_category_top} />
            )}

            {videosData.media_video && (
              <VideoList
                topics={videosData.media_video}
                setShowAside={setShowAside}
              />
            )}


          </div>
          <AsideSection isHot={true} type={'list'} showPcAside={true} />

          {showAside && (
            <AsideSection isHot={true} type={'article'} showMbAside={true} />
          )}
        </div>
      </div>
    </Layout>
  );
}
