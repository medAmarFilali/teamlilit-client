import { useDispatch } from "react-redux";
import { VideoCameraIcon, XIcon } from "@heroicons/react/outline";
import { closeMenu } from "../../store/actions/menuActions";
import Link from "next/link";

const MobileMenu = () => {
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
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
          <Link href="/account/login">
            <a className="p-2">
              <h3>Login</h3>
            </a>
          </Link>
          <Link href="/account/signup">
            <a className="p-2">
              <h3>Register</h3>
            </a>
          </Link>
          <button className="btn-contained mt-4">
            <VideoCameraIcon className="h-5 w-5" />
            <p>Start new meating</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
