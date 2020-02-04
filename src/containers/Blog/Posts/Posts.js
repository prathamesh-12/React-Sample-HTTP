import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Link } from 'react-router-dom';

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
        // this.props.history.push({
        //     pathname: 
        // })
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                    <Link to={"/posts/full-post/"+post.id} key={post.id} >
                        <Post 
                        title={post.title} 
                        key={post.id}
                        author={post.author} 
                        clicked={() => this.onPostClickHandler(post.id)}/>
                    </Link>
                    );
        });

        return (
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path="/posts/full-post/:id" component={FullPost} />
            </div>
        );
    }
}

export default Posts;
