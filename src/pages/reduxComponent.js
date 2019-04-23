import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart, updateCart, deleteCart }  from '../redux/action/cartAction';


const mapStateToProps = (state) => {
    return {
        cart: state.CartReducers.cart
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (...args) => dispatch(addCart(...args)),
        updateCart: (...args) => dispatch(updateCart(...args)),
        deleteCart: (...args) => dispatch(deleteCart(...args))
    }
};

class ReduxComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    add = () => {
        const {count} = this.state;
        const newCount = count+1;
        this.props.addCart('a'+ newCount, 2, 500, newCount);
        this.setState({
            count: newCount
        })
    };

    update = (id) => {
        const {count} = this.state;
        this.props.updateCart('b' + count, 3, 900, id)
    };

    delete = (id) => {
        this.props.deleteCart(id)
    };

    render() {
        return (
            <div style={{width:500, textAlign:'center', margin: '30px auto'}}>
                {
                    this.props.cart && this.props.cart.map((el, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {el.name} => {el.num} => {el.weight}
                                    <button onClick={this.update.bind(this, el.id)}>更新</button>
                                    <button onClick={this.delete.bind(this, el.id)}>删除</button>
                                </p>
                            </div>
                        )
                    })
                }
                <button onClick={this.add}>添加</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxComponent);
