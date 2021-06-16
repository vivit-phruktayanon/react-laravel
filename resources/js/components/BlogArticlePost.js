import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class BlogArticlePost extends Component {
    constructor(){
        super();
        this.state ={
            name: '',
            body: ''
        }
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }
    handleBodyChange(e){
        this.setState({
            body: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('/api/blog', this.state).then(response => {
            console.log(response);
        }).then(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Post a new article
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div>
                                        <input type="text" name="name" placeholder="Enter blog name" onChange={this.handleNameChange.bind(this)} value={this.state.name}/>
                                    </div>
                                    <div>
                                        <textarea name="body" placeholder="Enter blog body" onChange={this.handleBodyChange.bind(this)} value={this.state.body}/>
                                    </div>
                                    <div>
                                        <button type="submit"> Submit </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
