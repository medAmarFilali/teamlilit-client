import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/actions/authActions";
import { getProfile } from "../store/actions/userActions";

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

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getProfile());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Component {...pageProps} />;
};

export default App;
