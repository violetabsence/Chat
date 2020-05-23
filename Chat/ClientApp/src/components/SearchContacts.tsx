import React, { useCallback, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    setSearchText: (text: string) => void;
}

export const SearchContacts = (props: Props) => {
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.setSearchText(e.target.value);
    }, []);

    return (
        <div id="search">
            <label htmlFor="">
                <i aria-hidden="true">
                    <FontAwesomeIcon icon={"search"} />
                </i>
            </label>
            <input type="text" placeholder="Search contacts..." onChange={onChange} />
        </div>
    )
}