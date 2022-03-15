import React from "react";

function Loading() {
  return (
      <div className="text-center">
        <div
        className="spinner-border"
        role="status"
        style={{ height: "80px", width: "80px" ,margin:"120px"}}
      ></div>
      </div>
  );
}

export default Loading;
