
// -------------- consts -----------------

export const CHANGE_PHOTO_BOX_STATUS = 'CHANGE_PHOTO_BOX_STATUS';

// -------------- AC -----------------

export const changeShowPhotoBoxStatus = () => ({type: CHANGE_PHOTO_BOX_STATUS});

// -------------- thunks -----------------
//
// export const getInfo = () => (dispatch) => {
//     debugger;
//     usersAPI.getInfo().then(response => {
//         debugger;
//        alert(response);
//     });
// }