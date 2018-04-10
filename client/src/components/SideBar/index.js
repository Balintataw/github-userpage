import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getUser } from '../../actions/githubActions';

import './sidebar.css'

export class SideBar extends Component {
    static defaultProps = {
        user:{}
    }
    render() {
        return (
            <div className="sidebar-container">
                <img src={this.props.user.avatar_url} id="sidebar-user-image" alt="user avatar"/>
                <h1>{this.props.user.name}</h1>
                <h3>{this.props.user.login}</h3>
                <button>Follow</button><br/>
                <a href="">Block user</a>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        user: state.githubReducer.data.user
    }
}

export default connect(mapStateToProps)(SideBar)
// {
//     "login": "Balintataw",
//     "id": 31120416,
//     "avatar_url": "https://avatars2.githubusercontent.com/u/31120416?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Balintataw",
//     "html_url": "https://github.com/Balintataw",
//     "followers_url": "https://api.github.com/users/Balintataw/followers",
//     "following_url": "https://api.github.com/users/Balintataw/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Balintataw/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Balintataw/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Balintataw/subscriptions",
//     "organizations_url": "https://api.github.com/users/Balintataw/orgs",
//     "repos_url": "https://api.github.com/users/Balintataw/repos",
//     "events_url": "https://api.github.com/users/Balintataw/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Balintataw/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "K Jossendal",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 54,
//     "public_gists": 4,
//     "followers": 3,
//     "following": 5,
//     "created_at": "2017-08-18T03:59:19Z",
//     "updated_at": "2018-02-26T17:59:34Z"
// }