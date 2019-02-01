import * as React from "react";
import { Button } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faPencilAlt, faTrashAlt);
export class CartTable extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement("div", null,
                React.createElement("h2", null, this.props.title),
                React.createElement("table", { className: "table" }, this.props.items.map((item) => {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, item.id),
                        React.createElement("td", null, item.name),
                        React.createElement("td", { "data-tip": "Cena" }, item.price),
                        React.createElement("td", { "data-tip": "Po\u010Det kus\u016F" }, item.count),
                        React.createElement("td", { "data-tip": "Cena celkem" }, item.count * item.price),
                        React.createElement("td", null,
                            React.createElement(Button, { variant: "primary", onClick: (e) => this.props.handleClickEdit(item) },
                                React.createElement("div", null,
                                    React.createElement(FontAwesomeIcon, { icon: "pencil-alt" }))),
                            React.createElement(Button, { variant: "danger", onClick: (e) => this.props.handleClickRemove(item) },
                                React.createElement("div", null,
                                    React.createElement(FontAwesomeIcon, { icon: "trash-alt" }))))));
                })),
                React.createElement(ReactTooltip, null))));
    }
}
