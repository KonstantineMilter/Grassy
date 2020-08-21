import React from 'react';
import LeftMenuV2 from "./LeftMenuV2";
import {connect} from 'react-redux';

class LeftMenuV2Container extends React.Component {
    render() {
        return <LeftMenuV2  />
    }
}

let mapStateToProps = (state) => {
    return {

    }
}



export default connect(mapStateToProps,
    {})(LeftMenuV2Container);