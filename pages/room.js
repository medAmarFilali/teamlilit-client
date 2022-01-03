import { useState, useEffect, useRef } from "react";
import {
  DuplicateIcon,
  InformationCircleIcon,
  MicrophoneIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserAddIcon,
  UserIcon,
  UsersIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/outline";

const Room = () => {
  const [stream, setStream] = useState("");
  const [showLinkDialog, setShowLinkDialog] = useState(true);

  const selfStream = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        selfStream.current.srcObject = stream;
      });
  }, []);
  return (
    <div className="bg-gray-800 w-screen h-screen text-white pt-4 px-4 ">
      <div className="rounded-lg overflow-hidden w-[80%] h-[90%] mx-auto  ">
        {!stream ? (
          <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
            <div className="p-8 bg-gray-900 rounded-full ">
              <UserIcon className="w-12 h-12" />
            </div>
          </div>
        ) : (
          <>
            <video
              playsInline
              muted
              ref={selfStream}
              className="scale-x-[-1] w-full h-[100%] object-cover"
              autoPlay
            />
          </>
        )}
      </div>
      <div className="h-[10%] flex items-center justify-between">
        <div className="flex space-x-4 w-64">
          <h1 className="text-base">You | ess-ykso-jfy</h1>
        </div>
        <div className="flex space-x-2">
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <MicrophoneIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <VideoCameraIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <PresentationChartLineIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-red-600 p-3 rotate-[135deg]  hover:bg-red-700 ">
            <PhoneIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex space-x-4 w-64 justify-end ">
          <button>
            <InformationCircleIcon className="w-6 h-6" />
          </button>
          <button>
            <UsersIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-12 left-12 ${
          showLinkDialog ? "block" : "hidden"
        } `}
      >
        <div className="w-[350px] bg-white rounded-lg shadow-2xl px-6 pt-6 pb-10 text-gray-900 ">
          <div className="flex justify-between items-center ">
            <h1 className="text-lg">Your meeting is ready</h1>
            <button onClick={() => setShowLinkDialog(false)}>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="divide-y-2 mt-4">
            <hr />
          </div>
          <div>
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-orange-600 ">
              <UserAddIcon className="h-4 w-4" />
              <p>Add People</p>
            </button>
            <p className="text-sm mt-4 font-light ">
              Share this link with people that you want in the meeting
            </p>
            <div className="flex items-center space-x-2 my-4 w-full justify-between ">
              <input
                type="text"
                disabled
                value="https://teamlilit.com/ess-ykso-jfy"
                className="p-4 rounded-lg flex-1 text-xs "
              />
              <button className="p-4 bg-gray-50 rounded-lg ">
                <DuplicateIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-8 h-8" />
              <p className="text-xs">
                People who use this meeting link must get your permission before
                they can join
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
