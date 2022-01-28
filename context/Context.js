import React, { createContext, useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io(process.env.NEXT_PUBLIC_HOST_SERVER, {
  // Send auth token on connection, you will need to DI the Auth service above
  // 'query': 'token=' + Auth.getToken()
  // path: "/socket.io",
  // transports: ["polling"],
  // enabledTransports: ["ws", "wss"],
  // secure: true,
});

const ContextProvider = ({ children }) => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState("");
  const [callStream, setCallStream] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const router = useRouter();

  const streamRef = {
    selfStream: useRef(),
    otherStream: useRef(),
    connectionRef: useRef(),
  };

  useEffect(() => {
    socket.on("me", (id) => setMe(id));

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      // streamRef.otherStream.current.srcObject = currentStream;
      setCallStream(currentStream);
    });

    peer.signal(call.signal);

    streamRef.connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      setCallStream(currentStream);
      // streamRef.otherStream.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      router.push("/room");

      peer.signal(signal);
    });

    streamRef.connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        streamRef,
        callStream,
        stream,
        setStream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, ContextProvider };
