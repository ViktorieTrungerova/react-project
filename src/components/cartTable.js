import * as React from "react";
import { Button } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import { Container } from 'reactstrap';
import NumberFormat from 'react-number-format';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faPencilAlt, faTrashAlt);
export class CartTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement("div", null,
                React.createElement("h2", null, this.props.title),
                React.createElement("table", { className: "table" },
                    React.createElement("tr", null,
                        React.createElement("th", null, "N\u00E1zev polo\u017Eky"),
                        React.createElement("th", null, "Cena"),
                        React.createElement("th", null, "Po\u010Det"),
                        React.createElement("th", null, "Cena celkem"),
                        this.props.showEdit &&
                            React.createElement("th", null)),
                    this.props.items.map((item) => {
                        return (React.createElement("tr", null,
                            React.createElement("td", null, item.name),
                            React.createElement("td", null,
                                React.createElement(NumberFormat, { value: item.price, displayType: 'text', thousandSeparator: true, suffix: ' Kč' })),
                            React.createElement("td", null,
                                item.count,
                                " ",
                                item.unit),
                            React.createElement("td", null,
                                React.createElement(NumberFormat, { value: item.count * item.price, displayType: 'text', thousandSeparator: true, suffix: ' Kč' })),
                            this.props.showEdit &&
                                React.createElement("td", null,
                                    React.createElement(Button, { className: 'margin-right', "data-tip": "Editovat", variant: "primary", onClick: (e) => this.props.handleClickEdit(item) },
                                        React.createElement("div", null,
                                            React.createElement(FontAwesomeIcon, { icon: "pencil-alt" }))),
                                    React.createElement(Button, { "data-tip": "Smazat", variant: "danger", onClick: (e) => this.props.handleClickRemove(item) },
                                        React.createElement("div", null,
                                            React.createElement(FontAwesomeIcon, { icon: "trash-alt" }))))));
                    })),
                React.createElement(ReactTooltip, null))));
    }
}
