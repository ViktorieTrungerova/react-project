import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class Navigation extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Row, { className: 'navigation' },
                React.createElement(Col, null,
                    React.createElement("a", { href: "http://localhost/react-project/www/index.html" },
                        React.createElement("div", { className: 'cart-step ' + (this.props.step == 1 ? 'active' : '') }, "Ko\u0161\u00EDk"))),
                React.createElement(Col, null,
                    React.createElement("a", { href: "http://localhost/react-project/www/delivery.html" },
                        React.createElement("div", { className: 'cart-step ' + (this.props.step == 2 ? 'active' : '') }, "Adresa"))),
                React.createElement(Col, null,
                    React.createElement("a", { href: "http://localhost/react-project/www/preview.html" },
                        React.createElement("div", { className: 'cart-step ' + (this.props.step == 3 ? 'active' : '') }, "Souhrn"))))));
    }
}
