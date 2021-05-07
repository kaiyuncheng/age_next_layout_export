import _axios from 'axios';

const axios = (baseURL) => {
  const instance = _axios.create({
        baseURL: baseURL || 'https://api-thebetteraging-hardy.businesstoday.com.tw/api/',
        timeout: 1000,
      });

   return instance;
}

export {axios};
export default axios();
