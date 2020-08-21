
export const getUserData = (state) => {
    return state.userData;
}

export const getUserAvatar = (state) => {
    return state.userData.photos.small;
}