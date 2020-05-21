import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { ChatWindow } from "./components/ChatWindow";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./custom.css";

library.add(fas);

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/counter" component={Counter} />
                <Route path="/chat" component={ChatWindow} />
                <Route path="/fetch-data" component={FetchData} />
            </Layout>
        );
    }
}
