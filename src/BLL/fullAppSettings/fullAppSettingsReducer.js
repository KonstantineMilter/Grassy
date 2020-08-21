import {CHANGE_PHOTO_BOX_STATUS} from "./fullAppSettingsAC";

let fullAppInitialState = {
    isShowPhoto: false
};

const fulAppSettingsReducer = (state = fullAppInitialState, action) => {
    switch(action.type) {
        case CHANGE_PHOTO_BOX_STATUS: {
            return {
                ...state,
                isShowPhoto: !state.isShowPhoto
            }
        }
        default:
            return state;
    }
}

export default fulAppSettingsReducer;