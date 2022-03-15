import React from "react";

function Error({error}) {
  return (
     <div className="alert alert-danger" role="alert" style={{width: "420px" ,margin:"120px"}}>
        <h2>{error}</h2>
      </div>
  );
}

export default Error;
