import React from 'react';
import UserEvents from "./userEvents";
import {connect} from 'react-redux';
import {getUserData} from "../../BLL/userData/userDataSelectors";

class UserEventsContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <UserEvents {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}
export default connect(mapStateToProps, {  })(UserEventsContainer);