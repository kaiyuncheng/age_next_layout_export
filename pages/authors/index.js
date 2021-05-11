import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import Link from "next/link";
import Image from "next/image";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AuthorListItem from "../../components/MainSection/AuthorListItem";


export const getStaticProps = async () => {
    try {
      const { data } = await axios.get(`Author/getLongTermAuthor`);
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log("getData error", error);
    }
  };

export default function authors({data}) {
  const [authorsData, setAuthorsData] = useState(data.data);

  return (
    <Layout siteTitle="幸福熟齡 - 名人私房學">
      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[{ title: '名人私房學', link: '/authors' }]}/>

      <div className="sections">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col space-y-14 md:flex-row md:space-x-10 md:space-y-0">
          <div className="relative w-full md:w-3/4 flex flex-col overflow-hidden">
            <div className="flex flex-col lg:flex-row flex-wrap -mx-4">
            {authorsData && authorsData.map((author, i)=>{
              return(<AuthorListItem author={author} key={i+1}/>);  
            })}

            </div>
          </div>
          <AsideSection />
        </div>
      </div>
    </Layout>
  );
}
