import React, { Component } from "react";

class Counter extends React.Component {
  btnStyle = {
    marginLeft: "10px",
    marginRight: "10px",
  };

  render() {
    const { id, counter, handleIncrment, handleDecrment, handleRemove } =
      this.props;
    return (
      <>
        <div style={{ marginTop: "5px" }}>
          <button
            className="btn btn-primary"
            disabled={counter === 0}
            style={this.btnStyle}
            onClick={() => handleDecrment(id)}
          >
            <i className="glyphicon glyphicon-minus-sign">-</i>
          </button>
          {counter}
          <button
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => handleIncrment(id)}
          >
            <i className="glyphicon glyphicon-plus-sign">+</i>
          </button>
          <button
            className="btn btn-danger"
            style={this.btnStyle}
            onClick={() => handleRemove(id)}
          >
            <i className="glyphicon glyphicon-plus-sign">Remove</i>
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
