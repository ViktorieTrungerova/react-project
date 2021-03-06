import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class PreviewAddress extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Row, { className: "margin-bottom" },
                React.createElement(Col, { md: "6" },
                    React.createElement("h2", null, "Faktura\u010Dn\u00ED adresa"),
                    React.createElement("table", { className: "table" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Jm\u00E9no a p\u0159\u00EDjmen\u00ED"),
                                React.createElement("td", null,
                                    this.props.billingAddress.name,
                                    " ",
                                    this.props.billingAddress.lastname)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Spole\u010Dnost"),
                                React.createElement("td", null, this.props.billingAddress.company)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "I\u010C"),
                                React.createElement("td", null, this.props.billingAddress.ic)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "DI\u010C"),
                                React.createElement("td", null, this.props.billingAddress.dic)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "M\u011Bsto"),
                                React.createElement("td", null, this.props.billingAddress.city)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Ulice"),
                                React.createElement("td", null, this.props.billingAddress.street)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "PS\u010C"),
                                React.createElement("td", null, this.props.billingAddress.zip))))),
                React.createElement(Col, { md: "6", className: "margin-bottom" },
                    React.createElement("h2", null, "Doru\u010Dovac\u00ED adresa"),
                    React.createElement("table", { className: "table" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Jm\u00E9no a p\u0159\u00EDjmen\u00ED"),
                                React.createElement("td", null,
                                    this.props.deliveryAddress.name,
                                    " ",
                                    this.props.deliveryAddress.lastname)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Spole\u010Dnost"),
                                React.createElement("td", null, this.props.deliveryAddress.company)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "I\u010C"),
                                React.createElement("td", null, this.props.deliveryAddress.ic)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "DI\u010C"),
                                React.createElement("td", null, this.props.deliveryAddress.dic)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "M\u011Bsto"),
                                React.createElement("td", null, this.props.deliveryAddress.city)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Ulice"),
                                React.createElement("td", null, this.props.deliveryAddress.street)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "PS\u010C"),
                                React.createElement("td", null, this.props.deliveryAddress.zip))))),
                React.createElement(Col, { className: "margin-bottom" },
                    React.createElement("h2", null, "Kontakt"),
                    React.createElement("table", { className: "table" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Email"),
                                React.createElement("td", null, this.props.contact.email)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "Telefon"),
                                React.createElement("td", null, this.props.contact.phone))))))));
    }
}
