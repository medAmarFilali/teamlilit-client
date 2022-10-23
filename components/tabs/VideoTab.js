import { produce } from "immer";

const VideoTab = ({ videoDevices, setVideoOptions, videoOptions }) => {
  const handleDeviceChange = (e) => {
    setVideoOptions(
      produce((draft) => {
        draft.video.deviceId = e.target.value;
      })
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="video-device" className="select-label">
          Camera
        </label>
        <select
          id="video-device"
          className="select-input"
          onChange={handleDeviceChange}
          value={videoOptions?.video?.deviceId}
        >
          {videoDevices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoTab;
