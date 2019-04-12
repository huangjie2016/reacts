import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            child: 'child',
            toMountValue: ''
        }
    }

    forFatherValue = () => {
        this.props.getChildValue(this.state.child)
    };

    render(){
        return (
            <div>
                <p>我是子组件</p>
                <p>{this.props.value}</p>
                <p onClick={this.forFatherValue}>点我给父组件传递参数</p>
            </div>
        )
    }
}