import React from "react";
import { Avatar } from "./Avatar";

interface Props {
    userImg: string;
    text: string;
    isSent: boolean;
}

export const Message = (props: Props) => {
    return (
        <li className={props.isSent ? "sent" : "replies"}>
            <Avatar imgLink={props.userImg} />
            <p>{props.text}</p>
        </li>
    )
}