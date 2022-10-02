import { useRouter } from "next/router";
import Cookies from "js-cookie";

function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const router = useRouter();

      let accessToken = "";

      if (Cookies.get("access_token")) {
        accessToken = Cookies.get("access_token");
      } else {
        accessToken = localStorage.getItem("access_token");
      }

      if (!accessToken) {
        let next;
        next = router.asPath;

        router.push({
          pathname: "/account/login",
          query: { next },
        });
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
}

export default withAuth;
