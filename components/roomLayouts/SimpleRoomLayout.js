import { forwardRef, useEffect } from "react";
import { ContextProvider } from "../../context/Context";
import VideoStream from "../VideoStream";
import { UserIcon } from "@heroicons/react/outline";

const SimpleRoomLayout = (props, ref) => {
  const otherStream = ref.otherStream?.current?.srcObject;

  return (
    <div className="flex w-full flex-col md:flex-row justify-around items-center h-[100%]">
      <div className={`w-[90%] ${otherStream ? "md:w-[42%]" : "md:w-[42%]"}`}>
        {props.videoOptions.video.enabled ? (
          <VideoStream
            ref={ref.selfStream}
            muted={true}
            className="w-[100%] h-[100%]"
            stream={props.stream}
            name="self"
          />
        ) : (
          <div className="flex justify-center items-center">
            <div className="p-8 bg-gray-900 rounded-full ">
              <UserIcon className="w-12 h-12" />
            </div>
          </div>
        )}
      </div>
      {props.callStream && (
        <>
          <div className="w-[90%] md:w-[42%] flex flex-col space-y-10 ">
            <VideoStream
              muted={true}
              className="w-[30%] h-[10%]"
              stream={props.stream}
              ref={ref.otherStream}
              name="other"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default forwardRef(SimpleRoomLayout);
