

const initialState = {
    loggedin: false,
    loading: false,
    friendsList: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case "CLEAR_STORAGE":
            localStorage.clear()
            return {...state,
            loggedin: false, loading: false}
        
        case "STARTED_POSTING":
            return{...state,
                loggedin: true,
                loading: true
            }
        case "POSTING_SUCCESS":
            return{...state,
                loggedin: true,
                loading: false,
                friendsList: action.payload
            }
        case "POSTING_FAILURE":
            return{
                ...state,
                loggedin: true,
                loading: false,
                
            }
        case "FETCHING_FRIENDS_START":
            return{
                ...state,
                loading: true,
                loggedin: true
            }
        case "FETCHING_FRIENDS_SUCCESS":
            return{
                ...state,
                loggedin: true,
                loading: false,
                friendsList: action.payload
            }
        case "FETCHING_FRIENDS_ERROR":
            return {
                ...state,
                
                loggedout: false
            }
        case "LOGGIN_START":
            return{
                ...state,
                loading: true,
                loggedin: false
            }
        
        case "LOGGIN_SUCCESS":
            localStorage.setItem("token", action.payload)
            return{
                ...state,
                loggedin: true,
                loading: false
            }
        case "LOGGIN_ERROR":
            return {
                ...state,
                loading: false,
                loggedin: false
            }
        default: 
        return state;
    }
}