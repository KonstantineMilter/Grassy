import {usersAPI} from "../../DAL/api";

// -------------- consts -----------------

export const ADD_POST = 'ADD_POST';
export const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
export const GET_USER_FRIENDS = 'GET_USER_FRIENDS';

let friendsObj = [
    {
        id: 1,
        name: "Kostya",
        surname: "Milter",
        avatarSmallSrc: "https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg",
        ecoPosition: "Актывіст",
        locationTown: "Іўе"
    },
    {
        id: 2,
        name: "Nastya",
        surname: "Abranchick",
        avatarSmallSrc: "https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg",
        ecoPosition: "няма",
        locationTown: "Суботнікі"
    }
]

// -------------- AC -----------------

export const createPost = () => ({type: ADD_POST});
export const changeNewPostText = (postText) => ({type: CHANGE_NEW_POST_TEXT, text: postText});

// -------------- thunks -----------------

export const getInfo = () => (dispatch) => {
    usersAPI.getInfo().then(response => {
       alert(response);
    });
}

export const getUserFriends = () => {
    return friendsObj;
}
export const getUserOnlineFriends = () => {
    return friendsObj;
}
export const getUserFriendsRequests = () => {
    return friendsObj;
}
export const getDataForFriendsSearch = () => {
    return friendsObj;
}