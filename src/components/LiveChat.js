import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText() + " 🚀",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[475px] py-2 px-2 mx-2 border border-gray-300 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={{ i }} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full py-2 ml-2 border border-gray-300 rounded-lg flex items-center overflow-x-hidden"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON SUBMIT", liveMessage);
          dispatch(addMessage({
            name:"Ganesh Rasal",
            message: liveMessage,
          }))
          setLiveMessage("");
        }}
      >
        <input
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
          className="w-72 border border-gray-300 px-4 mx-4 py-2 rounded-full"
          type="text"
          placeholder="chat..."
        />
        <button onClick={() =>setLiveMessage(liveMessage)} className="bg-gray-200 text-2xl px-4 mx-1 py-1 rounded-full hover:bg-slate-400">
          ➤
        </button>
      </form>
    </>
  );
};

export default LiveChat;
