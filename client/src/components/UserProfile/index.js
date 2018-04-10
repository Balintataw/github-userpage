import React, { Component } from 'react'
import {connect} from 'react-redux'
import './userprofile.css'

export class UserProfile extends Component {
    static defaultProps = {
        repos: []
    }

    render() {
        console.log(this.props)
        return (
        <div id="profile-data-container">
            <nav className="user-repo-nav">
                <a href="#">Overview</a>
                <a href="#">Repositories</a>
                <a href="#">Stars</a>
                <a href="#">Followers</a>
                <a href="#">Following</a>
            </nav>
            <div>
                {this.props.repos.map(repo => {
                    return  <div key={'repo' + repo.id}>
                                <h3>{repo.name}</h3>
                                <p>{repo.language}</p>
                            </div>
                })}
            </div>
        </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        repos: state.githubReducer.data.repos
    }
}

export default connect(mapStateToProps)(UserProfile)
