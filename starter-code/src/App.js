import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTr from './ContactsTr';
import MyButton from './Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: this.sliceContacts(),
      contactsAll: contacts,
    }

    this.addRandom = this.addRandom.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  sliceContacts() {
    return contacts.slice(0, 5);
  }

  addRandom() {
    var n = Math.floor(Math.random() * this.state.contactsAll.length);
    let newContacts = [...this.state.contacts];
    newContacts.push(this.state.contactsAll[n])
    this.setState({ contacts: newContacts })
  }

  sortByName() {
    let newContacts = [...this.state.contacts];
    newContacts.sort(function (a, b) {
      return a.name > b.name ? 1 : -1
    })
    this.setState({ contacts: newContacts })
  }

  sortByPopularity() {
    let newContacts = [...this.state.contacts];
    newContacts.sort(function (a, b) {
      return a.popularity > b.popularity ? -1 : 1
    })
    this.setState({ contacts: newContacts })
  }

  deleteItem(idx) {
    let newContacts = [...this.state.contacts];
    newContacts.splice(idx, 1);
    this.setState({ contacts: newContacts })
  }

  render() {
    // console.log(this.state.contacts)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="button-group">
          <MyButton isLink onClick={this.addRandom}>Add Random</MyButton>
          <MyButton isInfo onClick={this.sortByName}>Sort By Name</MyButton>
          <MyButton isInfo onClick={this.sortByPopularity}>Sort By Popularity</MyButton>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((item, idx) => {
                return <ContactsTr key={idx} idx={idx} contact={item} delete={this.deleteItem} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
