import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-lg p-2 rounded-lg">
      <img
        className="h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="userImg"
      />
      <span className="font-semibold px-1">{name}</span>
      <span className="px-1">{message}</span>
    </div>
  );
};

export default ChatMessage;
