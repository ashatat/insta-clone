import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    // Fetch posts data from the API
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <>
        <header>
          <SearchBar />
        </header>
        <main>
          <PostContainer />
        </main>
        <footer className="footer">This is just for purpose of training, made by <span className="footer__user-name">ashatat</span></footer>
      </>
    );
  }
}

export default App;
