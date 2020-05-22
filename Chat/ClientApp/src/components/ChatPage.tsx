import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatPage.css";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { Message } from "./Message";
import { Contact } from "./Contact";
import { RouteComponentProps } from "react-router";
import { UserService } from "../services/UserService";
import { MessageService } from "../services/MessageService";

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
            messages: undefined
        };
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

    render() {
        return (
            <div id="frame">
                {this.state.currentUser !== undefined && (
                    <React.Fragment>
                        <div id="sidepanel">
                            <div id="profile">
                                <div className="wrap">
                                    <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                                    <p>Mike Ross</p>
                                </div>
                            </div>
                            <div id="search">
                                <label htmlFor=""><i className="fab fa-search" aria-hidden="true"></i></label>
                                <input type="text" placeholder="Search contacts..." />
                            </div>
                            <div id="contacts">
                                <ul>
                                    {this.state.contacts !== undefined && this.state.contacts.map(u => {
                                        return (
                                            <Contact
                                                key={u.id}
                                                contact={u}
                                                isActive={this.state.conversationUser?.id === u.id}
                                                onClick={() => this.setState({ conversationUser: u })}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                            <div id="bottom-bar">
                                <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                                <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="contact-profile">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                <p>Harvey Specter</p>
                            </div>
                            <div className="messages">
                                <ul>
                                    {this.state.conversationUser !== undefined && this.state.messages !== undefined && this.state.messages.map(m => {
                                        return (
                                            <Message key={m.id}
                                                userImg={m.userId === this.props.userId ? this.state.currentUser!.img : this.state.conversationUser!.img}
                                                text={m.text}
                                                isSent={m.userId === this.props.userId}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="message-input">
                                <div className="wrap">
                                    <input type="text" placeholder="Write your message..." />
                                    <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                                    <button className="submit"><i className="fas fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}