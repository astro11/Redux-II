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
        {this.props.fetched ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
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
