import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface INavigationProps {
    step: number
}

export class Navigation extends React.Component< INavigationProps, {}> {

    render() {
        return (
            <Container>
                <Row className={'navigation'}>
                    <Col>
                        <a href="http://localhost/react-project/www/index.html">
                        <div className={'cart-step ' + (this.props.step == 1 ? 'active' : '')}>
                            Košík
                        </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="http://localhost/react-project/www/delivery.html">
                            <div  className={'cart-step ' + (this.props.step == 2 ? 'active' : '')}>
                                Adresa
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="http://localhost/react-project/www/preview.html">
                            <div className={'cart-step ' + (this.props.step == 3 ? 'active' : '')}>
                                Souhrn
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}
