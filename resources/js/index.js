import React, { Component } from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';
import BlogArticlePost from './components/BlogArticlePost';
import {BrowserRouter as Router, Link , Route} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/blog/post-article">Post Article</Link>

                        <Route path="/" exact component={Example} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" exact render={props => <BlogArticle {...props} /> } />
                        <Route path="/blog/post-article" exact component={BlogArticlePost} />
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}
