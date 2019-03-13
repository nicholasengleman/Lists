import React, {Component} from "react";
import "./App.css";
import { Route } from 'react-router-dom';

import NavContainer from "./components/NavContainer/NavContainer";
import SignInModal from "./components/SignInModal/SignInModal";
import HomeContainer from "./components/HomeContainer/HomeContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign_in_modal_open: false
        };
    }


    handleVideoManagement = () => {
        this.setState({ VideoManagement_Open: !this.state.VideoManagement_Open });
    };





    render() {
        return (
            <main className="container">
                <SignInModal active={this.state.sign_in_modal_open}/>
                <NavContainer onVideoManagementClick={this.handleVideoManagement}/>
                <Route path="/home" component={HomeContainer} />
            </main>
        );
    }
}

export default App;
