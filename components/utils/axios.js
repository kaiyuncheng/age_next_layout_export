import _axios from 'axios';

const urlHostname =
  typeof window !== 'undefined' && window.location.hostname
    ? window.location.hostname
    : '';
let nameUrl = 'https://api-thebetteraging-dev.businesstoday.com.tw/api/';


const axios = baseUrl => {
  switch (urlHostname) {
    case `thebetteraging.businesstoday.com.tw`:
      nameUrl = 'https://api-thebetteraging.businesstoday.com.tw/api/';
      break;
    case `new-thebetteraging-dev.businesstoday.com.tw`:
      nameUrl = 'https://api-thebetteraging-dev.businesstoday.com.tw/api/';
      break;
    case `age-next-layout.vercel.app`:
    case `localhost`:
      nameUrl = 'https://api-thebetteraging-dev.businesstoday.com.tw/api/';
      break;
    default:
      nameUrl = 'https://api-thebetteraging.businesstoday.com.tw/api/';
      break;
  }
  console.log(urlHostname, nameUrl);
  
  const instance = _axios.create({
    baseURL: baseUrl || nameUrl,
    timeout: 8000,
  });

  return instance;
};

export { axios };
export default axios();
