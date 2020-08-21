import React from 'react';

const createPushUp = (InputComponent, handlersClass, pushUpsClass) => {
    return class extends React.Component {
        func = (event) => {
            if (!event.target.closest('.' + handlersClass) && !event.target.closest('.' + pushUpsClass)) {
                this.props.changePushUpValue();
            }
        }
        componentDidMount() {
            document.addEventListener("click", this.func);
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.func);
        }

        render() {
            return <InputComponent />;
        }
    }
}

export default createPushUp;