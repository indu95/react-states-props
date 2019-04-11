import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state = {
    userName: "super indu"
  };

  userNameChangeHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangeHandler}
          name={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="This is hardcoded username- ddd" />
      </div>
    );
  }
}

export default App;
