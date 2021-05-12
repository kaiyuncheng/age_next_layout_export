import '../styles/globals.scss'
import {MenuContextWrapper} from '../context/menu';
import {UserContextWrapper} from '../context/user';
import {AdContextWrapper} from '../context/ad';

function MyApp({ Component, pageProps }) {
  return (
    <AdContextWrapper>
      <MenuContextWrapper>
        <UserContextWrapper>
          <Component {...pageProps} />
        </UserContextWrapper>
      </MenuContextWrapper>
    </AdContextWrapper>
  );
}

export default MyApp;
