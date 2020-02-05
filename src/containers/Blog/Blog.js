import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import Error404 from '../../components/Error/Error-404/Error-404';
import asyncComponent from '../../hoc/async/AsyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
})

class Blog extends Component {

    state = {
        isAuth: true
    };

    render () {

        let isAuth = null;
        if(this.state.isAuth) {
            isAuth = (
                <li><NavLink to={{
                    pathname: '/new-post'
                }}>New Post</NavLink></li>
            );
        }
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact >Posts</NavLink></li>
                            {isAuth}
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/pageNotFound" component={Error404} />
                    <Redirect from="/" to="/posts"/>

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