import '../styles/globals.scss'
import {MenuContextWrapper} from '../context/menu';
import {MainContextWrapper} from '../context/main';

function MyApp({ Component, pageProps }) {
  return (
    <MainContextWrapper>
      <MenuContextWrapper>
        <Component {...pageProps} />
      </MenuContextWrapper>
     </MainContextWrapper>
  );
}

export default MyApp;
