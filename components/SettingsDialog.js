import { VideoCameraIcon, VolumeUpIcon, XIcon } from "@heroicons/react/outline";
import VideoTab from "./tabs/VideoTab";

const SettingsDialog = ({
  setSettingsDialog,
  videoDevices,
  setVideoOptions,
  videoOptions,
}) => {
  return (
    <div className="absolute top-0 left-0 flex w-full h-screen justify-center items-center text-gray-800 bg-gray-800/75  ">
      <div className="w-[50%] h-[60%] bg-white rounded-lg shadow-xl p-4 flex flex-col">
        <div className="pb-4 flex justify-between">
          <h3 className="text-2xl">Settings</h3>
          <button
            className="rounded-full bg-red-600 hover:bg-red-700 p-2"
            onClick={() => setSettingsDialog(false)}
          >
            <XIcon className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="flex justify-between flex-1">
          <div className="w-[30%] bg-gray-50 rounded-lg flex flex-col p-4 space-y-3 ">
            <button className="flex justify-start items-center space-x-2 p-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white ">
              <VideoCameraIcon className="h-4 w-4" />
              <p>Video</p>
            </button>
            <button className="flex justify-start items-center space-x-2 p-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white ">
              <VolumeUpIcon className="h-4 w-4" />
              <p>Audio</p>
            </button>
          </div>
          <div className="p-4 flex-1 ">
            <VideoTab
              setVideoOptions={setVideoOptions}
              videoDevices={videoDevices}
              videoOptions={videoOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialog;
