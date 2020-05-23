import React from "react";


interface Props {
    imgLink: string;
}

export const Avatar = (props: Props) => {
    return (
        <img src={props.imgLink} />
    )
}