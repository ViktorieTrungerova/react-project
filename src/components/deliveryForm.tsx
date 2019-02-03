import * as React from "react";
import {Form, Button, FormGroup, FormControl} from "react-bootstrap";

interface IAddressProps {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    onSubmit (billingAddress:IBillingAddress, deliveryAddress: IDeliveryAddress, contact: ICartContact): void,
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

export class DeliveryForm extends React.Component<IAddressProps, {}> {

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
                <Form onSubmit={this.handleSubmit}
                    //validateAll={this._validateForm}
                    >
                    <fieldset>
                        <legend>Fakturační adresa</legend>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formName">
                                    <Form.Label>Jméno</Form.Label>
                                    <FormControl name={'billingFirstname'} type="text"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formLastname">
                                    <Form.Label>Město</Form.Label>
                                    <FormControl name={'billingLastname'} type="text"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formCompany">
                                    <Form.Label>Společnost</Form.Label>
                                    <FormControl name={'billingCompany'} type="text"/>
                                </FormGroup>
                            </div>
                            <div className="col-xs-4">
                                <FormGroup controlId="formIC">
                                    <Form.Label>IČ</Form.Label>
                                    <FormControl name={'billingIC'} type="number"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formDIC">
                                    <Form.Label>DIČ</Form.Label>
                                    <FormControl name={'billingDIC'} type="number"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formCity">
                                    <Form.Label>Město</Form.Label>
                                    <FormControl name={'billingCity'}/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formStreet">
                                    <Form.Label>Ulice</Form.Label>
                                    <FormControl name={'billingStreet'} type="text"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formZip">
                                    <Form.Label>PSČ</Form.Label>
                                    <FormControl name={'billingZip'} type="number"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formPhone">
                                    <Form.Label>Telefon</Form.Label>
                                    <FormControl name={'billingPhone'} type="number"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <FormControl name={'billingEmail'} type="text"/>
                                </FormGroup>
                            </div>
                            <div className="col-xs-12">
                                <FormGroup>
                                    <Form.Check type="checkbox" label="Doručovací adresa je stejná fakturační"/>
                                </FormGroup>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Doručovací adresa</legend>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formName">
                                    <Form.Label>Jméno</Form.Label>
                                    <FormControl name={'deliveryFirstname'} type="text"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formLastname">
                                    <Form.Label>Příjmení</Form.Label>
                                    <FormControl name={'deliveryLastname'} type="text"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                            <FormGroup controlId="formCompany">
                                <Form.Label>Společnost</Form.Label>
                                <FormControl name={'deliveryCompany'} type="text"/>
                            </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formCity">
                                    <Form.Label>Město</Form.Label>
                                    <FormControl name={'deliveryCity'}/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formStreet">
                                    <Form.Label>Ulice</Form.Label>
                                    <FormControl name={'deliveryStreet'} type="text"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formZip">
                                    <Form.Label>PSČ</Form.Label>
                                    <FormControl name={'deliveryZip'} type="number"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-4">
                                <FormGroup controlId="formIC">
                                    <Form.Label>IČ</Form.Label>
                                    <FormControl name={'deliveryIC'} type="number"/>
                                </FormGroup>
                            </div>

                            <div className="col-xs-4">
                                <FormGroup controlId="formDIC">
                                    <Form.Label>DIČ</Form.Label>
                                    <FormControl name={'deliveryDIC'} type="number"/>
                                </FormGroup>
                            </div>
                        </div>
                    </fieldset>
                    <Button type="submit">
                        Uložit
                    </Button>
                </Form>
        );
    }
}