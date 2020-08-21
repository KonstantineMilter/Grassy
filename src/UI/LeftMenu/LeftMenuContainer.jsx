import React from 'react';
import LeftMenu from "./LeftMenu";
import {connect} from 'react-redux';

class LeftMenuContainer extends React.Component {
    render() {
        return <LeftMenu  />
    }
}

let mapStateToProps = (state) => {
    return {

    }
}



export default connect(mapStateToProps,
    {})(LeftMenuContainer);