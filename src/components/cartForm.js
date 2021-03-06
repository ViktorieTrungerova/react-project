import * as React from "react";
import { Form, Button } from "react-bootstrap";
export class CartForm extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChangeCount = (e) => {
            e.preventDefault();
            const count = e.target.elements['count'].value;
            this.props.onChangeCount(this.props.item, count);
            return false;
        };
    }
    render() {
        return (React.createElement(Form, { onSubmit: this.handleChangeCount },
            React.createElement(Form.Group, { controlId: "formBasicEmail" },
                React.createElement(Form.Label, null, "Po\u010Det"),
                React.createElement(Form.Control, { name: "count", type: "number", min: 1, defaultValue: this.props.item.count.toString() }),
                React.createElement(Button, { className: 'margin-top margin-right', type: "submit", variant: "primary" }, "Zm\u011Bna mno\u017Estv\u00ED"))));
    }
}
