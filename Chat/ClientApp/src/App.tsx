import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { ChatWindow } from "./components/ChatWindow";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./custom.css";

library.add(fas);

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path="/" component={ChatWindow} />
            </Layout>
        );
    }
}
