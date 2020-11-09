import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import FriendCard from "./FriendCard";
//REDUX
import {connect} from "react-redux";
import {getFriends} from "../actions/actions";

 function FriendsList({friendsList, getFriends}) {
    
    useEffect(()=>{
        getFriends();
    }, [])

    return(
        <>
        {friendsList.length < 1 ? <Loader type="ThreeDots" color="#A52A2A" heigth={40} width={40} /> : (
            <div className="friends-list">
                <h1>Say Hi To Your New Friends</h1>
            {friendsList.map((friend) => {
                return <FriendCard key={friend.id} friend={friend}/>
            })}
        </div>
        )}
        
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        friendsList: state.friendsList
    }
}
export default connect(mapStateToProps, {getFriends})(FriendsList);