import * as React from "react";
import { Modal } from "react-bootstrap";
export class CartModal extends React.Component {
    render() {
        return (React.createElement(Modal, { show: this.props.show },
            React.createElement(Modal.Header, null,
                React.createElement(Modal.Title, null, "Modal heading")),
            React.createElement(Modal.Body, null, this.props.items.map((item) => {
                return (React.createElement("p", null, item.name));
            }))));
    }
}
