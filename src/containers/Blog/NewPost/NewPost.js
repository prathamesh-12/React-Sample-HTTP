import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Prats',
        isPostSuccessfullySaved: false,
        isError: false
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post("/qwqw", data)
            .then(respData => {
                //this.setState({ isPostSuccessfullySaved: true });
                this.props.history.push('/posts');
            })
            .catch(err => {
                //this.setState({ isError: true });
                this.props.history.push('/pageNotFound');
                debugger;
            });
    }

    render () {
        let redirectPost = null;
        let isError = null;
        if(this.state.isPostSuccessfullySaved) {
            redirectPost = (<Redirect to="/posts" />)
        }
        if(this.state.isError) {
            isError = (<Redirect to="/pageNotFound" />);
        }

        return (
            <div className="NewPost">
                {redirectPost}
                {isError}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">John</option>
                    <option value="Manu">Jack</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;