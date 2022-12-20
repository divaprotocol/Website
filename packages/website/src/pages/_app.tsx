import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/Store";
import { ConnectionProvider } from "../components/ConnectionProvider";
import "../styles/globals.css";
import { Stack } from "../components/layout/Stack";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="pt-32 text-white font-sans text-opacity-80">
      <Stack
        vertical
        className="space-x-16 justify-between px-20 py-10 border-b border-white border-opacity-10"
      >
        <Image src="/DivaLogo.svg" height="136" width="136" alt="Diva Logo" />
        <Stack>
          <Stack vertical className="space-x-8">
            <span>About us</span>
            <span>Docs</span>
            <span>Token</span>
            <span>Blog</span>
          </Stack>
          <Stack vertical className="space-x-8">
            <span>Whitepaper</span>
            <span>DIVA Slide Deck</span>
            <span>Peckshield Audit</span>
          </Stack>
        </Stack>
      </Stack>
      <Stack vertical className="space-x-16 justify-between px-20 py-10">
        <span>© DIVA Finance</span>
        <Stack vertical>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </Stack>
      </Stack>
    </footer>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ConnectionProvider>
        <Component {...pageProps} />
        <Footer />
      </ConnectionProvider>
    </Provider>
  );
};

export default App;
