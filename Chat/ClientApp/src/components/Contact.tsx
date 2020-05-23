import React, { useMemo } from "react";
import { UserDto } from "../models/UserDto";
import { Avatar } from "./Avatar";
import { OnlineStatus } from "../models/OnlineStatus";

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
    contact: UserDto;
    isActive: boolean;
}

export const Contact = (props: Props) => {
    const { contact, isActive, ...restProps } = props;

    const statusClass = useMemo(() => {
        switch (contact.onlineStatus) {
            case OnlineStatus.online:
                return "online";
            case OnlineStatus.busy:
                return "busy";
            case OnlineStatus.away:
                return "away";
            case OnlineStatus.offline:
            default:
                return "";
        }
    }, [contact.onlineStatus]);

    return (
        <li className={`contact ${isActive ? "active" : ""}`} {...restProps}>
            <div className="wrap">
                <span className={`contact-status ${statusClass}`} />
                <Avatar imgLink={contact.img} />
                <div className="meta">
                    <p className="name">{contact.username}</p>
                    <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                </div>
            </div>
        </li>
    )
}