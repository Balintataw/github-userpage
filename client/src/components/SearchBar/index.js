import React, { Component } from 'react'
import  'font-awesome/css/font-awesome.min.css'
import './searchbar.css'

export class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar-container">
                <span className="fa fa-github"></span>
                <input type="text" className="search-input"/>
                <a href="#">Pull Requests</a>
                <a href="#">Issues</a>
                <a href="#">Marketplace</a>
                <a href="#">Explore</a>
                <div className="user-nav">
                    <span className="fa fa-bell-o"></span>
                    <span className="fa fa-plus"></span>
                    <span className="fa fa-caret-down"></span>
                    <img src="http://placehold.it/50/50" />
                </div>
            </div>
        )
    }
};

export default SearchBar;