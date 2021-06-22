import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "../../components/utils/axios";
import AsideSection from "../../components/AsideSection";
import BreadCrumb from "../../components/utils/BreadCrumb";
import AuthorListItem from "../../components/MainSection/AuthorListItem";
import Banner from '../../components/utils/googletags/Banner';


export const getStaticProps = async () => {
    try {
      const { data } = await axios.get(
        `Author/getLongTermAuthor?${new Date().getTime()}`,
      );

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
      };
    } catch (error) {
      console.log("getData error", error);
    }
  };

export default function authors({data}) {
  const [authorsData, setAuthorsData] = useState(data);

  useEffect(() => {
    setAuthorsData(data);
  }, [data]);

  return (
    <Layout siteTitle="幸福熟齡 - 名人私房學">
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
