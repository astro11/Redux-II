import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriends } from '../actions';

class addFriends extends Component {
    componentDidMount() {
      this.props.addFriends();
  
    }
    render() {
      return (
        <div className="App">
          <form action="">
            <input type="text"/>
          </form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      adding: state.adding,
      added: state.added,
      friends: state.friends,
      error: state.adderror
    };
  };
  
  export default connect(mapStateToProps, { addFriends })(App);