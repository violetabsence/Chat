import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { UserDto } from "../models/UserDto";
import { MessageService } from "../services/MessageService";
import { MessageDto } from "../models/MessageDto";

interface Props {
    currentUser: UserDto;
    conversationUser: UserDto;
    onMessageSent: (messages: MessageDto) => void;

}

export const MessageInput = (props: Props) => {
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
                    props.onMessageSent(message);
                })
                .finally(() => setSending(false));
        }
    }, [textMessage, props.currentUser, props.conversationUser]);

    return (
        <form className="message-input" onSubmit={submitHandler}>
            <div className="wrap">
                <input
                    type="text"
                    placeholder="Write your message..."
                    value={textMessage}
                    readOnly={sending}
                    onChange={onChange}
                />
                <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                <button className="submit" disabled={sending}>
                    <i className="fas fa-paper-plane" aria-hidden="true"></i>
                </button>
            </div>
        </form>
    );
}