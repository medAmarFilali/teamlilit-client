import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/actions/authActions";

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => await dispatch(authenticateUser()))();
  }, []);

  return <Component {...pageProps} />;
};

export default App;
