import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';

class Posts extends Component {

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

    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.onPostClickHandler(post.id)}/>
        });

        return (
            <section className="Posts">
                    {posts}
            </section>
        );
    }
}

export default Posts;
