import { useRouter } from "next/router";
import Cookies from "js-cookie";

function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const router = useRouter();

      const accessToken = Cookies.get("access_token");

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
