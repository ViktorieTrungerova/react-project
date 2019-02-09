import * as React from "react";
import { DeliveryForm } from "./deliveryForm";
import { Navigation } from "./navigation";
import { Col, Row, Container, Button } from "react-bootstrap";
export class Delivery extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSaveAddress = (deliveryAddress, billingAddress, contact) => {
            this.setState({
                deliveryAddress: deliveryAddress,
                billingAddress: billingAddress,
                contact: contact,
            });
        };
        this.handleOnChange = (isSame) => {
            this.setState({
                isDeliverySameBilling: isSame,
            });
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
            isDeliverySameBilling: false,
            showModal: false,
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Navigation, { step: 2 }),
            this.state &&
                React.createElement(DeliveryForm, { deliveryAddress: this.state.deliveryAddress, billingAddress: this.state.billingAddress, onSubmit: this.handleSaveAddress, onChange: this.handleOnChange, contact: this.state.contact, isDeliverySameBilling: this.state.isDeliverySameBilling }),
            React.createElement(Container, null,
                React.createElement(Row, null,
                    React.createElement(Col, { className: 'text-align-l margin-bottom' },
                        React.createElement(Button, { href: "http://localhost/react-project/www/index.html" }, "Zp\u011Bt")),
                    React.createElement(Col, { className: 'text-align-r margin-bottom' },
                        React.createElement(Button, { href: "http://localhost/react-project/www/preview.html" }, "Pokra\u010Dovat"))))));
    }
}
