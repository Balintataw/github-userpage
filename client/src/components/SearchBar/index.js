import React, { Component } from 'react'
import { connect } from 'react-redux'
import  'font-awesome/css/font-awesome.min.css'
import './searchbar.css'
import { getUser } from '../../actions/githubActions';

export class SearchBar extends Component {
    static defaultProps = {
        searchValue: {},
        user: {}
    }
    state = {
        searchValue: ''
    }

    searchValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        getUser(this.state.searchValue)
        this.setState({
            searchValue: ''
        })
    }
    render() {
        return (
            <div className="searchbar-container">
                <span className="fa fa-github"></span>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.searchValue} value={this.state.searchValue} name="searchValue" type="text" className="search-input"/>
                </form>
                <a href="#">Pull Requests</a>
                <a href="#">Issues</a>
                <a href="#">Marketplace</a>
                <a href="#">Explore</a>
                <div className="user-nav">
                    <span className="fa fa-bell-o"></span>
                    <span className="fa fa-plus"></span>
                    <span className="fa fa-caret-down"></span>
                    <img src={this.props.user.avatar_url} id="user-image-small" alt="user avatar"/>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        user: state.githubReducer.data.user
    }
}

export default connect(mapStateToProps)(SearchBar)