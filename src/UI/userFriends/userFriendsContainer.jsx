import React from 'react';
import UserFriends from "./userFriends";
import {connect} from 'react-redux';
import {getUserData} from "../../BLL/userData/userDataSelectors";

class UserFriendsContainer extends React.Component {
    render() {
        return (
            <div>
                <UserFriends {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}
export default connect(mapStateToProps, {  })(UserFriendsContainer);