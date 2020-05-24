import React, { useEffect, useState } from "react";
import { SearchContacts } from "./SearchContacts";
import { Contact } from "./Contact";
import { UserDto } from "../models/UserDto";

interface Props {
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
                    <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                    <p>Mike Ross</p>
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
                <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
            </div>
        </div>
    );
}
