import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const AdContext = createContext();

export function AdContextWrapper({ children }) {
  const router = useRouter()
  const adState = {
    isTransitioning: false,
    adlist: {
      // dino todo ★符號> 改版後此版位有異動 待確認
      // ==================== PC ==================== //
      // 影音蓋板 (全站)
      'thebetteraging_pc_in-cover': {
        sizes: [1, 1],
        slot: '/1006274/thebetteraging_pc_in-cover',
        dev_slot: '/1006274/test_thebetteraging_pc_in-cover',
      },
      // 版頭特區 (首頁+全站)
      thebetteraging_pc_all_300x100: {
        sizes: [
          [300, 100],
          [300, 75],
        ],
        slot: '/1006274/thebetteraging_pc_all_300x100',
        dev_slot: '/1006274/test_thebetteraging_pc_all_300x100',
      },
      // 首頁大看板 ★無此版位
      thebetterraging_pc_home_300x600_rb: {
        sizes: [300, 600],
        slot: '/1006274/thebetterraging_pc_home_300x600_rb',
        dev_slot: '/1006274/test_thebetterraging_pc_home_300x600_rb',
      },
      // 首頁大橫幅_上
      thebetteraging_pc_home_970x250_t: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetteraging_pc_home_970x250_t',
        dev_slot: '/1006274/test_thebetteraging_pc_home_970x250_t',
      },
      // 首頁大橫幅_中 ★無此版位
      thebetterraging_pc_home_970x250_m: {
        sizes: [970, 250],
        slot: '/1006274/thebetterraging_pc_home_970x250_m',
        dev_slot: '/1006274/test_thebetterraging_pc_home_970x250_m',
      },
      // 首頁大橫幅_下
      thebetteraging_pc_home_970x250_b: {
        sizes: [970, 250],
        slot: '/1006274/thebetteraging_pc_home_970x250_b',
        dev_slot: '/1006274/test_thebetteraging_pc_home_970x250_b',
      },
      // ★第一層列表頁 廣告欄位為何?
      // 列表頁黃金特區_上
      thebetterraging_pc_list_300x250_rt: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_list_300x250_rt',
        dev_slot: '/1006274/test_thebetterraging_pc_list_300x250_rt',
      },
      // 列表頁焦點大看板 ★尺寸更改
      thebetterraging_pc_list_300x600_rb: {
        sizes: [300, 600],
        slot: '/1006274/thebetterraging_pc_list_300x600_rb',
        dev_slot: '/1006274/test_thebetterraging_pc_list_300x600_rb',
      },
      // 列表頁大橫幅_下
      thebetterraging_pc_list_970x250_b: {
        sizes: [970, 250],
        slot: '/1006274/thebetterraging_pc_list_970x250_b',
        dev_slot: '/1006274/test_thebetterraging_pc_list_970x250_b',
      },
      // 內頁黃金特區_上
      thebetterraging_pc_article_300x250_rt: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt',
        dev_slot: '/1006274/test_thebetterraging_pc_article_300x250_rt',
      },
      // 內頁焦點大看板 ★尺寸更改
      thebetterraging_pc_article_300x600_rb: {
        sizes: [300, 600],
        slot: '/1006274/thebetterraging_pc_article_300x600_rb',
        dev_slot: '/1006274/test_thebetterraging_pc_article_300x600_rb',
      },
      // 內頁小橫幅_下 ★無此版位
      thebetterraging_pc_article_728x90_b: {
        sizes: [
          [1, 1],
          [728, 90],
        ],
        slot: '/1006274/thebetterraging_pc_article_728x90_b',
        dev_slot: '/1006274/test_thebetterraging_pc_article_728x90_b',
      },
      // 內頁大橫幅_下
      thebetterraging_pc_article_970x250_b: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b',
        dev_slot: '/1006274/test_thebetterraging_pc_article_970x250_b',
      },
      // Innity_Ebar_Video
      thebetterraging_Innity_PC_OOP: {
        sizes: [1, 1],
        slot: '/1006274/thebetterraging_Innity_PC_OOP',
        dev_slot: '/1006274/test_thebetterraging_Innity_PC_OOP',
      },

      // ==================== MOBILE ==================== //
      // 手機影音蓋板 (全站)
      thebetteraging_mob_320x480_cover: {
        sizes: [
          [1, 1],
          [320, 480],
        ],
        slot: '/1006274/thebetteraging_mob_320x480_cover',
        dev_slot: '/1006274/test_thebetteraging_mob_320x480_cover',
      },
      // 手機首頁黃金特區_一
      thebetteraging_mob_home_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_home_300x250_t',
        dev_slot: '/1006274/test_thebetteraging_mob_home_300x250_t',
      },
      // 手機首頁黃金特區_二
      thebetteraging_mob_home_300x250_b: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_home_300x250_b',
        dev_slot: '/1006274/test_thebetteraging_mob_home_300x250_b',
      },
      // 手機首頁黃金特區_三 ★無此版位
      thebetteraging_mob_home_300x250_m: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_home_300x250_m',
        dev_slot: '/1006274/test_thebetteraging_mob_home_300x250_m',
      },
      // 手機首頁黃金特區_四
      thebetteraging_mob_home_300x250_mb: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_home_300x250_mb',
        dev_slot: '/1006274/test_thebetteraging_mob_home_300x250_mb',
      },
      // ★第一層列表頁 廣告欄位為何?
      // ★第二層列表頁 少一個廣告欄位?
      // 手機列表頁黃金特區_一
      thebetteraging_mob_list_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_list_300x250_t',
        dev_slot: '/1006274/test_thebetteraging_mob_list_300x250_t',
      },
      // 手機列表頁黃金特區_二
      thebetteraging_mob_list_300x250_mb: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_list_300x250_mb',
        dev_slot: '/1006274/test_thebetteraging_mob_list_300x250_mb',
      },
      // 手機內頁黃金特區_一
      thebetteraging_mob_article_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t',
        dev_slot: '/1006274/test_thebetteraging_mob_article_300x250_t',
      },
      // 手機內頁黃金特區_二
      thebetteraging_mob_article_300x250_b: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_article_300x250_b',
        dev_slot: '/1006274/test_thebetteraging_mob_article_300x250_b',
      },
      // 手機內頁黃金特區_三 ★無此版位
      thebetteraging_mob_article_300x250_mb: {
        sizes: [300, 250],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb',
        dev_slot: '/1006274/test_thebetteraging_mob_article_300x250_mb',
      },
      // Innity_Engage
      thebetteraging_Innity_Mob_OOP: {
        sizes: [1, 1],
        slot: '/1006274/thebetteraging_Innity_Mob_OOP',
        dev_slot: '/1006274/test_thebetteraging_Innity_Mob_OOP',
      },

      dablewidget_goPjaJlQ_370NGgXx: {
        actiontype: 'renderWidgetByWidth',
      },
    },
  };
  const [adData, setAdData] = useState(adState);

  useEffect(() => {
    const setTransitionStarted = () => {
      setAdData((prevadData) => {
        let newData = { ...prevadData };
        newData.isTransitioning = true;
        return newData;
      })
      const { googletag } = window;
      googletag.cmd.push(function () {
        googletag.destroySlots();
      });
    };

    const setTransitionComplete = () => {
      setAdData((prevadData) => {
        let newData = { ...prevadData };
        newData.isTransitioning = false;
        return newData;
      })
    };

    router.events.on("routeChangeStart", setTransitionStarted);
    router.events.on("routeChangeComplete", setTransitionComplete);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", setTransitionStarted);
      router.events.off("routeChangeComplete", setTransitionComplete);
    }
  }, [])
  
  return (
    <AdContext.Provider value={{adData}}>
      {children}
    </AdContext.Provider>
  );
}

export function useAdContext() {
  return useContext(AdContext);
}