import React from 'react';
import {connect} from 'react-redux';
import UserAuthInfoBlock from "./UserAuthInfoBlock";
import {getUserData} from "../../../../BLL/userData/userDataSelectors";

class UserAuthInfoBlockContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSettingPushUp: false
        }
    }
    changeSettingsPushUpValue = () => {
        this.setState({
            isSettingPushUp: !this.state.isSettingPushUp
        });
    }
    render() {
        return (
            <div className="UserAuthBlockContainerDiv">
                <UserAuthInfoBlock  {...this.props} changeSettingsPushUpValue={this.changeSettingsPushUpValue} {...this.state}/>
            </div>
        )
    }
}

let mapState = (state) => {
    return{
        userData: getUserData(state)
    }
}
export default connect(mapState,{  })(UserAuthInfoBlockContainer);