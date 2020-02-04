import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';
import Aux from '../../../hoc/Auxillary/Aux';
import Spinner from '../../../components/UI/Spinner/Spinner';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Prats',
        isPostSuccessfullySaved: false,
        isError: false,
        isLoading: false,
        isDisplayForm: true
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        this.setState({ isLoading: true });
        axios.post("/", data)
            .then(respData => {
                this.setState({ isPostSuccessfullySaved: true, isLoading: false });
                //this.props.history.push('/posts');
            })
            .catch(err => {
                this.setState({ isError: true, isLoading: false });
                //this.props.history.push('/pageNotFound');
            });
    }

    render () {
        let redirectPost = null;
        let isError = null;
        let newPostForm = newPostForm = (
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
            </div>);

        if(this.state.isPostSuccessfullySaved) {
            redirectPost = (<Redirect to="/posts" />)
        }
        if(this.state.isError) {
            isError = (<Redirect to="/pageNotFound" />);
        }
        if(this.state.isLoading) {
            newPostForm = <Spinner />
        }

        return (
            <Aux>
                {newPostForm}  
            </Aux>
        );
    }
}

export default NewPost;