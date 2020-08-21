import React from 'react';
import Event from "./Event";
import {connect} from 'react-redux';

class EventContainer extends React.Component {
    render() {
        return (
            <div>
                <Event {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {  })(EventContainer);