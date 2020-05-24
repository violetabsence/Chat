import React from "react";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { Message } from "./Message";

interface Props {
    currentUser: UserDto;
    conversationUser: UserDto;
    messages: MessageDto[];
}

export const Messages = (props: Props) => {
    return (
        <div className="messages">
            <ul>
                {props.messages.map(m => {
                    return (
                        <Message
                            key={m.id}
                            userImg={m.userId === props.currentUser.id ? props.currentUser.img : props.conversationUser.img}
                            text={m.text}
                            isSent={m.userId === props.currentUser.id}
                        />
                    )
                })}
            </ul>
        </div>
    );
}