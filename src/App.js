import React, { Component } from 'react';
import './App.css';

import { getPosts } from './services/fakePostsService';

import Header from "./components/Header/header";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: getPosts() });
  }

  render() {
    return (
      <main className="container">
        <Header posts={this.state.posts} title="News"/>
      <Main />
      </main>
    );
  }
}

export default App;
