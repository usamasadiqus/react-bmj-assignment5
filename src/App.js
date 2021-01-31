import React, { Component } from "react";
import { data } from "./components/Data";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div className="container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        ;
      </div>
    );
  }
}

export default App;
