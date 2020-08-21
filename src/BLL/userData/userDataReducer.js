import {ADD_POST, CHANGE_NEW_POST_TEXT} from "./userDataAC";

let initialState = {
    name: 'Konstantine',
    surname: 'Milter',
    status: 'World is not world if u think so.',
    photos: {
        large: 'https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg',
        small: 'https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg'
    }
};

const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                postText: state.newPostText,
                likesAmount: 100
            }
            return {
                ...state,
                userPosts: [newPost, ...state.userPosts]
            }
        }
        case CHANGE_NEW_POST_TEXT: {
            let helper = action.text;
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state;
    }
}

export default userDataReducer;