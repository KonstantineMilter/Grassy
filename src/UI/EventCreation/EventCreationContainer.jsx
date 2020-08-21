import React from 'react';
import EventCreation from "./EventCreation";
import {connect} from 'react-redux';

class EventCreationContainer extends React.Component {
    render() {
        return (
            <div>
                <EventCreation {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {  })(EventCreationContainer);