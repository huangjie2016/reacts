import React from 'react';

export default class Mount extends React.Component {

    state = {
        value: ''
    };

    static getDerivedStateFromProps(props, state){
        if(props.value || state.value===''){
            console.log('getDerivedStateFromProps');
            return {
                value: 'getDerivedStateFromProps'
            }
        }
        return true;
    }

    shouldComponentUpdate(props, state){
        console.log('shouldComponentUpdate')
        if(state.value === 'componentDidMount'){
            console.log('shouldComponentUpdate')
            this.setState({
                value: 'shouldComponentUpdate'
            })
        }
        return true
    }

    componentDidMount(){
        console.log('componentDidMount');
        if(this.state.value === 'getDerivedStateFromProps'){
            this.setState({
                value: 'componentDidMount'
            })
        }
    }

    render(){
        console.log('render');
        return(
            <div>我是生命周期组件{this.props.value}{this.state.value}</div>
        )
    }
}