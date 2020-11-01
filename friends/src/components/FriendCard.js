import React from "react";

export default function FriendCard(props) {
    return(
        <div className="friend-card">
            <h1 className="friend-name">{props.friend.name}</h1><span>Age {props.friend.age}</span>
            <p>Contact: {props.friend.email}</p>
        </div>
    )
}