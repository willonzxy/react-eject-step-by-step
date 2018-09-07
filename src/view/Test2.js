/*
 * @Author: willon 
 * @Date: 2018-09-06 14:39:11 
 * @Last Modified by: willon tel:13189679384
 * @Last Modified time: 2018-09-07 14:32:49
 */
import React, { Component } from 'react';
class Test extends Component {
  constructor(){
      super(...arguments)
      this.state = {
          num:this.props.num
      }
  }
  add = () => {
    let num = this.state.num
    this.setState({
      num:++num
    })
  }
  render() {
    return (
      <div class="box-center">
        <h1> Test2 </h1>
        <h2>{this.state.num}</h2>
        <br/>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

Test.defaultProps = {
  num : 0
}

export default Test;
