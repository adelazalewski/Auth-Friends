import React from "react";
import AddFriend from "./addFriend";
import FriendsList from "./FriendsList";
//import {axiosWithAuth} from "../utils/axiosWithAuth";


 function FriendsHomePage(props) {
    // const [friends, setFriends] = useState([]);
    // const getFriends = () => {
        
    //         axiosWithAuth().get("http://localhost:5000/api/friends")
    //         .then((res) => {
    //             //console.log("friends data: ", res);
    //             setFriends(res.data)
    //         })
    //         .catch((err) => {
    //             console.log("friends data err: ", err);
    //         })
       
    // }
    // useEffect(() => {
    //     props.getFriends();
    // },[]);
    return (
    <>
    <AddFriend />
    <FriendsList />
    </>
    )
}
// const mapStateToProps = (state) => {
//     return{
//         friendsList: state.friendsList
//     }
// } 
export default (FriendsHomePage);