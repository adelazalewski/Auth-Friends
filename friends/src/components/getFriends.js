import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import FriendCard from "./FriendCard";
import {axiosWithAuth} from "../utils/axiosWithAuth";

export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    
console.log(friends);
    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then((res) => {
            //console.log("friends data: ", res);
            setFriends(res.data)
        })
        .catch((err) => {
            console.log("friends data err: ", err);
        })
    }, [])

    return(
        <>
        {friends.length < 1 ? <Loader type="ThreeDots" color="#A52A2A" heigth={40} width={40} /> : (
            <div className="friends-list">
            {friends.map((friend) => {
                <FriendCard key={friend.id} friend={friend}/>
            })}
        </div>
        )}
        
        </>
    )
}