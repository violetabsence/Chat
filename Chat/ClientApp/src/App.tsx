import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { Layout } from "./components/Layout";
import { ChatPage } from "./components/ChatPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./Global.css";

library.add(fas);

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path="/" render={(props) => <ChatPage {...props} userId={0} />} />
                <Redirect from="*" to="/" />
            </Layout>
        );
    }
}
