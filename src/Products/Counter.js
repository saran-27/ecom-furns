import React, { Component } from 'react'

export class Counter extends Component {

  state = {
     count:0
  };

  increment=()=>{
    if(this.state.count<10){
        this.setState({ count:this.state.count +1});
    }
  }

  decrement=()=>{
    if(this.state.count>0){
        this.setState({count:this.state.count -1})
    }
  }

  render() {
    return (
      <div className='d-flex counter-sec col-md-12 contersec px-2'>
        <a  href="javascript:void(0)" onClick={this.decrement}><i class="fa fa-caret-down"></i></a>
        <h3>{this.state.count}</h3>
        <a  href="javascript:void(0)" onClick={this.increment}><i class="fa fa-caret-up"></i></a>
      </div>
    )
  }
}

export default Counter