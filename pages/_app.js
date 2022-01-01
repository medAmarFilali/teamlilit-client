import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../components/App";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp;
