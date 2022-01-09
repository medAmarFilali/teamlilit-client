import React, { forwardRef } from "react";
import { UserIcon } from "@heroicons/react/outline";

const VideoStream = (props, ref) => {
  return (
    <>
      {!props.stream ? (
        <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
          <div className="p-8 bg-gray-900 rounded-full ">
            <UserIcon className="w-12 h-12" />
          </div>
        </div>
      ) : (
        <video
          ref={ref}
          className={props.className}
          muted={props.muted}
          autoPlay
          playsInline
        />
      )}
    </>
  );
};

export default forwardRef(VideoStream);
