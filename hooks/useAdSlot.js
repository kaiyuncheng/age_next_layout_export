
import { useEffect } from "react";

export function useAdSlot({ sizes, id, isTransitioning, slot, setSuccess }) {
  useEffect(() => {
    // if (!isTransitioning && typeof window !== undefined) {
    //   console.log('ad init', id ,sizes , window, window.googletag);
    // const { googletag } = window;

    if (!isTransitioning && window.googletag && googletag.apiReady) {
      // console.log('ad init', id, sizes, window, window.googletag);

      const googletag = window.googletag || {};
      googletag.cmd = googletag.cmd || [];

      googletag.cmd.push(function () {
        googletag.defineSlot(slot, sizes, id).addService(googletag.pubads());
        googletag.enableServices();
      });

      googletag.cmd.push(function () {
        googletag.display(id);
      });

      
    }
  }, [sizes, id, isTransitioning]);
}
