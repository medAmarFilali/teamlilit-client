import { useState, useContext, useEffect } from "react";
import {
  ArrowSmLeftIcon,
  CogIcon,
  DuplicateIcon,
  InformationCircleIcon,
  MicrophoneIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserAddIcon,
  UsersIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/outline";
import { PhoneIncomingIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import SimpleRoomLayout from "../components/roomLayouts/SimpleRoomLayout";
import { SocketContext } from "../context/Context";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import withAuth from "../hoc/widthAuth";
import { produce } from "immer";
import SettingsDialog from "../components/SettingsDialog";

const Room = () => {
  const {
    me,
    callAccepted,
    callStream,
    streamRef,
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
  const [settingsDialog, setSettingsDialog] = useState(false);
  const [videoDevices, setVideoDevices] = useState([]);
  const [videoOptions, setVideoOptions] = useState({
    audio: true,
    video: {
      enabled: true,
      facingMode: "user",
      deviceId: "",
    },
  });

  const router = useRouter();

  const { id: roomId } = router.query ? router.query : "";

  const audioToggle = () => {
    setVideoOptions(
      produce((draft) => {
        draft.audio = !draft.audio;
      })
    );
  };

  const videoToggle = () => {
    setVideoOptions(
      produce((draft) => {
        draft.video.enabled = !draft.video.enabled;
      })
    );
  };

  const handleBackButton = () => {
    router.push("/");
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(videoOptions).then((stream) => {
      if (videoOptions.video.enabled) {
        setStream(stream);
        streamRef.selfStream.current.srcObject = stream;
      }
    });

    (async () => {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const availableVideo = allDevices.filter(
        (device) => device.kind === "videoinput"
      );

      setVideoDevices(availableVideo);
    })();
  }, [videoOptions]);

  useEffect(() => {
    if (callStream) {
      streamRef.otherStream.current.srcObject = callStream;
    }
  }, [callStream]);

  const roomLink = roomId
    ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/waitingRoom?room=${roomId}`
    : `${process.env.NEXT_PUBLIC_CLIENT_URL}/waitingRoom?room=${me}`;

  return (
    <div className="bg-gray-800 w-screen h-screen text-white pt-4 px-4 ">
      <div className="w-[100%] h-[85%]  md:h-[90%]">
        <SimpleRoomLayout
          ref={streamRef}
          stream={stream}
          callStream={callStream}
          videoOptions={videoOptions}
          me={me}
        />
      </div>
      <div className="h-[10%] flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <div className="hidden md:flex space-x-4 w-64">
          <h1 className="text-base">You</h1>
        </div>
        <div className="flex space-x-2">
          <button
            className={`rounded-full  ${
              videoOptions.audio
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-red-600 hover:bg-red-700"
            } p-3 `}
            onClick={audioToggle}
          >
            <MicrophoneIcon className="w-6 h-6" />
          </button>
          <button
            className={`rounded-full  ${
              videoOptions.video.enabled
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-red-600 hover:bg-red-700"
            } p-3`}
            onClick={videoToggle}
          >
            <VideoCameraIcon className="w-6 h-6" />
          </button>
          {/* <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700 ">
            <PresentationChartLineIcon className="w-6 h-6" />
          </button> */}
          {/* <button className="rounded-full bg-gray-600 p-3 hover:bg-gray-700">
            <TemplateIcon className="w-6 h-6" />
          </button> */}
          <button
            className="rounded-full bg-gray-600 p-3 hover:bg-gray-700"
            onClick={() =>
              setSettingsDialog((prevState) => (settingsDialog = !prevState))
            }
          >
            <CogIcon className="w-6 h-6" />
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
        className={`absolute top-2 left-2 md:top-12 md:left-12 ${
          showLinkDialog ? "block" : "hidden"
        } `}
      >
        <motion.div className="w-full md:w-[350px] bg-white rounded-lg shadow-2xl px-6 pt-6 pb-4 md:pb-10 text-gray-900">
          <div className="flex justify-between items-center ">
            <button onClick={handleBackButton}>
              <ArrowSmLeftIcon className="h-6 w-6" />
            </button>
            <h1 className="text-sm md:text-lg">Your meeting is ready</h1>
            <button onClick={() => setShowLinkDialog(false)}>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="divide-y-2 mt-2 md:mt-4">
            <hr />
          </div>
          <div>
            <button className="hidden md:flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-orange-600 ">
              <UserAddIcon className="h-4 w-4" />
              <p>Add People</p>
            </button>
            <p className="md:block hidden text-sm mt-4 font-light ">
              Share this link with people that you want in the meeting
            </p>
            <div className="flex items-center space-x-2 my-4 w-full justify-between ">
              <input
                type="text"
                disabled
                value={roomLink}
                className="p-4 rounded-lg flex-1 text-xs "
              />
              <CopyToClipboard
                text={roomLink}
                onCopy={() => setCopyId({ copied: true })}
                className="p-4 bg-gray-50 rounded-lg w-12 h-12 cursor-pointer "
              >
                <DuplicateIcon className="w-12 h-12" />
              </CopyToClipboard>
            </div>
            <div className="hidden md:flex items-center space-x-2">
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
      {settingsDialog && (
        <SettingsDialog
          setSettingsDialog={setSettingsDialog}
          videoOptions={videoOptions}
          setVideoOptions={setVideoOptions}
          videoDevices={videoDevices}
        />
      )}
    </div>
  );
};

export default withAuth(Room);
