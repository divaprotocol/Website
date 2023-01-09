import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/Store";
import { ConnectionProvider } from "../components/ConnectionProvider";
import "../styles/globals.css";
import { Footer } from "../components/pageLayout/Footer";


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
