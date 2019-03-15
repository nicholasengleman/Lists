import React, {Component} from "react";
import "./App.css";
import { Route } from 'react-router-dom';

import NavContainer from "./components/NavContainer/NavContainer";
import SignInModal from "./components/SignInModal/SignInModal";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import DistributerContainer from "./components/DistributerContainer/DistributerContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign_in_modal_open: false
        };
    }


    render() {
        return (
            <main className="container">
                <Route path="/login" component={() => <SignInModal active={this.state.sign_in_modal_open}/>} />
                <NavContainer/>
                <Route path="/home" component={HomeContainer} />
                <Route path="/distributer/:user" component={DistributerContainer} />
            </main>
        );
    }
}

export default App;
