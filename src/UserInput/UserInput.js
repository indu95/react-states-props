import React from "react";

const userInput = props => {
  const style = {
    "text-align": "left"
  };
  return (
    <div style={{ width: "60%", margin: "30px" }}>
      <label>Type your name here:</label>
      <input type="text" onChange={props.changed} value={props.name} />
      <h4 style={style}>
        This example shows two components one for input box and other is for
        output name in a box.
        <br />
        Two way binding is achieved by using states and props, as we type the
        name in input box the name is displayed in the output box
      </h4>
    </div>
  );
};

export default userInput;
