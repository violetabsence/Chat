import React, { useState, ChangeEvent, useCallback, FormEvent, useEffect } from "react";
import { UserDto } from "../models/UserDto";
import { Messages } from "./Messages";
import { MessageService } from "../services/MessageService";
import { MessageDto } from "../models/MessageDto";

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
    }, [props.conversationUser]);

    const [textMessage, setTextMessage] = useState("");
    const [sending, setSending] = useState(false);
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextMessage(e.target.value);
    }, []);
    const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!sending && textMessage.length > 0 && props.conversationUser !== undefined) {
            setSending(true);
            MessageService.sendMessage(props.currentUser.id, props.conversationUser.id, textMessage)
                .then(message => {
                    setTextMessage("");
                    setMessages(m => m.concat(message));
                })
                .finally(() => setSending(false));
        }
    }, [textMessage, props.currentUser, props.conversationUser]);

    return (
        <div className="content">
            {props.conversationUser !== undefined && (
                <React.Fragment>
                    <div className="contact-profile">
                        <img src={props.conversationUser?.img} alt="" />
                        <p>{props.conversationUser?.username}</p>
                    </div>
                    <Messages
                        currentUser={props.currentUser}
                        conversationUser={props.conversationUser}
                        messages={messages}
                    />
                    <form className="message-input" onSubmit={submitHandler}>
                        <div className="wrap">
                            <input
                                type="text"
                                placeholder="Write your message..."
                                value={textMessage}
                                disabled={sending}
                                onChange={onChange}
                            />
                            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button className="submit" disabled={sending}>
                                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </React.Fragment>
            )}
        </div>
    )
}