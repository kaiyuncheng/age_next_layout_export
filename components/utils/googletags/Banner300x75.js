import React, { useEffect } from 'react';
import Head from "next/head";
import useDfpSlot from '../../../hooks/useDfpSlot';
const Banner300x75 = () => {

    useDfpSlot({
        path: '/21737763597/adunit-1',
        size: [300, 75],
        id: 'div-gpt-ad-1529564063399-0',
      });
    
      return (
          <>
          <Head>
          <script
          async="async"
          src="https://www.googletagservices.com/tag/js/gpt.js"
        ></script>

<script
          dangerouslySetInnerHTML={{
            __html: `var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
      googletag.defineSlot(
        '/1006274/thebetteraging_pc_all_300x100', [
          [300, 100],
          [300, 75]
        ],
        'div-gpt-ad-1529564063399-0'
      ).addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });`,
          }}
        />
          </Head>
        <div
          id="div-gpt-ad-1529564063399-0" 
          style={{ width: '300px', height: '75px' }}
        />
        </>
      );
  
};

export default Banner300x75;
