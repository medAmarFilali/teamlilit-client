import { useDispatch, useSelector } from "react-redux";
import { VideoCameraIcon, XIcon } from "@heroicons/react/outline";
import { closeMenu } from "../../store/actions/menuActions";
import { logoutUser } from "../../store/actions/authActions";
import { useRouter } from "next/router";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  const handleLink = (link) => {
    dispatch(closeMenu());
    router.push(link);
  };

  const handleLogout = async () => {
    try {
      dispatch(closeMenu());
      await dispatch(logoutUser());
      router.reload(window.location.pathname);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-white ">
      <div className="flex h-[62px] items-center justify-end p-4 ">
        <button
          className="bg-white hover:bg-gray-100 rounded-full p-1 hover:outline-none focus:outline-none"
          onClick={handleCloseMenu}
        >
          <XIcon className="h-10 w-10 text-gray-500" />
        </button>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-128px)] ">
        <div className="flex flex-col items-center">
          {auth.isAuthenticated ? (
            <>
              <button
                className="p-2"
                onClick={() => handleLink("/account/login")}
              >
                Account
              </button>
              <button
                className="p-2"
                onClick={() => handleLink("/account/login")}
              >
                Settings
              </button>
              <button
                className="btn-contained-gray mt-4"
                onClick={handleLogout}
              >
                <p>Logout</p>
              </button>
            </>
          ) : (
            <>
              <button
                className="p-2"
                onClick={() => handleLink("/account/login")}
              >
                <h3>Login</h3>
              </button>
              <button
                className="p-2"
                onClick={() => handleLink("/account/signup")}
              >
                <h3>Register</h3>
              </button>
              <button className="btn-contained mt-4">
                <VideoCameraIcon className="h-5 w-5" />
                <p>Start new meating</p>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
