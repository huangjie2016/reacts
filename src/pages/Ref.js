import React from 'react';

export default class Ref extends React.Component{
  constructor(props){
    super(props);
    this.ref3 = React.createRef();
  }

  componentDidMount(){
    console.log(this.refs.input);
    console.log(this.ref2);
    console.log(this.ref3);
    this.refs.input.value = 'ref1';
    this.ref2.value = 'ref2';
    this.ref3.current.value = 'ref3';
  }

  render(){
    return (
      <div>
        {/*ref1*/}
        <input ref="input" />

        {/*ref2*/}
        <input ref={(input) => {this.ref2 = input}} />

        {/*ref3*/}
        <input ref={this.ref3} />
      </div>
    )
  }
}