import '../styles/globals.scss'
import {MenuContextWrapper} from '../context/menu';

function MyApp({ Component, pageProps }) {
  return (
  <MenuContextWrapper>
    <Component {...pageProps} />
  </MenuContextWrapper>
  );
}

export default MyApp;
