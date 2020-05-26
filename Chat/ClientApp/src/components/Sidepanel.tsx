import React, { useEffect, useState } from "react";
import { SearchContacts } from "./SearchContacts";
import { Contact } from "./Contact";
import { UserDto } from "../models/UserDto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    currentUser?: UserDto;
    contacts?: UserDto[];
    conversationUser?: UserDto;
    setConversationUser: (user: UserDto) => void;
}

export const Sidepanel = (props: Props) => {
    const [searchText, setSearchText] = useState("");
    const [filteredContacts, setFilteredContacts] = useState<UserDto[]>([]);

    useEffect(() => {
        if (props.contacts !== undefined) {
            const search = searchText.toLowerCase();
            const result = props.contacts.filter(item => (item.username.toLowerCase().indexOf(search) !== -1));
            setFilteredContacts(result);
        }
    }, [props.contacts, searchText]);

    return (
        <div id="sidepanel">
            <div id="profile">
                <div className="wrap">
                    <img id="profile-img" src={props.currentUser?.img} className="online" alt="" />
                    <p>{props.currentUser?.username}</p>
                </div>
            </div>
            <SearchContacts setSearchText={setSearchText} />
            <div id="contacts">
                <ul>
                    {filteredContacts.map(u => {
                        return (
                            <Contact
                                key={u.id}
                                contact={u}
                                isActive={props.conversationUser?.id === u.id}
                                onClick={() => props.setConversationUser(u)}
                            />
                        )
                    })}
                </ul>
            </div>
            <div id="bottom-bar">
                <button id="addcontact">
                    <i aria-hidden="true">
                        <FontAwesomeIcon icon={"user-plus"} />
                    </i>
                    <span>Add contact</span></button>
                <button id="settings">
                    <i aria-hidden="true">
                        <FontAwesomeIcon icon={"cog"} />
                    </i>
                    <span>Settings</span>
                </button>
            </div>
        </div>
    );
}
