import React, { useState, useEffect } from "react";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { Message } from "./Message";
import { MessageService } from "../services/MessageService";

interface Props {
    userId: number;
    currentUser: UserDto;
    conversationUser?: UserDto;
}

export const Messages = (props: Props) => {
    const [messages, setMessages] = useState<MessageDto[]>([]);

    useEffect(() => {
        if (props.conversationUser !== undefined) {
            const messages = MessageService.getByUser(props.userId, props.conversationUser.id).then(
                messages => {
                    setMessages(messages);
                }
            );

        }
    }, [props.conversationUser]);

    return (
        <div className="messages">
            <ul>
                {props.conversationUser !== undefined && messages !== undefined && messages.map(m => {
                    return (
                        <Message
                            key={m.id}
                            userImg={m.userId === props.userId ? props.currentUser!.img : props.conversationUser!.img}
                            text={m.text}
                            isSent={m.userId === props.userId}
                        />
                    )
                })}
            </ul>
        </div>
    );
}