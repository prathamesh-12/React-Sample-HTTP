import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {


    render () {

        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} />
                    {/* <Route path="/full-post/:id" component={FullPost} /> */}
                </Switch>
                
                {/* <section>
                    <FullPost id={this.state.selectedID}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;