import React, { Component } from "react";

import styles from './HomePageContainer.module.css';

import Header from '../Header/header';
import TabContainer from '../TabContainer/TabContainer';
import MainContainer from '../MainContainer/MainContainer';
import { getAllPosts, getMostRecentPosts} from "../../../services/fakePostsService";
import { getAllClubs } from "../../../services/fakeClubService";


class HomePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClub: "News",
            clubPosts: [],
            posts: getAllPosts(),
            mostRecentPosts: getMostRecentPosts(),
            VideoManagement_Open: false,
            topClubs: getAllClubs()
        };
    }

    handleClubSelect = club => {
        this.setState( {selectedClub: club});
    };



    render() {
        return (
            <div className={styles.container}>
                <Header posts={this.state.mostRecentPosts} selectedClub={this.state.selectedClub}/>
                <TabContainer clubs={this.state.topClubs} onClubSelect={this.handleClubSelect}/>
                <MainContainer posts={this.state.posts} selectedClub={this.state.selectedClub}/>
            </div>
        )
    }
}

export default HomePageContainer;




