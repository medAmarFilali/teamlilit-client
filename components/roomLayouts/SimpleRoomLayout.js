import { forwardRef } from "react";
import VideoStream from "../VideoStream";

const SimpleRoomLayout = (props, ref) => {
  return (
    <div className="flex w-full justify-between ">
      <VideoStream
        ref={ref.selfStream}
        muted={true}
        className="scale-x-[-1] w-full h-[100%] object-cover"
        stream={props.stream}
      />
      <VideoStream
        muted={true}
        className="scale-x-[-1] w-full h-[100%] object-cover"
        stream={props.stream}
        ref={ref.otherStream}
      />
    </div>
  );
};

export default forwardRef(SimpleRoomLayout);
