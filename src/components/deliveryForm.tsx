import * as React from "react";
import {Form, Button, FormGroup, FormControl, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// interface IAddressProps {
//     deliveryAddress: IDeliveryAddress,
//     billingAddress: IBillingAddress,
//     contact: ICartContact
//     onSubmit (billingAddress:IBillingAddress, deliveryAddress: IDeliveryAddress, contact: ICartContact):void,
//
// }

interface IDeliveryFormProps {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact
    onSubmit(billingAddress:IBillingAddress, deliveryAddress: IDeliveryAddress, contact: ICartContact):void,
    onChange(isSame: boolean): void;
    isDeliverySameBilling: boolean;
}

export interface IDeliveryAddress {
    name: string,
    lastname: string,
    company: string,
    ic: string,
    dic: string,
    city: string,
    street: string,
    zip: string,
}

export interface IBillingAddress {
    name: string,
    lastname: string,
    company: string,
    ic: string,
    dic: string,
    city: string,
    street: string,
    zip: string,
}

export interface ICartContact {
    phone: string;
    email: string;
}


export class DeliveryForm extends React.Component<IDeliveryFormProps, {}> {

    handleOnChange= (e) => {
       const isSame = (e.target.checked);
       this.props.onChange(isSame);
    };

    handleSubmit= (e) => {
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
            phone: e.target.elements['billingPhone'].value, // @todo prestehovat mimo strukturu, treba do dalsi struktur
            email: e.target.elements['billingEmail'].value,
        };

        this.props.onSubmit(billingAddress, deliveryAddress, contact);
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Fakturační adresa</legend>
                        <Row>
                            <Col>
                                <FormGroup controlId="formName">
                                    <Form.Label>Jméno</Form.Label>
                                    <FormControl name={'billingFirstname'}
                                                 defaultValue= {this.props.billingAddress.name}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formLastname">
                                    <Form.Label>Příjmení</Form.Label>
                                    <FormControl name={'billingLastname'}
                                                 defaultValue= {this.props.billingAddress.lastname}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-xs-4">
                                <FormGroup controlId="formCompany">
                                    <Form.Label>Společnost</Form.Label>
                                    <FormControl name={'billingCompany'}
                                                 defaultValue= {this.props.billingAddress.company}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                            <Col className="col-xs-4">
                                <FormGroup controlId="formIC">
                                    <Form.Label>IČ</Form.Label>
                                    <FormControl name={'billingIC'}
                                                 defaultValue= {this.props.billingAddress.ic}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                            <Col className="col-xs-4">
                                <FormGroup controlId="formDIC">
                                    <Form.Label>DIČ</Form.Label>
                                    <FormControl name={'billingDIC'}
                                                 defaultValue= {this.props.billingAddress.dic}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup controlId="formCity">
                                    <Form.Label>Město</Form.Label>
                                    <FormControl name={'billingCity'}
                                                 defaultValue= {this.props.billingAddress.city}/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formStreet">
                                    <Form.Label>Ulice</Form.Label>
                                    <FormControl name={'billingStreet'} type="text"
                                                 defaultValue= {this.props.billingAddress.street}/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formZip">
                                    <Form.Label>PSČ</Form.Label>
                                    <FormControl name={'billingZip'}
                                                 defaultValue= {this.props.billingAddress.zip}
                                                 type="number"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup controlId="formPhone">
                                    <Form.Label>Telefon</Form.Label>
                                    <FormControl name={'billingPhone'}
                                                 defaultValue={this.props.contact.phone}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <FormControl name={'billingEmail'}
                                                 defaultValue={this.props.contact.email}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                        <Form.Check
                                            onChange={this.handleOnChange}
                                            name={'checkbox'}
                                            type={'checkbox'}
                                            defaultChecked={this.props.isDeliverySameBilling}
                                            label={'Fakturační adresa stejná jak doručovací'} />
                            </Col>
                        </Row>
                    </fieldset>
                    {this.props.isDeliverySameBilling &&
                    <fieldset>
                        <legend>Doručovací adresa</legend>
                        <Row>
                            <Col>
                                <FormGroup controlId="formName">
                                    <Form.Label>Jméno</Form.Label>
                                    <FormControl name={'deliveryFirstname'}
                                                 defaultValue= {this.props.deliveryAddress.name}
                                                 type="text"/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formLastname">
                                    <Form.Label>Příjmení</Form.Label>
                                    <FormControl name={'deliveryLastname'}
                                                 defaultValue= {this.props.deliveryAddress.lastname}
                                                 type="text"/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formCompany">
                                    <Form.Label>Společnost</Form.Label>
                                    <FormControl name={'deliveryCompany'}
                                                 defaultValue= {this.props.deliveryAddress.company}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup controlId="formCity">
                                    <Form.Label>Město</Form.Label>
                                    <FormControl name={'deliveryCity'}
                                                 defaultValue= {this.props.deliveryAddress.city}/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formStreet">
                                    <Form.Label>Ulice</Form.Label>
                                    <FormControl name={'deliveryStreet'}
                                                 defaultValue= {this.props.deliveryAddress.street}
                                                 type="text"/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formZip">
                                    <Form.Label>PSČ</Form.Label>
                                    <FormControl name={'deliveryZip'}
                                                 defaultValue= {this.props.deliveryAddress.zip}
                                                 type="number"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup controlId="formIC">
                                    <Form.Label>IČ</Form.Label>
                                    <FormControl name={'deliveryIC'}
                                                 defaultValue= {this.props.deliveryAddress.ic}
                                                 type="text"/>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup controlId="formDIC">
                                    <Form.Label>DIČ</Form.Label>
                                    <FormControl name={'deliveryDIC'}
                                                 defaultValue= {this.props.deliveryAddress.dic}
                                                 type="text"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    }
                    <Row>
                        <Col>
                            <Button type="submit">
                                Uložit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        );
    }
}
