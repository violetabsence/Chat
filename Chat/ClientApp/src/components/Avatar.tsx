import React, { Component } from "react";
import { UserDto } from "../models/UserDto";

interface Props {
    imgLink: string;
}

export const Avatar = (props: Props) => {
    return (
        <img src={props.imgLink}/>
    )
}