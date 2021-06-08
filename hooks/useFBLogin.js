import { useState, useEffect } from 'react';

const useFBLogin = () => {
  const [response, setResponse] = useState();
  const [user, setUser] = useState();
  
  useEffect(() => {
    // SDK 載入完後才會初始化 SDK
    window.fbAsyncInit = function () {
      //初始化 SDK
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v10.0',
      });

      //確認登入
      window.FB.getLoginStatus(function (response) {
        //console.log(response)
        setResponse(response);
        getUser();
      });

      window.FB.AppEvents.logPageView();
    };

    //載入 Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  function getUser() {
    window.FB.api(
      '/me',
      'GET',
      { fields: 'id, name, email' },
      function (response) {
        console.log('user info', response);
        setUser(response);
      },
    );
  }

  function handleFBLogin() {
    window.FB.login(
      function (response) {
        setResponse(response);
        getUser();
      },
      { scope: 'public_profile, email' },
    );
  }

  function handleFBLogout() {
    window.FB.logout(function (response) {
      setResponse(response);
    });
  }

  return [response, user, handleFBLogin, handleFBLogout];
};

export default useFBLogin;
