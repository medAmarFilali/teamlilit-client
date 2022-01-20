import { forwardRef } from "react";
import VideoStream from "../VideoStream";

const SimpleRoomLayout = (props, ref) => {
  console.log("This is the stream ref", props.streamRef);
  return (
    <div className="flex w-full flex-col md:flex-row justify-around items-center h-[100%]">
      <div className="w-[90%] md:w-[42%]">
        <VideoStream
          ref={ref.selfStream}
          muted={true}
          className="w-[100%] h-[100%]"
          stream={props.stream}
        />
      </div>
      <div className="w-[90%] md:w-[42%] flex flex-col space-y-10 ">
        <VideoStream
          muted={true}
          className="w-[30%] h-[10%]"
          stream={props.stream}
          ref={ref.otherStream}
        />
      </div>
    </div>
  );
};

export default forwardRef(SimpleRoomLayout);
