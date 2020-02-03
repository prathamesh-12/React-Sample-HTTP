import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {


    render () {

        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Blogs</Link></li>
                            <li><Link to={{
                                pathname: '/new-post'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                
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