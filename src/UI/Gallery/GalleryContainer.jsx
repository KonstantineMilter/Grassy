import React from 'react';
import Gallery from "./Gallery";
import {connect} from 'react-redux';

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Gallery {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, {  })(GalleryContainer);