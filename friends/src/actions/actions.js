import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from "axios";



export const clearStorage = () =>{
    return {type: "CLEAR_STORAGE"};
}



export const postToFriends = (friend) => dispatch => {
    dispatch({type: "STARTED_POSTING"});
    axiosWithAuth().post("http://localhost:5000/api/friends", friend)
        .then((res) => {
            console.log("post friend to server res: ",res);
            dispatch({type: "POSTING_SUCCESS", payload: res.data});
        })
        .catch((err) => {
            console.log("post friend to server err: ", err);
            dispatch({type: "POSTING_FAILURE"});
        })
};

export const getFriends = () => dispatch => {
dispatch({type: "FETCHING_FRIENDS_START"});
axiosWithAuth().get("http://localhost:5000/api/friends")
            .then((res) => {
                //console.log("friends data: ", res);
                dispatch({type: "FETCHING_FRIENDS_SUCCESS", payload: res.data})
            })
            .catch((err) => {
                console.log("friends data err: ", err);
                dispatch({type: "FETCHING_FRIENDS_ERROR"})
            })
};

export const loggin = (login) => dispatch => {
    dispatch({type: "LOGGIN_START"});
    axios.post('http://localhost:5000/api/login', login)
    .then((res) => {
        console.log("login res: ", res)
    
        //localStorage.setItem("token", res.data.payload);
        
        dispatch({type: "LOGGIN_SUCCESS", payload: res.data.payload})
        //console.log("login post res: ", res); - gives you an object with a key/value -- data: token
    })
    .catch((err) => {
        console.log("login err: ", err);
        dispatch({type: "LOGGIN_ERROR"})
    })
}
console.log(loggin())