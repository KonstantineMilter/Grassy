const CHANGE_SETTINGS_PUSH_UP_VALUE = 'CHANGE_SETTINGS_PUSH_UP_VALUE';

let initialState = {

};

const UpMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        // case CHANGE_SETTINGS_PUSH_UP_VALUE: {
        //     return{
        //         ...state,
        //         isPushUp: {
        //           ...state.isPushUp,
        //             userSettings: !state.isPushUp.userSettings
        //         }
        //     }
        // }
        default:
            return state;
    }
}
// export const changeSettingsPushUpValue = () =>{
//     return{
//         type: CHANGE_SETTINGS_PUSH_UP_VALUE
//     }
// }


export default UpMenuReducer;