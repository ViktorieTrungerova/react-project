import * as React from "react";
import { Button, Form, Table } from "react-bootstrap";
export class AddItemForm extends React.Component {
    constructor() {
        super(...arguments);
        this.handleAddItem = (e) => {
            e.preventDefault();
            const addItemId = Number(e.target.elements['itemSelect'].value);
            const count = e.target.elements['count'].value;
            let selectedProduct = null;
            this.props.items.map((product) => {
                if (product.id === addItemId) {
                    selectedProduct = product;
                    return;
                }
            });
            this.props.onAddItem(selectedProduct, count);
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Form, { onSubmit: this.handleAddItem },
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "V\u00FDb\u011Br zbo\u017E\u00ED"),
                    React.createElement(Form.Control, { as: "select", name: "itemSelect" },
                        this.props.items.map((product) => {
                            return (React.createElement("option", { value: product.id }, product.name));
                        }),
                        ";")),
                React.createElement(Form.Control, { name: "count", type: "text", placeholder: "Po\u010Det kusu tu bude" }),
                React.createElement(Button, { type: "submit" }, "P\u0159idat")),
            React.createElement(Table, null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Cena"),
                    React.createElement("th", null, "Cena celkem")),
                React.createElement("tr", null,
                    React.createElement("td", null, "600"),
                    React.createElement("td", null, "500")))));
    }
}
