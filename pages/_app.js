import "../styles/globals.scss";
import { MenuContextWrapper } from "../context/menu";
import { MainContextWrapper } from "../context/main";
import { UserContextWrapper } from "../context/user";
import { AdContextWrapper } from "../context/ad";

function MyApp({ Component, pageProps }) {
  return (
    <AdContextWrapper>
      <MainContextWrapper>
        <MenuContextWrapper>
          <UserContextWrapper>
            <Component {...pageProps} />
          </UserContextWrapper>
        </MenuContextWrapper>
      </MainContextWrapper>
    </AdContextWrapper>
  );
}

export default MyApp;
