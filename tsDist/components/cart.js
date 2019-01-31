import * as React from "react";
import { CartTable } from "./cartTable";
import { CartForm } from "./cartForm";
import { Modal } from "react-bootstrap";
import PNotify from "pnotify/dist/es/PNotify";
export class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
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
        this.handleClickEdit = (item) => {
            this.setState({
                cartForm: {
                    edit: {
                        item: item,
                    }
                }
            });
        };
        this.handleClickRemove = (item) => {
            PNotify.alert({
                text: "Polozka byla odebrana",
                type: 'notice'
            });
        };
        this.state = this.getData();
    }
    render() {
        console.log(typeof this.state.cartForm);
        return (React.createElement("div", null,
            React.createElement(CartTable, { title: this.state.title, items: this.state.items, handleClickEdit: this.handleClickEdit, handleClickRemove: this.handleClickRemove }),
            this.state.cartForm.edit.item !== null &&
                React.createElement(Modal, { show: true },
                    React.createElement(Modal.Header, null,
                        React.createElement(Modal.Title, null, "Modal heading")),
                    React.createElement(Modal.Body, null,
                        React.createElement(CartForm, { item: this.state.cartForm.edit.item, onChangeCount: this.handleChangeCount })))));
    }
    getData() {
        return {
            title: 'Kosik',
            cartForm: {
                edit: {
                    item: null,
                },
            },
            items: [
                { id: 1, name: 'Jablko', price: 600, count: 27 },
                { id: 2, name: 'Hruska', price: 100, count: 26 },
                { id: 3, name: 'Banan', price: 300, count: 29 },
                { id: 4, name: 'Mandarinka', price: 700, count: 28 },
                { id: 5, name: 'Batata', price: 800, count: 25 },
                { id: 6, name: 'Cibule', price: 500, count: 256 },
            ],
        };
    }
}
