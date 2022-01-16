import react from "react";
import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends React.Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
    ],
  };
  handleDecrment = (id) => {
    const counters = [...this.state.counters];
    const counter = counters.find((counter) => counter.id === id);
    counter.value -= 1;
    this.setState({ counters });
  };

  handleIncrment = (id) => {
    const counters = [...this.state.counters];
    const counter = counters.find((counter) => counter.id === id);
    counter.value += 1;
    this.setState({ counter: counters });
  };
  handleRemove = (id) => {
    const counters = [...this.state.counters];
    const updateCounters = counters.filter((counter) => counter.id !== id);
    this.setState({ counters: updateCounters });
  };

  showCounter = () => {
    let count = 0;
    this.state.counters.forEach((counter) => {
      if (counter.value > 0) count++;
    });
    return count;
  };
  cartStyle = {
      color:'red',
      fontSize:'30px',
      paddingLeft:'10px'
  }

  render() {
    return (
      <>
        <div><i className="fa fa-shopping-cart" style={this.cartStyle}></i> {this.showCounter()}</div>
        {this.state.counters.map((value, index) => {
          return (
            <react.Fragment key={value.id}>
              <Counter
                id={value.id}
                counter={value.value}
                handleDecrment={this.handleDecrment}
                handleIncrment={this.handleIncrment}
                handleRemove={this.handleRemove}
              />
              <hr />
            </react.Fragment>
          );
        })}
      </>
    );
  }
}

export default Counters;
