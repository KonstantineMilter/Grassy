import {usersAPI} from "../../DAL/api";

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

let initialState = {
    friends: {
        amount: 130,
        friendsMaxAmount10: [
            { id: '1', name: 'Nastya', surname: 'Abramchick' },
            { id: '8', name: 'Na', surname: 'Abhick' },
            { id: '13', name: 'Kostya', surname: 'Mulitsa' }
        ]
    },
    friendsOnline: {
        amount: 38,
        friendsMaxAmount10: [
            { id: '1', name: 'Nastya', surname: 'Abramchick' },
            { id: '8', name: 'Na', surname: 'Abhick' },
            { id: '13', name: 'Kostya', surname: 'Mulitsa' }
        ]
    }
};

const userFriendsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default userFriendsReducer;