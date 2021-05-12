
import { useEffect } from "react";

export function useAdSlot({ sizes, id, isTransitioning, slot }) {
  useEffect(() => {
    if (!isTransitioning && typeof window !== undefined) {
      console.log('ad init')
      const { googletag } = window;
      googletag.cmd.push(function () {
        googletag.defineSlot(
          slot,
          sizes,
          id
        ).addService(googletag.pubads());
        googletag.enableServices();
      });

      googletag.cmd.push(function () {
        googletag.display(id);
      });
    }
  }, [sizes, id, isTransitioning]);
}