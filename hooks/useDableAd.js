
import { useEffect } from "react";

export function useDableAd({ id, actiontype }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(`DableAd init: ${id}`);
      if(window.dable && window.dable.q) return;
      window.dable = function() {
        (window.dable.q = window.dable.q || []).push(arguments)
      };
      window.dable(actiontype, id);
    }
  }, [id]);
}