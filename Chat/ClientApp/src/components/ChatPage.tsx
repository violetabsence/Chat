import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatPage.css";
import { MessageDto } from "../models/MessageDto";
import { UserDto } from "../models/UserDto";
import { Message } from "./Message";

export class ChatPage extends Component {
    static displayName = ChatPage.name;

    getUser(id: number): UserDto {
        return {
            id,
            img: id === 0 ? "http://emilcarlsson.se/assets/mikeross.png" : "http://emilcarlsson.se/assets/harveyspecter.png",
            username: id === 0 ? "Mike Ross" : "Harvey Specter"
        }
    }

    getMessages(): MessageDto[] {
        return [
            { id: 0, userId: 1, datetime: new Date(), text: "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!" },
            { id: 1, userId: 0, datetime: new Date(), text: "When you're backed against the wall, break the god damn thing down." },
            { id: 2, userId: 0, datetime: new Date(), text: "Excuses don't win championships." },
            { id: 3, userId: 1, datetime: new Date(), text: "Oh yeah, did Michael Jordan tell you that?" },
            { id: 4, userId: 0, datetime: new Date(), text: "No, I told him that." },
            { id: 5, userId: 0, datetime: new Date(), text: "What are your choices when someone puts a gun to your head?" },
            { id: 6, userId: 1, datetime: new Date(), text: "What are you talking about? You do what they say or they shoot you." },
            { id: 7, userId: 0, datetime: new Date(), text: "You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things." }
        ];
    }

    render() {
        return(
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                            <p>Mike Ross</p>
                        </div>
                    </div>
                    <div id="search">
                        <label htmlFor=""><i className="fab fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Search contacts..." />
                    </div>
                    <div id="contacts">
                        <ul>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status online"></span>
                                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Louis Litt</p>
                                        <p className="preview">You just got LITT up, Mike.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact active">
                                <div className="wrap">
                                    <span className="contact-status busy"></span>
                                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Harvey Specter</p>
                                        <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status away"></span>
                                    <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Rachel Zane</p>
                                        <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status online"></span>
                                    <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Donna Paulsen</p>
                                        <p className="preview">Mike, I know everything! I'm Donna..</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status busy"></span>
                                    <img src="http://emilcarlsson.se/assets/jessicapearson.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Jessica Pearson</p>
                                        <p className="preview">Have you finished the draft on the Hinsenburg deal?</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status"></span>
                                    <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Harold Gunderson</p>
                                        <p className="preview">Thanks Mike! :)</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status"></span>
                                    <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Daniel Hardman</p>
                                        <p className="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status busy"></span>
                                    <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Katrina Bennett</p>
                                        <p className="preview">I've sent you the files for the Garrett trial.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status"></span>
                                    <img src="http://emilcarlsson.se/assets/charlesforstman.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Charles Forstman</p>
                                        <p className="preview">Mike, this isn't over.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status"></span>
                                    <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
                                    <div className="meta">
                                        <p className="name">Jonathan Sidwell</p>
                                        <p className="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="bottom-bar">
                        <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                        <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
                    </div>
                </div>
                <div className="content">
                    <div className="contact-profile">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>Harvey Specter</p>
                    </div>
                    <div className="messages">
                        <ul>
                            {this.getMessages().map(m => {
                                const user = this.getUser(m.userId);
                                return <Message key={m.id} userImg={user.img} text={m.text} isSent={m.userId === 0} />
                            })}
                        </ul>
                    </div>
                    <div className="message-input">
                        <div className="wrap">
                        <input type="text" placeholder="Write your message..." />
                        <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                        <button className="submit"><i className="fas fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}