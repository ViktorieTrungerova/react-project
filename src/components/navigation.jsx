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
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return (<Container_1.default>
                <Row_1.default className={'navigation'}>
                    <Col_1.default>
                        <a href="http://localhost/react-project/www/index.html">
                        <div className={'cart-step ' + (this.props.step == 1 ? 'active' : '')}>
                            Košík
                        </div>
                        </a>
                    </Col_1.default>
                    <Col_1.default>
                        <a href="http://localhost/react-project/www/delivery.html">
                            <div className={'cart-step ' + (this.props.step == 2 ? 'active' : '')}>
                                Adresa
                            </div>
                        </a>
                    </Col_1.default>
                    <Col_1.default>
                        <a href="http://localhost/react-project/www/preview.html">
                            <div className={'cart-step ' + (this.props.step == 3 ? 'active' : '')}>
                                Souhrn
                            </div>
                        </a>
                    </Col_1.default>
                </Row_1.default>
            </Container_1.default>);
    };
    return Navigation;
}(React.Component));
exports.Navigation = Navigation;
