import React, { Component } from 'react';
//import axios from 'axios';
// import axios from '../../axios';

import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className="Blog">
              <li><NavLink 
                to="/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                sarch: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;