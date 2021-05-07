import React, { useState, useEffect, useContext } from "react";
// import axios from "../components/utils/axios";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useMenuContext } from '../context/menu';


// export const getStaticProps = async () => {
//   try {
//       const { data } = await axios.get(`Header/getMenuList/`);
//       return {
//           props: {
//             data,
//           },
//       };
//   } catch (error) {
//       console.log("getData error", error);
//   }
// };
export default function testpage() {
  const {menuData, setMenuData} = useMenuContext();
  // const [menuData, setMenuData] = useState(data.data);
  // const {lang, setLang, sharedState, menuData} = useMenuContext();

  // const toggleLang = () => {
  //   setLang('cde');
  // };

  return (
    <Layout>
    
      <Head>
        <title>second Post</title>
      </Head>

      {/* <h2 className="pt-20">123 {sharedState}</h2>
      <h2 className="text-lg text-red-500">Lang: {lang}</h2>
      <button onClick={toggleLang} type="button" className="border border-primary-dark w-20">
        Toggle Lang
      </button> */}

      <div>
      {menuData &&
        menuData.map((item, i) => {
                  return (
                    <h2 key={i + 1}
                      className="item_logo group w-1/2 md:w-1/4 p-3 sm:p-5 flex items-center justify-center focus:outline-none outline-none"
                    >
                      {item.name}
                    </h2>
                  );
                })}

      </div>
      {/* <h1>{data.article_info.title}</h1>
      <p>{data.content_info[0].text}</p> */}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}