import * as React from "react";
import { CartTable } from "./cartTable";
import { CartForm } from "./cartForm";
import { Modal } from "react-bootstrap";
import PNotify from "pnotify/dist/es/PNotify";
import { Navigation } from "./navigation";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddItemForm } from "./addItemForm";
import ReactTooltip from 'react-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartStorage } from "./cartStorage";
library.add(faPlus);
export class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState = (state) => {
            super.setState(state);
            this.storage.saveCart(this.state);
        };
        this.handleClose = () => {
            this.setState({
                cartForm: {
                    edit: {
                        item: null,
                    }
                },
                showModal: false,
            });
        };
        this.handleShowModal = () => {
            this.setState({ showModal: true });
        };
        this.handleChangeCount = (item, count) => {
            this.state.items.map((stateItem, index, array) => {
                if (item.id === stateItem.id) {
                    array[index].count = count;
                }
            });
            this.setState({
                cartForm: {
                    edit: {
                        item: null,
                    }
                }
            });
        };
        this.handleOnAddItem = (product, count) => {
            this.state.items.push({
                id: null,
                name: product.name,
                count: count,
                unit: product.unit,
                price: product.price,
            });
            this.setState(this.state);
        };
        this.handleClickRemove = (item) => {
            this.state.items.map((stateItem, index, array) => {
                if (item.id === stateItem.id) {
                    array.splice(index, 1);
                }
                this.setState(this.state);
            });
            PNotify.success({
                text: "Položka byla odebrána",
                type: 'notice',
                stack: {
                    "dir1": "up",
                    "dir2": "left",
                    "firstpos1": 50,
                    "firstpos2": 25
                }
            });
        };
        this.handleClickEdit = (item) => {
            this.setState({
                cartForm: {
                    edit: {
                        item: item,
                    }
                }
            });
        };
        this.storage = new CartStorage();
        let state = this.storage.getCart();
        if (state === null) {
            this.state = {
                title: 'Košík',
                cartForm: {
                    edit: {
                        item: null,
                    },
                },
                items: [],
                showModal: false,
            };
        }
        else {
            this.state = state;
        }
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Navigation, { step: 1 }),
            React.createElement(Container, null,
                React.createElement(Row, null,
                    React.createElement(Col, { className: 'text-align-r margin-top' },
                        React.createElement(Button, { variant: "primary", onClick: this.handleShowModal, "data-tip": "P\u0159idat polo\u017Eku" },
                            React.createElement("div", null,
                                React.createElement(FontAwesomeIcon, { icon: "plus" })))))),
            React.createElement(Modal, { show: this.state.showModal, onHide: this.handleClose },
                React.createElement(Modal.Header, { closeButton: true },
                    React.createElement(Modal.Title, null, "P\u0159idat zbo\u017E\u00ED")),
                React.createElement(Modal.Body, null,
                    React.createElement(AddItemForm, { items: this.storage.getAllProducts(), onAddItem: this.handleOnAddItem }))),
            React.createElement(CartTable, { title: this.state.title, showEdit: true, items: this.state.items, handleClickEdit: this.handleClickEdit, handleClickRemove: this.handleClickRemove }),
            React.createElement(Container, null,
                React.createElement(Row, null,
                    React.createElement(Col, { className: 'text-align-r margin-top' },
                        React.createElement(Button, { className: "primary", href: "http://localhost/react-project/www/delivery.html" }, "Pokra\u010Dovat")))),
            this.state.cartForm.edit.item !== null &&
                React.createElement(Modal, { show: true, onHide: this.handleClose },
                    React.createElement(Modal.Header, { closeButton: true },
                        React.createElement(Modal.Title, null, "Zm\u011Bna po\u010Dtu")),
                    React.createElement(Modal.Body, null,
                        React.createElement(CartForm, { item: this.state.cartForm.edit.item, onChangeCount: this.handleChangeCount }))),
            React.createElement(ReactTooltip, null)));
    }
}
