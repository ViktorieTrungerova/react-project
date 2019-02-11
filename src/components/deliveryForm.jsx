"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var DeliveryForm = /** @class */ (function (_super) {
    __extends(DeliveryForm, _super);
    function DeliveryForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnChange = function (e) {
            var isSame = (e.target.checked);
            _this.props.onChange(isSame);
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            var billingAddress = {
                name: e.target.elements['billingFirstname'].value,
                lastname: e.target.elements['billingLastname'].value,
                company: e.target.elements['billingCompany'].value,
                ic: e.target.elements['billingIC'].value,
                dic: e.target.elements['billingDIC'].value,
                city: e.target.elements['billingCity'].value,
                street: e.target.elements['billingStreet'].value,
                zip: e.target.elements['billingZip'].value,
            };
            var deliveryAddress = {
                name: e.target.elements['deliveryFirstname'].value,
                lastname: e.target.elements['deliveryLastname'].value,
                company: e.target.elements['deliveryCompany'].value,
                ic: e.target.elements['deliveryIC'].value,
                dic: e.target.elements['deliveryDIC'].value,
                city: e.target.elements['deliveryCity'].value,
                street: e.target.elements['deliveryStreet'].value,
                zip: e.target.elements['deliveryZip'].value,
            };
            var contact = {
                phone: e.target.elements['billingPhone'].value,
                email: e.target.elements['billingEmail'].value,
            };
            _this.props.onSubmit(billingAddress, deliveryAddress, contact);
        };
        return _this;
    }
    DeliveryForm.prototype.render = function () {
        return (<react_bootstrap_1.Container>
                <react_bootstrap_1.Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Fakturační adresa</legend>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formName">
                                    <react_bootstrap_1.Form.Label>Jméno</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingFirstname'} defaultValue={this.props.billingAddress.name} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formLastname">
                                    <react_bootstrap_1.Form.Label>Příjmení</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingLastname'} defaultValue={this.props.billingAddress.lastname} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                        <Row_1.default>
                            <Col_1.default className="col-xs-4">
                                <react_bootstrap_1.FormGroup controlId="formCompany">
                                    <react_bootstrap_1.Form.Label>Společnost</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingCompany'} defaultValue={this.props.billingAddress.company} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                            <Col_1.default className="col-xs-4">
                                <react_bootstrap_1.FormGroup controlId="formIC">
                                    <react_bootstrap_1.Form.Label>IČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingIC'} defaultValue={this.props.billingAddress.ic} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                            <Col_1.default className="col-xs-4">
                                <react_bootstrap_1.FormGroup controlId="formDIC">
                                    <react_bootstrap_1.Form.Label>DIČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingDIC'} defaultValue={this.props.billingAddress.dic} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formCity">
                                    <react_bootstrap_1.Form.Label>Město</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingCity'} defaultValue={this.props.billingAddress.city}/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formStreet">
                                    <react_bootstrap_1.Form.Label>Ulice</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingStreet'} type="text" defaultValue={this.props.billingAddress.street}/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formZip">
                                    <react_bootstrap_1.Form.Label>PSČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingZip'} defaultValue={this.props.billingAddress.zip} type="number"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formPhone">
                                    <react_bootstrap_1.Form.Label>Telefon</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingPhone'} defaultValue={this.props.contact.phone} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formEmail">
                                    <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'billingEmail'} defaultValue={this.props.contact.email} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                            <Col_1.default sm="12">
                                        <react_bootstrap_1.Form.Check onChange={this.handleOnChange} name={'checkbox'} type={'checkbox'} defaultChecked={this.props.isDeliverySameBilling} label={'Fakturační adresa stejná jak doručovací'}/>
                            </Col_1.default>
                        </Row_1.default>
                    </fieldset>
                    {this.props.isDeliverySameBilling &&
            <fieldset>
                        <legend>Doručovací adresa</legend>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formName">
                                    <react_bootstrap_1.Form.Label>Jméno</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryFirstname'} defaultValue={this.props.deliveryAddress.name} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formLastname">
                                    <react_bootstrap_1.Form.Label>Příjmení</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryLastname'} defaultValue={this.props.deliveryAddress.lastname} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formCompany">
                                    <react_bootstrap_1.Form.Label>Společnost</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryCompany'} defaultValue={this.props.deliveryAddress.company} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formCity">
                                    <react_bootstrap_1.Form.Label>Město</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryCity'} defaultValue={this.props.deliveryAddress.city}/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formStreet">
                                    <react_bootstrap_1.Form.Label>Ulice</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryStreet'} defaultValue={this.props.deliveryAddress.street} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formZip">
                                    <react_bootstrap_1.Form.Label>PSČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryZip'} defaultValue={this.props.deliveryAddress.zip} type="number"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                        <Row_1.default>
                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formIC">
                                    <react_bootstrap_1.Form.Label>IČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryIC'} defaultValue={this.props.deliveryAddress.ic} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>

                            <Col_1.default>
                                <react_bootstrap_1.FormGroup controlId="formDIC">
                                    <react_bootstrap_1.Form.Label>DIČ</react_bootstrap_1.Form.Label>
                                    <react_bootstrap_1.FormControl name={'deliveryDIC'} defaultValue={this.props.deliveryAddress.dic} type="text"/>
                                </react_bootstrap_1.FormGroup>
                            </Col_1.default>
                        </Row_1.default>
                    </fieldset>}
                    <Row_1.default>
                        <Col_1.default>
                            <react_bootstrap_1.Button type="submit">
                                Uložit
                            </react_bootstrap_1.Button>
                        </Col_1.default>
                    </Row_1.default>
                </react_bootstrap_1.Form>
            </react_bootstrap_1.Container>);
    };
    return DeliveryForm;
}(React.Component));
exports.DeliveryForm = DeliveryForm;
