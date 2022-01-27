import { useState, useContext, useEffect } from "react";
import {
  DuplicateIcon,
  InformationCircleIcon,
  MicrophoneIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  TemplateIcon,
  UserAddIcon,
  UsersIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/outline";
import { PhoneIncomingIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { io } from "socket.io-client";
import SimpleRoomLayout from "../components/roomLayouts/SimpleRoomLayout";
import { SocketContext } from "../context/Context";
import { CopyToClipboard } from "react-copy-to-clipboard";

const socket = io(process.env.NEXT_PUBLIC_HOST_SERVER);

const Room = () => {
  const {
    name,
    me,
    callAccepted,
    streamRef,
    callEnded,
    stream,
    setStream,
    call,
    leaveCall,
    answerCall,
  } = useContext(SocketContext);
  const [callDialog, setCallDialog] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(true);
  const [copyId, setCopyId] = useState({
    copied: false,
  });

  const showCall = () => {
    setCallDialog(!callDialog);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        streamRef.selfStream.current.srcObject = stream;
      });
  }, []);

  return (
    <div className="bg-gray-800 w-screen h-screen text-white pt-4 px-4 ">
      <div className="w-[100%] h-[85%]  md:h-[90%]">
        <SimpleRoomLayout ref={streamRef} stream={stream} me={me} />
      </div>
      <div className="h-[10%] flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <div className="hidden md:flex space-x-4 w-64">
          <h1 className="text-base">You | ess-ykso-jfy</h1>
        </div>
        <div className="flex space-x-2">
          <button
            className="rounded-full bg-gray-600 p-3 hover:bg-gray-700"
            onClick={showCall}
          >
            <MicrophoneIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <VideoCameraIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <PresentationChartLineIcon className="w-6 h-6" />
          </button>
          <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700">
            <TemplateIcon className="w-6 h-6" />
          </button>
          <button
            className="rounded-full bg-red-600 p-3 rotate-[135deg]  hover:bg-red-700"
            onClick={leaveCall}
          >
            <PhoneIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:flex md:space-x-4 md:w-64 md:justify-end ">
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
        <motion.div className="w-[350px] bg-white rounded-lg shadow-2xl px-6 pt-6 pb-10 text-gray-900">
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
                value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/waitingRoom?room=${me}`}
                className="p-4 rounded-lg flex-1 text-xs "
              />
              <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_CLIENT_URL}/waitingRoom?room=${me}`}
                onCopy={() => setCopyId({ copied: true })}
                className="p-4 bg-gray-50 rounded-lg w-12 h-12 cursor-pointer "
              >
                <DuplicateIcon className="w-12 h-12" />
              </CopyToClipboard>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-8 h-8" />
              <p className="text-xs">
                People who use this meeting link must get your permission before
                they can join
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={call.isReceivingCall && !callAccepted ? { y: 140 } : { y: 0 }}
        className="rounded-lg bg-white p-4 absolute top-[-120px] right-0 md:right-5 text-gray-900 flex justify-center items-center space-x-6"
      >
        <div className="flex space-x-2 items-center">
          <PhoneIncomingIcon className="text-green-600 w-6 h-6" />
          <h1 className="leading-none">Midou is Calling</h1>
        </div>
        <div className="flex justify-end space-x-4 ">
          <button onClick={() => setCallDialog(false)}>
            <p className="text-sm text-red-600 ">Decline</p>
          </button>
          <button
            className="bg-green-600 py-2 px-4 rounded-md"
            onClick={() => answerCall()}
          >
            <p className="text-sm text-white">Answer</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Room;
