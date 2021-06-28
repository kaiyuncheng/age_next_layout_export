import _axios from 'axios';

const urlHostname = typeof window !== 'undefined' && window.location.hostname
    ? encodeURI(window.location.hostname)
    : '';
let nameUrl = '';

switch (urlHostname) {
  case 'thebetteraging.businesstoday.com.tw':
    nameUrl = 'https://api-thebetteraging.businesstoday.com.tw/api/';
    break;
  case 'new-thebetteraging-dev.businesstoday.com.tw':
    nameUrl = 'https://api-thebetteraging-dev.businesstoday.com.tw/api/';
    break;
  case 'age-next-layout.vercel.app':
  case 'localhost':
    nameUrl = 'https://api-thebetteraging-hardy.businesstoday.com.tw/api/';
    break;
  default:
    nameUrl = 'https://api-thebetteraging-hardy.businesstoday.com.tw/api/';
    break;
}


const axios = baseUrl => {
  console.log(urlHostname, nameUrl);
  
  const instance = _axios.create({
    baseURL: baseUrl || nameUrl,
    timeout: 8000,
  });

  return instance;
};

export { axios };
export default axios();
