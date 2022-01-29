import { useRouter } from "next/router";
import { useEffect } from "react";
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const router = useRouter();

      let accessToken = localStorage.getItem("access_token");

      console.log("This is the access token", accessToken);

      if (!accessToken) {
        router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
