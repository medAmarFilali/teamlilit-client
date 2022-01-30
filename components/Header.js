import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  AnnotationIcon,
  CogIcon,
  VideoCameraIcon,
  MenuIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { logoutUser } from "../store/actions/authActions";
import { useRouter } from "next/router";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      router.reload(window.location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex items-center w-100 justify-between container py-4">
        <div className="w-[121px] h-[32px] ">
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                width="121px"
                height="32px"
                layout="responsive"
                alt="teamlilit logo"
              />
            </a>
          </Link>
        </div>
        {auth.isAuthenticated ? (
          <>
            <div>
              <MenuIcon className="w-8 h-8 text-gray-800 md:hidden " />
            </div>
            <div className="space-x-4 items-center hidden md:flex">
              <Link href="/">
                <a className="text-gray-600">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-gray-500 hover:text-gray-600 " />
                </a>
              </Link>
              <Link href="/">
                <a className="text-gray-600">
                  <AnnotationIcon className="w-6 h-6 text-gray-500 hover:text-gray-600 " />
                </a>
              </Link>
              <Link href="/">
                <a className="text-gray-600">
                  <CogIcon className="w-6 h-6 text-gray-500 hover:text-gray-600 " />
                </a>
              </Link>
              <button onClick={handleLogout}>
                <LogoutIcon className="w-6 h-6 text-gray-500 hover:text-gray-600" />
              </button>
              <Link href="/">
                <a className="text-gray-600 rounded-full overflow-hidden">
                  <div className="relative w-10 h-10">
                    <Image src="/taxas.jpg" alt="taxas" layout="fill" />
                  </div>
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <MenuIcon className="w-8 h-8 md:hidden" />
            </div>
            <div className="space-x-4 items-center hidden md:flex ">
              <Link href="/account/login">
                <a className="text-gray-600">Login</a>
              </Link>
              <Link href="/account/signup">
                <a className="text-gray-600">
                  <div className="bg-orange-500 text-white py-2 px-4 rounded-md flex space-x-2 items-center ">
                    <VideoCameraIcon className="h-5 w-5 text-white leading-none " />
                    <p className="leading-relaxed">Start a meeting</p>
                  </div>
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
