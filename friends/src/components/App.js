import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import { getFriends } from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.getFriends();

  }
  render() {
    return (
      <div className="App">
      <h1>List of Friends</h1>
      <h6>well hello there...Redux</h6>
      <form className="form">
        <label>Name: <input type="text" placeholder="Name of friend"/></label>
        <label>Age: <input type="text" placeholder="Age of friend"/></label>
        <label>Email: <input type="text" placeholder="Email of friend"/></label>
        <button type="submit">Add Friend</button>
      </form>
        {this.props.fetched ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul className="friend-list">
            {this.props.friends.map((friend, index) => {
              return <li key={index}><strong>{friend.name}</strong>, {friend.age}: {friend.email}</li>;              
            })}
          </ul>
        )}
      </div>
    );
  }
}


// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    friends: state.friends,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
