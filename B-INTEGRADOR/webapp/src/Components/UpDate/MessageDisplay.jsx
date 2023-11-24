import React from "react";

function MessageDisplay({ message, type }) {
  return (
    <div className={`message ${type}`}>
      {message}
    </div>
  );
}

export default MessageDisplay;
