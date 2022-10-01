import { LinkIcon, VideoCameraIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="container h-full py-4  ">
        <div className="h-full flex items-center justify-between rounded-xl flex-wrap bg-gray-50 rounde-lg ">
          <div className="px-4 w-full md:w-1/2 md:pl-16 ">
            <div className="w-full md:w-[70%]">
              <h1 className="text-xl w-full text-center md:text-left md:font-semibold md:text-4xl">
                Reliabe and <span className="text-orange-500">secure</span>{" "}
                conferencing for everyone
              </h1>
              <p className="text-base font-light mt-4">
                Hold incredible events, share knowledge, build and grow your
                community, create opportunity
              </p>
              <div className="flex mt-4 flex-wrap flex-col ">
                <Link href="/room">
                  <a>
                    <button className="bg-orange-500 py-4 px-4 rounded-md flex space-x-2 items-center text-white">
                      <VideoCameraIcon className="h-5 w-5" />
                      <p>New Meeting</p>
                    </button>
                  </a>
                </Link>
                <div className="divide-y mt-4">
                  <hr />
                </div>
                <div className="lg:flex lg:space-x-2 items-center">
                  <input
                    type="text"
                    placeholder="Meeting ID"
                    className="border focus:outline-none p-4 rounded-md mt-4 w-full lg:w-1/2"
                  />
                  <Link href="/waitingRoom">
                    <a className="mt-4 w-full lg:w-1/2">
                      <button className="btn-contained-left">
                        <LinkIcon className="h-5 w-5" />
                        <p>Join Meeting</p>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <Image
                src="/introimage.png"
                alt="responsive"
                width="600px"
                height="530px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
