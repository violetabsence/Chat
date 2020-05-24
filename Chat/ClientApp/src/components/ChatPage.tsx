import React, { Component } from "react";
import "./ChatPage.css";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { RouteComponentProps } from "react-router";
import { UserService } from "../services/UserService";
import { MessageService } from "../services/MessageService";
import { Sidepanel } from "./Sidepanel";
import { Content } from "./Content";

interface Props extends RouteComponentProps {
    userId: number;
}

interface State {
    currentUser?: UserDto;
    conversationUser?: UserDto;
    contacts?: UserDto[];
    messages?: MessageDto[];
}

export class ChatPage extends Component<Props, State> {
    static displayName = ChatPage.name;

    constructor(props: Props) {
        super(props);
        this.state = {
            currentUser: undefined,
            conversationUser: undefined,
            contacts: undefined,
            messages: undefined,
        };

        this.setConversationUser = this.setConversationUser.bind(this);
    }

    componentDidMount() {
        UserService.contacts(this.props.userId).then(
            users => {
                this.setState({ contacts: users });
            },
            error => {
                console.error(error);
            }
        );

        UserService.get(this.props.userId).then(
            user => {
                this.setState({ currentUser: user });
            },
            error => {
                console.error(error);
            }
        );
    }

    componentDidUpdate(prevProps: RouteComponentProps, prevState: State) {
        if (prevState.conversationUser !== this.state.conversationUser && this.state.conversationUser !== undefined) {
            MessageService.getByUser(this.props.userId, this.state.conversationUser.id).then(
                messages => {
                    this.setState({ messages: messages });
                }
            );
        }
    }

    setConversationUser(user: UserDto) {
        this.setState({ conversationUser: user });
    }

    render() {
        return (
            <div id="frame">
                {this.state.currentUser !== undefined && (
                    <React.Fragment>
                        <Sidepanel
                            currentUser={this.state.currentUser}
                            contacts={this.state.contacts}
                            conversationUser={this.state.conversationUser}
                            setConversationUser={this.setConversationUser}
                        />
                        <Content
                            userId={this.props.userId}
                            currentUser={this.state.currentUser}
                            conversationUser={this.state.conversationUser}
                        />
                    </React.Fragment>
                )}
            </div>
        );
    }
}