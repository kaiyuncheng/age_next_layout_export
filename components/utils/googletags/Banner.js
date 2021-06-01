import { useAdSlot } from "../../../hooks/useAdSlot";
import { useAdContext } from "../../../context/ad";

function Banner({ adId }) {
  const { adData } = useAdContext();
  const targetAd = adData.adlist[adId];
  // const isFormal = typeof window !== 'undefined' && window.location.host === 'thebetteraging.businesstoday.com.tw' ? true : false;
  
  const isFormal = true;

  useAdSlot({
    sizes: targetAd.sizes,
    id: adId,
    isTransitioning: adData.isTransitioning,
    slot: isFormal ? targetAd.slot : targetAd.dev_slot
  });

  return <div id={adId}  />;
}

export default Banner;
