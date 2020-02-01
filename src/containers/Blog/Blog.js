import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedID: null
    };

    componentDidMount() {
        axios.get("/")
            .then(resp => {
                const respPosts = resp.data.slice(0, 6);
                const updatedPosts = respPosts.map(iPost => {
                   return {
                       ...iPost,
                       author: "Prats"
                   }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(err => {
                debugger;
            });
    }

    onPostClickHandler = (id) => {
        this.setState({selectedID: id});
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.onPostClickHandler(post.id)}/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;