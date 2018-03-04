import React, { Component } from 'react';
import Post from './components/Post'
import logo from './logo.svg';
import './App.css';
import posts from './posts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        {
          posts.map((post, key) => {
            return <Post key={key} title={post.title} desc={post.desc} img={post.img}/>  
          })
        }
      </div>
    );
  }
}

export default App;
