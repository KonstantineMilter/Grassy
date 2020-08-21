import React from 'react';
import GlobalSearch from "./globalSearch";
import {connect} from 'react-redux';
import {getUserData} from "../../BLL/userData/userDataSelectors";

class GlobalSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <GlobalSearch {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}
export default connect(mapStateToProps, {  })(GlobalSearchContainer);