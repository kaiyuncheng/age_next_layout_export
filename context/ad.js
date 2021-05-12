import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const AdContext = createContext();

export function AdContextWrapper({ children }) {
  const router = useRouter()
  const adState = {
    isTransitioning: false,
    adlist: {
      //版頭特區 (首頁+全站)
      'div-gpt-ad-1529564063399-0': {
        sizes: [[300, 100], [300, 75]],
        slot: '/1006274/thebetteraging_pc_all_300x100'
      },
      //首頁大橫幅_上 首頁大橫幅_中 首頁大橫幅_下 首頁大看板
      'div-gpt-ad-1529567429364-1': {
        sizes: [[1, 1], [970, 250]],
        slot: '/1006274/thebetteraging_pc_home_970x250_t'
      }
    }
    
  }
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