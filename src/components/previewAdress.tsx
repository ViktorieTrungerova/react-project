import * as React from "react";
import {IBillingAddress, ICartContact, IDeliveryAddress} from "./deliveryForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Form} from "react-bootstrap";
import {types} from "util";

interface IPreviewAddressProps {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact,
}

export class PreviewAddress extends React.Component< IPreviewAddressProps, {}> {
    render() {
        return (
            <Container>
                <Row className={"margin-bottom"}>
                    <Col md="6">
                        <h2>Fakturační adresa</h2>
                        <table className="table">

                            <tbody>
                            <tr>
                                <td>Jméno a příjmení</td>
                                <td>{this.props.billingAddress.name} {this.props.billingAddress.lastname}</td>
                            </tr>
                            <tr>
                                <td>Společnost</td>
                                <td>{this.props.billingAddress.company}</td>
                            </tr>
                            <tr>
                                <td>IČ</td>
                                <td>{this.props.billingAddress.ic}</td>
                            </tr>
                            <tr>
                                <td>DIČ</td>
                                <td>{this.props.billingAddress.dic}</td>
                            </tr>
                            <tr>
                                <td>Město</td>
                                <td>{this.props.billingAddress.city}</td>
                            </tr>
                            <tr>
                                <td>Ulice</td>
                                <td>{this.props.billingAddress.street}</td>
                            </tr>
                            <tr>
                                <td>PSČ</td>
                                <td>{this.props.billingAddress.zip}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md="6" className={"margin-bottom"}>
                        <h2>Doručovací adresa</h2>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>Jméno a příjmení</td>
                                <td>{this.props.deliveryAddress.name} {this.props.deliveryAddress.lastname}</td>
                            </tr>
                            <tr>
                                <td>Společnost</td>
                                <td>{this.props.deliveryAddress.company}</td>
                            </tr>
                            <tr>
                                <td>IČ</td>
                                <td>{this.props.deliveryAddress.ic}</td>
                            </tr>
                            <tr>
                                <td>DIČ</td>
                                <td>{this.props.deliveryAddress.dic}</td>
                            </tr>
                            <tr>
                                <td>Město</td>
                                <td>{this.props.deliveryAddress.city}</td>
                            </tr>
                            <tr>
                                <td>Ulice</td>
                                <td>{this.props.deliveryAddress.street}</td>
                            </tr>
                            <tr>
                                <td>PSČ</td>
                                <td>{this.props.deliveryAddress.zip}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col className={"margin-bottom"}>
                        <h2>Kontakt</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{this.props.contact.email}</td>
                            </tr>
                            <tr>
                                <td>Telefon</td>
                                <td>{this.props.contact.phone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
