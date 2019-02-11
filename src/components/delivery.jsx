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
var deliveryForm_1 = require("./deliveryForm");
var navigation_1 = require("./navigation");
var react_bootstrap_1 = require("react-bootstrap");
var Delivery = /** @class */ (function (_super) {
    __extends(Delivery, _super);
    function Delivery(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleSaveAddress = function (deliveryAddress, billingAddress, contact) {
            _this.setState({
                deliveryAddress: deliveryAddress,
                billingAddress: billingAddress,
                contact: contact,
            });
        };
        _this.handleOnChange = function (isSame) {
            _this.setState({
                isDeliverySameBilling: isSame,
            });
        };
        _this.state = {
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
            showModal: false,
        };
        return _this;
    }
    Delivery.prototype.render = function () {
        return (<div>
                <navigation_1.Navigation step={2}/>
                {this.state &&
            <deliveryForm_1.DeliveryForm deliveryAddress={this.state.deliveryAddress} billingAddress={this.state.billingAddress} onSubmit={this.handleSaveAddress} onChange={this.handleOnChange} contact={this.state.contact} isDeliverySameBilling={this.state.isDeliverySameBilling}/>}
                <react_bootstrap_1.Container>
                    <react_bootstrap_1.Row>
                        <react_bootstrap_1.Col className={'text-align-l margin-bottom'}>
                            <react_bootstrap_1.Button href="http://localhost/react-project/www/index.html">Zpět</react_bootstrap_1.Button>
                        </react_bootstrap_1.Col>
                        <react_bootstrap_1.Col className={'text-align-r margin-bottom'}>
                            <react_bootstrap_1.Button href="http://localhost/react-project/www/preview.html">Pokračovat</react_bootstrap_1.Button>
                        </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                </react_bootstrap_1.Container>

            </div>);
    };
    return Delivery;
}(React.Component));
exports.Delivery = Delivery;
