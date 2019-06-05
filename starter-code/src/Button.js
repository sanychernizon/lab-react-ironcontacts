import React, { Component } from 'react';

class MyButton extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.onClick(this.props.idx)
    }

    classBtn() {
        let classNameBtn = "button"

        this.props.isDanger ? classNameBtn += " is-danger" : ''
        this.props.isOutlined ? classNameBtn += " is-outlined" : ''
        this.props.isPrimary ? classNameBtn += " is-primary" : ''
        this.props.isLink ? classNameBtn += " is-link" : ''
        this.props.isWarning ? classNameBtn += " is-warning" : ''
        this.props.isInfo ? classNameBtn += " is-info" : ''

        return classNameBtn;
    }

    render() {

        return (
            <div>
                    <button className={this.classBtn()} onClick={this.handleClick}>{this.props.children}</button>
            </div>
        )
    }
}

export default MyButton;