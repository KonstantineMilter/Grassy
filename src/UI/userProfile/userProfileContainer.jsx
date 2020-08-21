import React from 'react';
import UserProfile from "./userProfile";
import {connect} from 'react-redux';
import {getUserData} from "../../BLL/userData/userDataSelectors";

class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <UserProfile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}
export default connect(mapStateToProps, {  })(UserProfileContainer);