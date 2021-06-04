import { useDableAd } from "../../../hooks/useDableAd";
import { useAdContext } from "../../../context/ad";

function DableBanner({ adId }) {
  const { adData } = useAdContext();
  const targetAd = adData.adlist[adId];

  useDableAd({
    id: adId,
    actiontype: targetAd.actiontype
  });

  return <div id={adId} />;
}

export default DableBanner;
