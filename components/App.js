import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/actions/authActions";

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(authenticateUser());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  return <Component {...pageProps} />;
};

export default App;
