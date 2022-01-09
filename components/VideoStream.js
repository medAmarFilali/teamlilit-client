import React, { forwardRef } from "react";
import { UserIcon } from "@heroicons/react/outline";

const VideoStream = (props, ref) => {
  return (
    <div className="rounded-lg overflow-hidden">
      {!props.stream ? (
        <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
          <div className="p-8 bg-gray-900 rounded-full ">
            <UserIcon className="w-12 h-12" />
          </div>
        </div>
      ) : (
        <video
          ref={ref}
          className="scale-x-[-1] object-cover"
          muted={props.muted}
          autoPlay
          playsInline
        />
      )}
    </div>
  );
};

export default forwardRef(VideoStream);
