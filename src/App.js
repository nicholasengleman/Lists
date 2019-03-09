import React, {Component} from "react";
import "./App.css";

import { getAllPosts } from "./services/fakePostsService";
import { getAllClubs } from "./services/fakeClubService";

import NavContainer from "./components/NavContainer/NavContainer";
import Header from "./components/Header/header";
import TabContainer from "./components/TabContainer/TabContainer";
import Main from "./components/MainContainer/Main";
import VideoMangementContainer from "./components/VideoManagementContainer/VideoManagementContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClub: "News",
            posts: getAllPosts(),
            VideoManagement_Open: false,
            topClubs: getAllClubs()
        };
    }


    handleClubSelect = club => {
        this.setState( {selectedClub: club});
    };


    handleVideoManagement = () => {
      this.setState({ VideoManagement_Open: !this.state.VideoManagement_Open });
    };

    render() {
        return (
            <main className="container">
                <VideoMangementContainer active={this.state.VideoManagement_Open}/>
                <NavContainer onVideoManagementClick={this.handleVideoManagement}/>
                <Header posts={this.state.posts} selectedClub={this.state.selectedClub}/>
                <TabContainer clubs={this.state.topClubs} onClubSelect={this.handleClubSelect}/>
                <Main/>
            </main>
        );
    }
}

export default App;
