import React from 'react';
import {connect} from 'react-redux';
import {changeNewPostText, createPost} from "../../../../BLL/userData/userDataReducer";
import UserProfilePosts from "./userProfilePosts";

class UserProfilePostsContainer extends React.Component {

    render() {
        return (
            <div>
                <UserProfilePosts {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userPosts: state.userProfile.userPosts,
        newPostText: state.userProfile.newPostText
    }
}



export default connect(mapStateToProps,
    {createPost, changeNewPostText})(UserProfilePostsContainer);