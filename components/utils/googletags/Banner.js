import { useAdSlot } from "../../../hooks/useAdSlot";
import { useAdContext } from "../../../context/ad";

function Banner({ adId, adStyle }) {
  const { adData } = useAdContext();
  const targetAd = adData.adlist[adId];

  useAdSlot({
    sizes: targetAd.sizes,
    id: adId,
    isTransitioning: adData.isTransitioning,
    slot: targetAd.slot
  });

  return <div id={adId} className={adStyle} />;
}

export default Banner;
