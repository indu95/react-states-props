import React from "react";

const userOutput = props => {
  return (
    <div className="output_para">
      <p>User Name is</p>
      <p>{props.userName}</p>
    </div>
  );
};

export default userOutput;
