import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatPage.css";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { Message } from "./Message";
import { OnlineStatus } from "../models/OnlineStatus";
import { Contact } from "./Contact";
import { RouteComponentProps } from "react-router";
import { UserService } from "../services/UserService";

interface State {
    activeUserId?: number;
    currentUser?: UserDto;
    contacts?: UserDto[];
}

export class ChatPage extends Component<RouteComponentProps, State> {
    static displayName = ChatPage.name;

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            activeUserId: undefined,
            currentUser: undefined,
            contacts: undefined
        };
    }

    componentDidMount() {
        UserService.contacts(0).then(
            users => {
                this.setState({ contacts: users });
            },
            error => {
                console.error(error);
            }
        );
    }

    getMessages(): MessageDto[] {
        return [
            { id: 0, userId: 1, datetime: new Date(), text: "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!" },
            { id: 1, userId: 0, datetime: new Date(), text: "When you're backed against the wall, break the god damn thing down." },
            { id: 2, userId: 0, datetime: new Date(), text: "Excuses don't win championships." },
            { id: 3, userId: 1, datetime: new Date(), text: "Oh yeah, did Michael Jordan tell you that?" },
            { id: 4, userId: 0, datetime: new Date(), text: "No, I told him that." },
            { id: 5, userId: 0, datetime: new Date(), text: "What are your choices when someone puts a gun to your head?" },
            { id: 6, userId: 1, datetime: new Date(), text: "What are you talking about? You do what they say or they shoot you." },
            { id: 7, userId: 0, datetime: new Date(), text: "You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things." }
        ];
    }

    render() {
        return (
            <div id="frame">
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
                                return <Contact key={u.id} contact={u} isActive={this.state.activeUserId === u.id} onClick={() => this.setState({ activeUserId: u.id })} />
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
                            {this.getMessages().map(m => {
                                const user = this.getUser(m.userId);
                                return <Message key={m.id} userImg={user.img} text={m.text} isSent={m.userId === 0} />
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
            </div>
        );
    }
}