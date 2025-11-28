import React, { Component } from 'react'

export class Counter extends Component {

  state = {
    count: 0
  };

  increment = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div className='d-flex counter-sec col-md-12 contersec px-2'>
        <button type="button" className="counter-btn" onClick={this.decrement}>
          <i className="fa fa-caret-down"></i>
        </button>

        <h3>{this.state.count}</h3>

        <button type="button" className="counter-btn" onClick={this.increment}>
          <i className="fa fa-caret-up"></i>
        </button>
      </div>
    )
  }
}

export default Counter
