import React from 'react';
import ShowPhotoBox from "./ShowPhotoBox";
import {connect} from "react-redux";
import {changeShowPhotoBoxStatus} from "../../BLL/fullAppSettings/fullAppSettingsAC";
import {getShowPhotoStatus} from "../../BLL/fullAppSettings/fullAppSettingsSelectors";

class ShowPhotoBoxContainer extends React.Component {
    render() {
        return (
            <div>
                { this.props.isShowPhoto && <ShowPhotoBox  changeShowPhotoBoxStatus={this.props.changeShowPhotoBoxStatus}/> }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isShowPhoto: getShowPhotoStatus(state)
    }
}
export default connect(mapStateToProps, { changeShowPhotoBoxStatus })(ShowPhotoBoxContainer);