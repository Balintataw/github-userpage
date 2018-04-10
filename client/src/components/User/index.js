import React, { Component } from 'react';

import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import UserProfile from '../UserProfile'
import './user.css'

export class User extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <div id="profile-container">
                    <SideBar />
                    <UserProfile />
                </div>
            </div>
        )
    }
};

export default User;
