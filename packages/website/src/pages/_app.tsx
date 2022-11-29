import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/Store";
import { ConnectionProvider } from "../components/ConnectionProvider";
import "../styles/globals.css";


const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ConnectionProvider>
        <Component {...pageProps} />
      </ConnectionProvider>
    </Provider>
  );
};

export default App;
