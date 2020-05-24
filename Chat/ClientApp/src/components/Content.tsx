import React from "react";
import { UserDto } from "../models/UserDto";
import { Messages } from "./Messages";

interface Props {
    userId: number;
    currentUser: UserDto;
    conversationUser?: UserDto;
}

export const Content = (props: Props) => {

    return (
        <div className="content">
            <div className="contact-profile">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Harvey Specter</p>
            </div>
            <Messages
                userId={props.userId}
                currentUser={props.currentUser}
                conversationUser={props.conversationUser}
            />
            <div className="message-input">
                <div className="wrap">
                    <input type="text" placeholder="Write your message..." />
                    <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                    <button className="submit"><i className="fas fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}