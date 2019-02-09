import * as React from "react";
import { CartTable } from "./cartTable";
import { PreviewAddress } from "./previewAdress";
import { Navigation } from "./navigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Container } from "react-bootstrap";
export class PreviewCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleOnChangeChecked = (e) => {
            const isChecked = (e.target.checked);
            this.setState({
                isChecked: isChecked,
            });
        };
        this.handleSendCart = () => {
            alert("Objednávka byla odeslána");
        };
        this.state = {
            deliveryAddress: {
                name: 'Viki',
                lastname: 'Trungerova',
                company: 'Testovaci',
                ic: 'Testovaci123',
                dic: '456',
                city: 'Zlin',
                street: 'Testovaci',
                zip: '78922',
            },
            billingAddress: {
                name: 'Viki',
                lastname: 'Trungerova',
                company: 'Testovaci',
                ic: 'Testovaci123',
                dic: '456',
                city: 'Zlin',
                street: 'Testovaci',
                zip: '78922',
            },
            contact: {
                phone: '739 123 456',
                email: 'v.trungerova@seznam.cz',
            },
            items: [
                { id: 1, name: 'Jablko', price: 600, count: 27, unit: 'Ks' },
                { id: 2, name: 'Hruška', price: 100, count: 26, unit: 'Kg' },
                { id: 3, name: 'Banán', price: 300, count: 29, unit: 'Ks' },
                { id: 4, name: 'Mandarinka', price: 700, count: 28, unit: 'Kg' },
                { id: 5, name: 'Batata', price: 800, count: 25, unit: 'Ks' },
                { id: 6, name: 'Cibule', price: 500, count: 256, unit: 'Kg' },
            ],
            isChecked: false,
        };
    }
    render() {
        if (this.state === null)
            return;
        return (React.createElement("div", null,
            React.createElement(Navigation, { step: 3 }),
            React.createElement("div", null,
                React.createElement(CartTable, { showEdit: false, items: this.state.items, title: 'Položky objednávky' }),
                React.createElement("div", { className: "margin-top" }),
                React.createElement(PreviewAddress, { deliveryAddress: this.state.deliveryAddress, billingAddress: this.state.billingAddress, contact: this.state.contact })),
            React.createElement(Container, null,
                React.createElement(Row, null,
                    React.createElement(Col, { sm: '12', className: 'margin-bottom' },
                        React.createElement(Form.Check, { name: 'checkbox', type: 'checkbox', defaultChecked: this.state.isChecked, label: 'Souhlasím s podmínkami', onChange: this.handleOnChangeChecked })),
                    React.createElement(Col, { className: 'text-align-l margin-bottom' },
                        React.createElement(Button, { href: "http://localhost/react-project/www/delivery.html" }, "Zp\u011Bt")),
                    React.createElement(Col, { className: 'margin-bottom text-align-r' },
                        React.createElement(Button, { onClick: this.handleSendCart, disabled: !this.state.isChecked }, "Objednat"))))));
    }
}
