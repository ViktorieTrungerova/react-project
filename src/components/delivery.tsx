import * as React from "react";
import {DeliveryForm, IBillingAddress, ICartContact, IDeliveryAddress} from "./deliveryForm";
import {Navigation} from "./navigation"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IDeliveryState {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact,
    isDeliverySameBilling: boolean;

}

export class Delivery extends React.Component<{}, IDeliveryState> {

    constructor(props, context){
        super(props, context);
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
            };
    }

    render() {
        return (
            <div>
                <Navigation step={2}/>
                {this.state &&
                    <DeliveryForm
                        deliveryAddress={this.state.deliveryAddress}
                        billingAddress={this.state.billingAddress}
                        onSubmit={this.handleSaveAddress}
                        onChange={this.handleOnChange}
                        contact={this.state.contact}
                        isDeliverySameBilling={this.state.isDeliverySameBilling}/>
                }
                <Container>
                    <Row>
                        <Col className={'text-align-l margin-bottom'}>
                            <Button href="http://localhost/react-project/www/index.html">Zpět</Button>
                        </Col>
                        <Col className={'text-align-r margin-bottom'}>
                            <Button href="http://localhost/react-project/www/preview.html">Pokračovat</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }

    handleSaveAddress = (deliveryAddress: IDeliveryAddress, billingAddress: IBillingAddress, contact: ICartContact) => {
        this.setState({
            deliveryAddress: deliveryAddress,
            billingAddress: billingAddress,
            contact: contact,
        });
    };

    handleOnChange = (isSame :boolean) => {
        this.setState({
            isDeliverySameBilling: isSame,
        });
    };
}
