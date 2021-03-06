import React, { useState, useEffect } from "react";
import { UserDto } from "../models/UserDto";
import { Messages } from "./Messages";
import { MessageService } from "../services/MessageService";
import { MessageDto } from "../models/MessageDto";
import { MessageInput } from "./MessageInput";

interface Props {
    currentUser: UserDto;
    conversationUser?: UserDto;
}

export const Content = (props: Props) => {
    const [messages, setMessages] = useState<MessageDto[]>([]);
    useEffect(() => {
        if (props.conversationUser !== undefined) {
            MessageService.getByUser(props.currentUser.id, props.conversationUser.id).then(setMessages);
        }
        const subscription = MessageService.messageChannel().subscribe(message => {
            if (message) {
                setMessages(messages => [...messages, message]);
            }
        });
        return () => subscription.unsubscribe();
    }, [props.conversationUser]);

    const onMessageSent = (message: MessageDto) => {
        setMessages(m => m.concat(message));
    }

    return (
        <div className="content">
            {props.conversationUser !== undefined && (
                <React.Fragment>
                    <div className="contact-profile">
                        <img src={props.conversationUser?.img} alt="" />
                        <div>{props.conversationUser?.username}</div>
                    </div>
                    <Messages
                        currentUser={props.currentUser}
                        conversationUser={props.conversationUser}
                        messages={messages}
                    />
                    <MessageInput
                        currentUser={props.currentUser}
                        conversationUser={props.conversationUser}
                        onMessageSent={onMessageSent}
                    />
                </React.Fragment>
            )}
        </div>
    )
}