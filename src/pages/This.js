import React from 'react';

export default class This extends React.Component{
    constructor(){
        super();
        this.state = {
            value: ''
        };

        this.changeValue1 = this.changeValue1.bind(this);
    }

    changeValue1(){
        this.setState({
            value: 'changeValue1'
        });
    }

    changeValue2 = () => {
        this.setState({
            value: 'changeValue2'
        });
    };

    changeValue3(id){
        this.setState({
            value: 'changeValue3'
        });
        this.props.history.push(`/twoPage/${id}`)
    }


    render(){
        return (
            <div>
                <p onClick={this.changeValue1}>this1</p>
                <p onClick={this.changeValue2}>this2</p>
                <p onClick={this.changeValue3.bind(this, 666)}>this3</p>
                <p>{this.state.value}</p>
            </div>
        )
    }
}