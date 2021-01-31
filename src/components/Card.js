import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, city, country } = this.props.item;
    return (
      <div className="card">
        <h4>
          Name : <span>{name}</span>
        </h4>
        <h4>
          City : <span>{city}</span>
        </h4>
        <h4>
          Country : <span>{country}</span>
        </h4>
      </div>
    );
  }
}

export default Card;
