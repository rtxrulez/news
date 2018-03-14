import React, { Component } from 'react';
import Post from './components/Post'
import logo from './logo.svg';
import './App.css';
import posts from './posts.json';
import axios from 'axios'
import { spawn } from 'child_process';
import connect from 'redux-connect'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  fetchPosts() {
    const { setPosts } = this.props
    
    axios.get('http://5aa95d2b4cf36300144e963b.mockapi.io/posts').then((data) => {
      setPosts(data)
      console.log('res', data)
    })
  }


  render() {
    let isLoading = !this.state.data.length
    const {posts} = this.props
    const {items} = posts

    return (
      <div className="App">
        Hello World
        <div>
          <button onClick={this.fetchPosts.bind(this)}>Получить записи</button>
        </div>
        {
          isLoading ?
          (<b>Loading</b>)
          :
          (
            posts.map((post, key) => {
              return <Post key={key} title={post.title} desc={post.desc} img={post.img}/>  
            })
          )
        }
      </div>
    );
  }
}

const state = props => {
  return {
    loading: true,
    ...props,
  }
}

const actions = dispatch => ({
  setPosts: data => 
    dispatch({
      type: 'SET_POSTS',
      payload: data
    })
})

export default connect(state, actions)(App);
