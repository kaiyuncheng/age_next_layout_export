import { createContext, useContext, useState, useEffect } from 'react';
import axios from "../components/utils/axios";

const UserContext = createContext();

export function UserContextWrapper({ children }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('btnetThebetteraging') ? localStorage.getItem('btnetThebetteraging') : null;
    if(token) {
      // 包含token 嘗試驗證
      axios({
        method: 'post',
        url: 'https://api-thebetteraging-hardy.businesstoday.com.tw/api/Customer/token_check',
        data: JSON.stringify({
          token
        })
      }).then(response => {
        const { data } = response;
        if(data.code === 200) {
          // 驗證成功 更新token
          localStorage.setItem('btnetThebetteraging', data.token);
          if(!Object.keys(userData).length) {
            setUserData(() => {
              // 寫入用戶資料
              const tokenSplit = data.token.split('.');
              const { username } = JSON.parse(atob(tokenSplit[1])).data;
              return {
                username
              }
            })
          }
        } else if(data.code === 401) {
          // token過期, 清除localStorage
          localStorage.removeItem('btnetThebetteraging');
        }
      }).catch((error) => {
        alert('驗證送出失敗');
        console.log(error);
      })
    } else {
      if(Object.keys(userData).length) {
        // 不帶token卻有user資料, 清空userData
        setUserData(() => {
          return {}
        })
      }
    }
  })
  
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}