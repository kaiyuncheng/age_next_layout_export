import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import ChangePassword from '../../components/MemberCenter/ChangePassword';
import MemberInfo from '../../components/MemberCenter/MemberInfo';
import Collection from '../../components/MemberCenter/Collection';

const topics = [
  {
    url_query: '202105070003',
    title: '今周刊 文章標題',
    minor_title: '文章引言',
    collect_date: '2021年05月07日',
    collect_from: '幸福熟齡',
    image_url:
      'https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg',
  },
  {
    url_query: '202105070003',
    title: '2 今周刊 文章標題文章標題文章標題',
    minor_title: '文章引言',
    collect_date: '2021年05月07日',
    collect_from: '幸福熟齡',
    image_url:
      'https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg',
  },
  {
    url_query: '202105070003',
    title: '3 今周刊 文章標題文章標題文章標題',
    minor_title: '文章引言',
    collect_date: '2021年05月07日',
    collect_from: '幸福熟齡',
    image_url:
      'https://doqvf81n9htmm.cloudfront.net/data/crop_auto/072b030ba126b2f4b2374f342be9ed44/37-1F120164445_1140x855.jpg',
  },
];

export default function member() {
  const [menu, setMenu] = useState('會員資料');
  function handleMenu(name) {
    setMenu(name);
  }

  return (
    <Layout siteTitle="幸福熟齡 - 會員中心">
      {/* <!-- bread crumb --> */}
      <div className="breadcrumb pt-7 md:pt-5 mb-5">
        <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
          <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
          <span className="mx-1">/</span>
          <a href="#" className="text-gray-800 font-normal">
            會員中心
          </a>
        </nav>
      </div>

      {/* <!-- main section--> */}
      <div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col justify-center">
          {/* <!-- member --> */}
          <div className="border border-secondary-medium bg-white shadow-md rounded-lg rounded-br-5xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 p-5 md:p-10 mb-10">
            <div className="w-full md:w-1/4 inline-flex items-center justify-center">
              <img
                className="w-1/2 md:w-full xl:w-3/4 h-auto object-cover rounded-full"
                src="https://doqvf81n9htmm.cloudfront.net/customer/user_default.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-2/3 md:flex-grow flex flex-col justify-center">
              <h2 className="text-xl font-medium mb-4">John</h2>
              <div className="flex flex-col space-y-2 text-gray-700">
                <p>一般會員</p>
              </div>
            </div>
          </div>

          <div className="sections">
            <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0">
              <div className="relative w-full md:w-1/4 flex flex-col space-y-14">
                <nav className="border border-secondary-medium bg-rainbow-olight rounded-lg rounded-br-6xl shadow-md flex flex-col overflow-hidden text-center text-lg font-medium">
                  <button
                    type="button"
                    onClick={() => handleMenu('會員資料')}
                    className={clsx(
                      menu === '會員資料' && 'bg-primary-light',
                      'last:border-none border-b border-dashed border-secondary-medium p-3 outline-none focus:outline-none',
                    )}
                  >
                    會員資料
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMenu('文章收藏')}
                    className={clsx(
                      menu === '文章收藏' && 'bg-primary-light',
                      'last:border-none border-b border-dashed border-secondary-medium p-3 outline-none focus:outline-none',
                    )}
                  >
                    文章收藏
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMenu('修改密碼')}
                    className={clsx(
                      menu === '修改密碼' && 'bg-primary-light',
                      'last:border-none border-b border-dashed border-secondary-medium p-3 outline-none focus:outline-none',
                    )}
                  >
                    修改密碼
                  </button>
                  <button
                    type="button"
                    className="hover:bg-primary-light last:border-none border-b border-dashed border-secondary-medium p-3 outline-none focus:outline-none"
                  >
                    登出
                  </button>
                </nav>
              </div>

              <div className="relative h-full w-full md:w-3/4 flex flex-col space-y-10">
                {/* 會員資料與編輯 */}
                {menu === '會員資料' && <MemberInfo />}

                {/* 文章收藏 */}
                {menu === '文章收藏' && <Collection topics={topics} />}

                {/* 修改密碼 */}
                {menu === '修改密碼' && <ChangePassword />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
