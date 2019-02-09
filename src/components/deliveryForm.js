import * as React from "react";
import { Form, Button, FormGroup, FormControl, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class DeliveryForm extends React.Component {
    constructor() {
        super(...arguments);
        this.handleOnChange = (e) => {
            const isSame = (e.target.checked);
            this.props.onChange(isSame);
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            const billingAddress = {
                name: e.target.elements['billingFirstname'].value,
                lastname: e.target.elements['billingLastname'].value,
                company: e.target.elements['billingCompany'].value,
                ic: e.target.elements['billingIC'].value,
                dic: e.target.elements['billingDIC'].value,
                city: e.target.elements['billingCity'].value,
                street: e.target.elements['billingStreet'].value,
                zip: e.target.elements['billingZip'].value,
            };
            const deliveryAddress = {
                name: e.target.elements['deliveryFirstname'].value,
                lastname: e.target.elements['deliveryLastname'].value,
                company: e.target.elements['deliveryCompany'].value,
                ic: e.target.elements['deliveryIC'].value,
                dic: e.target.elements['deliveryDIC'].value,
                city: e.target.elements['deliveryCity'].value,
                street: e.target.elements['deliveryStreet'].value,
                zip: e.target.elements['deliveryZip'].value,
            };
            const contact = {
                phone: e.target.elements['billingPhone'].value,
                email: e.target.elements['billingEmail'].value,
            };
            this.props.onSubmit(billingAddress, deliveryAddress, contact);
        };
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Form, { onSubmit: this.handleSubmit },
                React.createElement("fieldset", null,
                    React.createElement("legend", null, "Faktura\u010Dn\u00ED adresa"),
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formName" },
                                React.createElement(Form.Label, null, "Jm\u00E9no"),
                                React.createElement(FormControl, { name: 'billingFirstname', defaultValue: this.props.billingAddress.name, type: "text" }))),
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formLastname" },
                                React.createElement(Form.Label, null, "P\u0159\u00EDjmen\u00ED"),
                                React.createElement(FormControl, { name: 'billingLastname', defaultValue: this.props.billingAddress.lastname, type: "text" })))),
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "col-xs-4" },
                            React.createElement(FormGroup, { controlId: "formCompany" },
                                React.createElement(Form.Label, null, "Spole\u010Dnost"),
                                React.createElement(FormControl, { name: 'billingCompany', defaultValue: this.props.billingAddress.company, type: "text" }))),
                        React.createElement(Col, { className: "col-xs-4" },
                            React.createElement(FormGroup, { controlId: "formIC" },
                                React.createElement(Form.Label, null, "I\u010C"),
                                React.createElement(FormControl, { name: 'billingIC', defaultValue: this.props.billingAddress.ic, type: "text" }))),
                        React.createElement(Col, { className: "col-xs-4" },
                            React.createElement(FormGroup, { controlId: "formDIC" },
                                React.createElement(Form.Label, null, "DI\u010C"),
                                React.createElement(FormControl, { name: 'billingDIC', defaultValue: this.props.billingAddress.dic, type: "text" })))),
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formCity" },
                                React.createElement(Form.Label, null, "M\u011Bsto"),
                                React.createElement(FormControl, { name: 'billingCity', defaultValue: this.props.billingAddress.city }))),
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formStreet" },
                                React.createElement(Form.Label, null, "Ulice"),
                                React.createElement(FormControl, { name: 'billingStreet', type: "text", defaultValue: this.props.billingAddress.street }))),
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formZip" },
                                React.createElement(Form.Label, null, "PS\u010C"),
                                React.createElement(FormControl, { name: 'billingZip', defaultValue: this.props.billingAddress.zip, type: "number" })))),
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formPhone" },
                                React.createElement(Form.Label, null, "Telefon"),
                                React.createElement(FormControl, { name: 'billingPhone', defaultValue: this.props.contact.phone, type: "text" }))),
                        React.createElement(Col, null,
                            React.createElement(FormGroup, { controlId: "formEmail" },
                                React.createElement(Form.Label, null, "Email"),
                                React.createElement(FormControl, { name: 'billingEmail', defaultValue: this.props.contact.email, type: "text" }))),
                        React.createElement(Col, { sm: "12" },
                            React.createElement(Form.Check, { onChange: this.handleOnChange, name: 'checkbox', type: 'checkbox', defaultChecked: this.props.isDeliverySameBilling, label: 'Fakturační adresa stejná jak doručovací' })))),
                this.props.isDeliverySameBilling &&
                    React.createElement("fieldset", null,
                        React.createElement("legend", null, "Doru\u010Dovac\u00ED adresa"),
                        React.createElement(Row, null,
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formName" },
                                    React.createElement(Form.Label, null, "Jm\u00E9no"),
                                    React.createElement(FormControl, { name: 'deliveryFirstname', defaultValue: this.props.deliveryAddress.name, type: "text" }))),
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formLastname" },
                                    React.createElement(Form.Label, null, "P\u0159\u00EDjmen\u00ED"),
                                    React.createElement(FormControl, { name: 'deliveryLastname', defaultValue: this.props.deliveryAddress.lastname, type: "text" }))),
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formCompany" },
                                    React.createElement(Form.Label, null, "Spole\u010Dnost"),
                                    React.createElement(FormControl, { name: 'deliveryCompany', defaultValue: this.props.deliveryAddress.company, type: "text" })))),
                        React.createElement(Row, null,
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formCity" },
                                    React.createElement(Form.Label, null, "M\u011Bsto"),
                                    React.createElement(FormControl, { name: 'deliveryCity', defaultValue: this.props.deliveryAddress.city }))),
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formStreet" },
                                    React.createElement(Form.Label, null, "Ulice"),
                                    React.createElement(FormControl, { name: 'deliveryStreet', defaultValue: this.props.deliveryAddress.street, type: "text" }))),
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formZip" },
                                    React.createElement(Form.Label, null, "PS\u010C"),
                                    React.createElement(FormControl, { name: 'deliveryZip', defaultValue: this.props.deliveryAddress.zip, type: "number" })))),
                        React.createElement(Row, null,
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formIC" },
                                    React.createElement(Form.Label, null, "I\u010C"),
                                    React.createElement(FormControl, { name: 'deliveryIC', defaultValue: this.props.deliveryAddress.ic, type: "text" }))),
                            React.createElement(Col, null,
                                React.createElement(FormGroup, { controlId: "formDIC" },
                                    React.createElement(Form.Label, null, "DI\u010C"),
                                    React.createElement(FormControl, { name: 'deliveryDIC', defaultValue: this.props.deliveryAddress.dic, type: "text" }))))),
                React.createElement(Row, null,
                    React.createElement(Col, null,
                        React.createElement(Button, { type: "submit" }, "Ulo\u017Eit"))))));
    }
}
