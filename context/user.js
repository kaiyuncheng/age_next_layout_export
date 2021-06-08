import { createContext, useContext, useState, useEffect } from 'react';
import axios from "../components/utils/axios";
const UserContext = createContext();

export function UserContextWrapper({ children }) {
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('btnetThebetteraging') ? localStorage.getItem('btnetThebetteraging') : null;
    if(token) {
      console.log(token)
      // 包含token 嘗試驗證
      try {
        const res = await axios.post(
          'Customer/login_cookie',
          JSON.stringify({
            termcare_token: token
          })
        )
        if(res.data && res.data.code) {
          const { data } = res;
          switch(data.code) {
            case 200:
              // 驗證成功
              if(!Object.keys(userData).length) {
                setUserData(() => {
                  return {
                    isLogin: true
                  }
                })
              }
              break;
            case 401:
              // token過期, 清除localStorage
              localStorage.removeItem('btnetThebetteraging');
              break;
            case 403:
              console.log(data.messages);
              localStorage.removeItem('btnetThebetteraging');
              break;
            default:
              console.log('驗證錯誤');
              console.log(data);
              localStorage.removeItem('btnetThebetteraging');
          }
        } else {

        }
        
      } catch (error) {
        console.log('驗證送出失敗');
        console.log(error);
      }
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