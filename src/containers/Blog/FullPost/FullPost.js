import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        fetchedPost: null
    };

    componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.fetchedPost || (this.state.fetchedPost && (this.state.fetchedPost.id !== this.props.id))) {
                axios.get('/'+this.props.id)
                    .then(resp => {
                        this.setState({fetchedPost: resp.data});
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }

    render () {
        let post = <p style={{textAlign: 'center', color: '#0070C0'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style={{textAlign: 'center', color: '#0070C0'}}>Loading...!</p>;
        }
        if(this.state.fetchedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.fetchedPost.title}</h1>
                    <p>{this.state.fetchedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;