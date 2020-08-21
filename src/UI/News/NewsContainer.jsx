import React from 'react';
import News from "./News";
import {connect} from 'react-redux';
import {getUserData} from "../../BLL/userData/userDataSelectors";

class NewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLikeHovered : false
        }
    }
    showLikeHovered = () => {
        this.setState({
            isLikeHovered: !this.state.isLikeHovered
        });
    }
    render() {
        return <News {...this.props} showLikeHovered={this.showLikeHovered} isLikeHovered={this.state.isLikeHovered}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        userData: getUserData(state)
    }
}



export default connect(mapStateToProps,
    {})(NewsContainer);