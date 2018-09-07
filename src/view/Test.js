/*
 * @Author: willon 
 * @Date: 2018-09-06 14:39:11 
 * @Last Modified by: willon tel:13189679384
 * @Last Modified time: 2018-09-07 14:32:37
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入约束类型
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
        <h1>Test1</h1>
        <h2>{this.state.num}</h2>
        <br/>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

Test.propTypes = {
  num:PropTypes.number
}

Test.defaultProps = {
  num:0
}

export default Test;
