import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  AnnotationIcon,
  CogIcon,
  VideoCameraIcon,
  MenuIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { logoutUser } from "../store/actions/authActions";
import { useRouter } from "next/router";
import { openMenu } from "../store/actions/menuActions";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      router.reload(window.location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRoom = () => {
    router.push("/room");
  };

  return (
    <div>
      <div className="flex items-center w-100 justify-between container py-4">
        <div className="w-[196px] h-[40px] ">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              width={196}
              height={40}
              alt="teamlilit logo"
              priority
            />
          </Link>
        </div>
        {auth.isAuthenticated ? (
          <>
            <button onClick={handleOpenMenu}>
              <MenuIcon className="w-8 h-8 text-gray-800 md:hidden " />
            </button>
            <div className="space-x-4 items-center hidden md:flex">
              <Link href="/account/Settings" className="text-gray-600">
                <CogIcon className="w-6 h-6 text-gray-500 hover:text-gray-600 " />
              </Link>
              <button onClick={handleLogout}>
                <LogoutIcon className="w-6 h-6 text-gray-500 hover:text-gray-600" />
              </button>
              <Link href="/" className="text-gray-600 rounded-full overflow-hidden bg-gray-200 ">
                <UserCircleIcon className="w-10 h-10 text-gray-400 hover:text-gray-600" />
              </Link>
            </div>
          </>
        ) : (
          <>
            <button onClick={handleOpenMenu}>
              <MenuIcon className="w-8 h-8 md:hidden" />
            </button>
            <div className="space-x-4 items-center hidden md:flex ">
              <Link href="/account/login" className="text-gray-600">Login</Link>
              <Link href="/account/signup" className="text-gray-600">Register</Link>
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-md flex space-x-2 items-center"
                onClick={handleRoom}
              >
                <VideoCameraIcon className="h-5 w-5 text-white leading-none " />
                <p className="leading-relaxed">Start a meeting</p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
