import React, { useState } from "react";
//REDUX
import {connect} from "react-redux";
import {postToFriends} from "../actions/actions";

 function AddFriend(props) {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        id: Date.now(),
        email: ""
    })
    const handleChange = (e) => {
        e.persist();
        setFriend({
            ...friend, [e.target.name]: e.target.value
        })
    }
    
    const submit = (e) => {
        e.preventDefault();
        setFriend({
            name: "",
        age: "",
        email: ""
        });
        props.postToFriends(friend);
        // axiosWithAuth().post("http://localhost:5000/api/friends", friend)
        // .then((res) => {
        //     console.log("post friend to server res: ",res);
        // })
        // .catch((err) => {
        //     console.log("post friend to server err: ", err);
        // })
    }

    return (
        <form onSubmit={submit}>
            <h3>Join Friends</h3>
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" value={friend.name} placeholder="name" onChange={handleChange} />
            <label htmlFor="age">How old are you?</label>
            <input name="age" value={friend.age} onChange={handleChange} placeholder="age" />
            <label htmlFor="email">What's your email?</label>
            <input type="email" name="email" placeholder="your@email.com" value={friend.email} onChange={handleChange} />
            <button>Join</button>
        </form>
    )
}
const mapStateToProps = (state) => {
    return{
        friendsList: state.friendsList
    }
}
export default connect(mapStateToProps, {postToFriends})(AddFriend);