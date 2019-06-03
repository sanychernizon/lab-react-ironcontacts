import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      {
        contacts.map((item, idx) => {
          if(idx < 5){
            return <tr>
              <td><img src={item.pictureUrl}/></td>
              <td>{item.name}</td>
              <td>{item.popularity.toFixed(2)}</td>
              </tr>
          }
        })
      }
      </table>
      </div>
    );
  }
}

export default App;
