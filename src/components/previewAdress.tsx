import * as React from "react";
import {IBillingAddress, ICartContact, IDeliveryAddress} from "./deliveryForm";

interface IPreviewAddressProps {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact,
}

export class PreviewAddress extends React.Component< IPreviewAddressProps, {}> {
    render() {
        return (
            <div>

                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <h2>Fakturační adresa</h2>
                        <table className="table">

                            <tbody>
                            <tr>
                                <td className={"text-left"}>Jméno a příjmení</td>
                                <td className={"text-left"}>{this.props.billingAddress.name} {this.props.billingAddress.lastname}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Společnost</td>
                                <td className={"text-left"}>{this.props.billingAddress.company}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>IČ</td>
                                <td className={"text-left"}>{this.props.billingAddress.ic}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>DIČ</td>
                                <td className={"text-left"}>{this.props.billingAddress.dic}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Město</td>
                                <td className={"text-left"}>{this.props.billingAddress.city}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Ulice</td>
                                <td className={"text-left"}>{this.props.billingAddress.street}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>PSČ</td>
                                <td className={"text-left"}>{this.props.billingAddress.zip}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={"col-md-6"}>
                        <h2>Doručovací adresa</h2>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td className={"text-left"}>Jméno a příjmení</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.name} {this.props.deliveryAddress.lastname}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Společnost</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.company}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>IČ</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.ic}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>DIČ</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.dic}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Město</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.city}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Ulice</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.street}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>PSČ</td>
                                <td className={"text-left"}>{this.props.deliveryAddress.zip}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={"col-xs-12"}>
                        <h2>Kontakt</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td className={"text-left"}>Email</td>
                                <td className={"text-left"}>{this.props.contact.email}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"}>Telefon</td>
                                <td className={"text-left"}>{this.props.contact.phone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
