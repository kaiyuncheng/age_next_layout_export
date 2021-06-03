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
        slot: '/1006274/thebetteraging_pc_in-cover'
      },
      // 版頭特區 (全站)
      thebetteraging_pc_all_300x100: {
        sizes: [
          [300, 100],
          [300, 75],
        ],
        slot: '/1006274/thebetteraging_pc_all_300x100'
      },
      // 首頁黃金特區_上
      thebetterraging_pc_home_300x250_rt: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_home_300x250_rt'
      },
      // 首頁黃金特區_中
      thebetterraging_pc_home_300x250_rm: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_home_300x250_rm'
      },
      // 首頁大橫幅_上
      thebetteraging_pc_home_970x250_t: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetteraging_pc_home_970x250_t'
      },
      // 首頁大橫幅_中 ★暫無使用
      thebetterraging_pc_home_970x250_m: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_home_970x250_m'
      },
      // 首頁大橫幅_下
      thebetteraging_pc_home_970x250_b: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetteraging_pc_home_970x250_b'
      },
      // 首頁大看板 ★暫無使用
      thebetterraging_pc_home_300x600_rb: {
        sizes: [
          [1, 1],
          [300, 600],
        ],
        slot: '/1006274/thebetterraging_pc_home_300x600_rb'
      },

      // ★第一層列表頁
      // 列表頁黃金特區_上
      thebetterraging_pc_list_300x250_rt: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_list_300x250_rt'
      },
      // 列表頁黃金特區_中
      thebetterraging_pc_list_300x250_rm: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_list_300x250_rm'
      },
      // 列表頁焦點大看板 ★暫無使用
      thebetterraging_pc_list_300x600_rb: {
        sizes: [
          [1, 1],
          [300, 600],
        ],
        slot: '/1006274/thebetterraging_pc_list_300x600_rb'
      },
      // 列表頁大橫幅_上
      thebetterraging_pc_list_970x250_t: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_list_970x250_t'
      },
      // 列表頁大橫幅_下
      thebetterraging_pc_list_970x250_b: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_list_970x250_b'
      },

      // ★內頁
      // 內頁黃金特區_上
      thebetterraging_pc_article_300x250_rt: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt'
      },
      // 內頁黃金特區_中
      thebetterraging_pc_article_300x250_rm: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm'
      },
      // 內頁黃金特區_上_1
      thebetterraging_pc_article_300x250_rt_1: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt_1'
      },
      // 內頁黃金特區_中_1
      thebetterraging_pc_article_300x250_rm_1: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm_1'
      },
      // 內頁黃金特區_上_2
      thebetterraging_pc_article_300x250_rt_2: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt_2'
      },
      // 內頁黃金特區_中_2
      thebetterraging_pc_article_300x250_rm_2: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm_2'
      },
      // 內頁黃金特區_上_3
      thebetterraging_pc_article_300x250_rt_3: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt_3'
      },
      // 內頁黃金特區_中_3
      thebetterraging_pc_article_300x250_rm_3: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm_3'
      },
      // 內頁黃金特區_上_4
      thebetterraging_pc_article_300x250_rt_4: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt_4'
      },
      // 內頁黃金特區_中_4
      thebetterraging_pc_article_300x250_rm_4: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm_4'
      },
      // 內頁黃金特區_上_5
      thebetterraging_pc_article_300x250_rt_5: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rt_5'
      },
      // 內頁黃金特區_中_5
      thebetterraging_pc_article_300x250_rm_5: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_300x250_rm_5'
      },
      // 內頁焦點大看板 ★暫無使用
      thebetterraging_pc_article_300x600_rb: {
        sizes: [300, 600],
        slot: '/1006274/thebetterraging_pc_article_300x600_rb'
      },
      // 內頁小橫幅_下 ★暫無使用
      thebetterraging_pc_article_728x90_b: {
        sizes: [
          [1, 1],
          [728, 90],
        ],
        slot: '/1006274/thebetterraging_pc_article_728x90_b'
      },
      // 內頁大橫幅_下
      thebetterraging_pc_article_970x250_b: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b'
      },
      // 內頁大橫幅_下_1
      thebetterraging_pc_article_970x250_b_1: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b_1'
      },
      // 內頁大橫幅_下_2
      thebetterraging_pc_article_970x250_b_2: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b_2'
      },
      // 內頁大橫幅_下_3
      thebetterraging_pc_article_970x250_b_3: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b_3'
      },
      // 內頁大橫幅_下_4
      thebetterraging_pc_article_970x250_b_4: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b_4'
      },
      // 內頁大橫幅_下_5
      thebetterraging_pc_article_970x250_b_5: {
        sizes: [
          [1, 1],
          [970, 250],
        ],
        slot: '/1006274/thebetterraging_pc_article_970x250_b_5'
      },
      // Innity_Ebar_Video
      thebetterraging_Innity_PC_OOP: {
        sizes: [1, 1],
        slot: '/1006274/thebetterraging_Innity_PC_OOP'
      },

      // ==================== MOBILE ==================== //
      // 手機影音蓋板 (全站)
      thebetteraging_mob_320x480_cover: {
        sizes: [
          [1, 1],
          [320, 480],
        ],
        slot: '/1006274/thebetteraging_mob_320x480_cover'
      },
      // 手機首頁黃金特區_一
      thebetteraging_mob_home_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_home_300x250_t'
      },
      // 手機首頁黃金特區_二
      thebetteraging_mob_home_300x250_m: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_home_300x250_m'
      },
      // 手機首頁黃金特區_三
      thebetteraging_mob_home_300x250_mb: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_home_300x250_mb'
      },
      // 手機首頁黃金特區_四
      thebetteraging_mob_home_300x250_b: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_home_300x250_b'
      },

      // ★第一層列表頁
      // 手機列表頁黃金特區_一
      thebetteraging_mob_list_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_list_300x250_t'
      },
      // 手機列表頁黃金特區_二
      thebetteraging_mob_list_300x250_mb: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_list_300x250_mb'
      },
      // 手機列表頁黃金特區_三
      thebetteraging_mob_list_300x250_b: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_list_300x250_b'
      },

      // ★內頁
      // 手機內頁黃金特區_一
      thebetteraging_mob_article_300x250_t: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t'
      },
      // 手機內頁黃金特區_二
      thebetteraging_mob_article_300x250_mb: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb'
      },
      // 手機內頁黃金特區_三
      thebetteraging_mob_article_300x250_b: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b'
      },
      // 手機內頁黃金特區_一_1
      thebetteraging_mob_article_300x250_t_1: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t_1'
      },
      // 手機內頁黃金特區_二_1
      thebetteraging_mob_article_300x250_mb_1: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb_1'
      },
      // 手機內頁黃金特區_三_1
      thebetteraging_mob_article_300x250_b_1: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b_1'
      },
      // 手機內頁黃金特區_一_2
      thebetteraging_mob_article_300x250_t_2: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t_2'
      },
      // 手機內頁黃金特區_二_2
      thebetteraging_mob_article_300x250_mb_2: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb_2'
      },
      // 手機內頁黃金特區_三_2
      thebetteraging_mob_article_300x250_b_2: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b_2'
      },
      // 手機內頁黃金特區_一_3
      thebetteraging_mob_article_300x250_t_3: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t_3'
      },
      // 手機內頁黃金特區_二_3
      thebetteraging_mob_article_300x250_mb_3: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb_3'
      },
      // 手機內頁黃金特區_三_3
      thebetteraging_mob_article_300x250_b_3: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b_3'
      },
      // 手機內頁黃金特區_一_4
      thebetteraging_mob_article_300x250_t_4: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t_4'
      },
      // 手機內頁黃金特區_二_4
      thebetteraging_mob_article_300x250_mb_4: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb_4'
      },
      // 手機內頁黃金特區_三_4
      thebetteraging_mob_article_300x250_b_4: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b_4'
      },
      // 手機內頁黃金特區_一_5
      thebetteraging_mob_article_300x250_t_5: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_t_5'
      },
      // 手機內頁黃金特區_二_5
      thebetteraging_mob_article_300x250_mb_5: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_mb_5'
      },
      // 手機內頁黃金特區_三_5
      thebetteraging_mob_article_300x250_b_5: {
        sizes: [
          [1, 1],
          [300, 250],
        ],
        slot: '/1006274/thebetteraging_mob_article_300x250_b_5'
      },
      // Innity_Engage
      thebetteraging_Innity_Mob_OOP: {
        sizes: [1, 1],
        slot: '/1006274/thebetteraging_Innity_Mob_OOP'
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