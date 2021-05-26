import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">Phone Directory</div>

        <button>Add</button>

        <div>
          <span>Name</span>
          <br />
          <span> Phone</span>
        </div> */}
        <lable htmlFor="name">Name:</lable>
       <input  id="text" type ="text" placeholder="Type here" defaultValue="Tushar"></input>
      </div>
    );
  }
}

export default App;
