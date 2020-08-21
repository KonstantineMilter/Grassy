import React from 'react';
import s from "./css/RoundedAvatar.module.css";
import {connect} from "react-redux";
import {getUserAvatar} from "../../../BLL/userData/userDataSelectors";
import {Link} from "react-router-dom";

class Avatar extends React.Component {
    render() {
        return <AvatarHelper {...this.props} userAvatar={this.props.userAvatar} />;
    }
}

let mapStateToProps = (state) => {
    return {
        userAvatar: getUserAvatar(state)
    }
}
export default connect(mapStateToProps, {  })(Avatar);

const AvatarHelper = ({ user = "me", rounded = true, id = "no", userAvatar, src = "no"}) => {
    let userId = 1;
    if(user === "other" && id === "no"){
        console.error("Error in 'RoundedAvatar.js' => id = null (line 23)");
        return(
            <div className={ rounded ? s.emptyAvatar + " " + s.rounded : s.emptyAvatar }/>
        )
    }
    return (
        <Link to={ user==="me" ? "/user/" + userId : "/user/" + id} >
            <img src={ user === "me" ? userAvatar : src } alt="avatar"
                 className={ rounded ? s.userAvatar + " " + s.rounded : s.userAvatar }/>
        </Link>
    )
}