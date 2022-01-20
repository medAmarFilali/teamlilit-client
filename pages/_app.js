import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../components/App";
import { ContextProvider } from "../context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextProvider>
        <App Component={Component} pageProps={pageProps} />
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
