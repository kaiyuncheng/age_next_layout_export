import React, { useEffect } from "react";
import Head from "next/head";
import useDfpSlot from "../../../hooks/useDfpSlot";
const Banner = ({size}) => {
  // const defaultBanner =  banners[size];

  // const banners = {
  //   banner300x75: {
  //     path: '/1006274/thebetteraging_pc_all_300x100',
  //     size: [300, 75],
  //     id: 'div-gpt-ad-1529564063399-0',
  //   },
  //   banner300x100: {
  //     path: '/1006274/thebetteraging_pc_all_300x100',
  //     size: [300, 100],
  //     id: 'div-gpt-ad-1529564063399-0',
  //   },

  // };

  useDfpSlot({
    path: '/1006274/thebetteraging_pc_all_300x100',
    size: [300, 100],
    id: 'div-gpt-ad-1529564063399-0',
  });


  return (
    <>
    <Head><script
      async="async"
      src="https://www.googletagservices.com/tag/js/gpt.js"
    ></script>
    </Head>
      <div
        id="div-gpt-ad-1529564063399-0"
        style={{ width: "300px", height: "100px" }}
      />
    </>
  );
};

export default Banner;
