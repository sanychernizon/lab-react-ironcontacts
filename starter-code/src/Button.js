import React, { Component } from 'react';

class MyButton extends Component {
    
    constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.onClick(this.props.idx)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.children}</button>
        )
    }
}

export default MyButton;