import React, {Component} from "react";
import "./App.css";
import { Route } from 'react-router-dom';

import NavContainer from "./components/header/NavContainer/NavContainer";
import HomePageContainer from "./components/homepage/HomePageContainer/HomePageContainer";
import CreatorProfilePage from "./components/creator/CreatorContainer/CreatorProfilePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign_in_modal_open: false,
            userId: ""
        };
    }

    render() {
        return (
            <main className="container">
                <NavContainer/>
                <Route path="/home" component={HomePageContainer} />
                <Route path="/distributer/:user" component={CreatorProfilePage} />
            </main>
        );
    }
}

export default App;
