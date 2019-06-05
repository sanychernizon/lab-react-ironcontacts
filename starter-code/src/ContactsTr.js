import React, { Component } from 'react';
import MyButton from './Button';

class ContactsTr extends Component {
  
  render() {
    console.log(this.props.delete)

    return(
          <tr>
            <td><img src={this.props.contact.pictureUrl} /></td>
            <td>{this.props.contact.name}</td>
            <td>{this.props.contact.popularity.toFixed(2)}</td>
            <td><MyButton isDanger isOutlined idx={this.props.idx} onClick={this.props.delete}>Delete</MyButton></td>
          </tr>
        )
  }

}

export default ContactsTr;
