import React,{ createContext, useContext, useState, useEffect } from 'react';
import axios from "../components/utils/axios";

const MenuContext = createContext();

export function MenuContextWrapper({ children }) {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const res = await axios.get(`Header/getMenuList/`);
        setMenuData(res.data.data.menu_info);
        setMenuData((prevMenuData) =>
          prevMenuData.map((menu, i) => {
            const order = i;
            let menuColor = "bg-rainbow-o border-rainbow-o";
            switch (order) {
              case 0:
                menuColor = "bg-rainbow-o border-rainbow-o";
                break;
              case 1:
                menuColor = "bg-rainbow-r border-rainbow-r";
                break;
              case 2:
                menuColor = "bg-rainbow-g border-rainbow-g";
                break;
              case 3:
                menuColor = "bg-rainbow-y border-rainbow-y";
                break;
              case 4:
                menuColor = "bg-rainbow-p border-rainbow-p";
                break;
              case 5:
                menuColor = "bg-rainbow-b border-rainbow-b";
                break;
              case 6:
                menuColor = "bg-rainbow-t border-rainbow-t";
                break;
              case 7:
                menuColor = "bg-green-200 border-green-200";
                break;
              default:
                menuColor = "bg-rainbow-o border-rainbow-o";
            }
            return {
              ...menu,
              color: menuColor,
              open: false,
            };
          })
        );
      } catch (error) {
        console.log("getMenuData error", error);
      }
    };
    getMenuData();
  }, []);

  return (
    <MenuContext.Provider value={{menuData, setMenuData}}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}