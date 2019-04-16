import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state = {
    userName: "super indu",
    showUser: false
  };

  userNameChangeHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };
  toggleUser = evt => {
    this.setState({
      showUser: !this.state.showUser
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangeHandler}
          name={this.state.userName}
        />
        <div className="col-md-2">
          {" "}
          <button
            className="btn btn-warning"
            style={{}}
            onClick={this.toggleUser}
          >
            Toggle Users
          </button>
        </div>

        {this.state.showUser ? (
          <div>
            <UserOutput userName={this.state.userName} />
            <UserOutput userName={this.state.userName} />
            <UserOutput userName="This is hardcoded username- ddd" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
