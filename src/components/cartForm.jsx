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
var CartForm = /** @class */ (function (_super) {
    __extends(CartForm, _super);
    function CartForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangeCount = function (e) {
            e.preventDefault();
            var count = e.target.elements['count'].value;
            _this.props.onChangeCount(_this.props.item, count);
            return false;
        };
        return _this;
    }
    CartForm.prototype.render = function () {
        return (<react_bootstrap_1.Form onSubmit={this.handleChangeCount}>
                <react_bootstrap_1.Form.Group controlId="formBasicEmail">
                    <react_bootstrap_1.Form.Label>Počet</react_bootstrap_1.Form.Label>
                    <react_bootstrap_1.Form.Control name="count" type="number" min={1} defaultValue={this.props.item.count.toString()}/>
                    <react_bootstrap_1.Button className={'margin-top margin-right'} type="submit" variant="primary">Změna množství</react_bootstrap_1.Button>
                </react_bootstrap_1.Form.Group>
            </react_bootstrap_1.Form>);
    };
    return CartForm;
}(React.Component));
exports.CartForm = CartForm;
