import {usersAPI} from "../../DAL/api";

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

let initialState = [
    {id: 1, postText: 'Hello, world!', likesAmount: 12},
    {id: 2, postText: 'Hello, boy!', likesAmount: 3}
];

const userPostsReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }

}


export default userPostsReducer;