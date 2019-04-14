import React from 'react';

export default class Test1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <div>
        <p onClick={() => this.setState({count: this.state.count + 1})}>点我试试{this.state.count}</p>
      </div>
    )
  }
}