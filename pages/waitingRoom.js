import { useEffect, useState, useRef, useContext } from "react";
import Header from "../components/Header";
import { io } from "socket.io-client";
import { SocketContext } from "../context/Context";
import { useRouter } from "next/router";
import withAuth from "../hoc/widthAuth";

const WaitingRoom = () => {
  const { streamRef, setStream, callUser, callAccepted } =
    useContext(SocketContext);

  const router = useRouter();

  const { room } = router.query;

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        streamRef.selfStream.current.srcObject = stream;
      });
  }, [callAccepted]);

  const handleCallUser = () => {
    callUser(room);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <div className="rounded-lg overflow-hidden w-[700px] h-[400px] ">
          <video
            playsInline
            autoPlay
            muted
            ref={streamRef.selfStream}
            className="scale-x-[-1] w-full h-full object-cover "
          />
        </div>
        <div className="w-[350px] flex items-center flex-col ">
          <h1 className="text-2xl">Ready to join ?</h1>
          <p>No one else is here</p>
          <button
            onClick={handleCallUser}
            className="bg-orange-500 py-3 px-4 mt-4 rounded-md flex space-x-2 items-center text-white justify-center hover:bg-orange-600"
          >
            <p>Join Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(WaitingRoom);
