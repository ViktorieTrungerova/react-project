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
var cartTable_1 = require("./cartTable");
var cartForm_1 = require("./cartForm");
var react_bootstrap_1 = require("react-bootstrap");
var PNotify_1 = require("pnotify/dist/es/PNotify");
var navigation_1 = require("./navigation");
var Button_1 = require("react-bootstrap/Button");
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var addItemForm_1 = require("./addItemForm");
var react_tooltip_1 = require("react-tooltip");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var cartStorage_1 = require("./cartStorage");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faPlus);
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.setState = function (state) {
            _super.prototype.setState.call(_this, state);
            _this.storage.saveCart(_this.state);
        };
        _this.handleClose = function () {
            _this.setState({
                cartForm: {
                    edit: {
                        item: null,
                    }
                },
                showModal: false,
            });
        };
        _this.handleShowModal = function () {
            _this.setState({ showModal: true });
        };
        _this.handleChangeCount = function (item, count) {
            _this.state.items.map(function (stateItem, index, array) {
                if (item.id === stateItem.id) {
                    array[index].count = count;
                }
            });
            _this.setState({
                cartForm: {
                    edit: {
                        item: null,
                    }
                }
            });
        };
        _this.handleOnAddItem = function (product, count) {
            _this.state.items.push({
                id: null,
                name: product.name,
                count: count,
                unit: product.unit,
                price: product.price,
            });
            _this.setState(_this.state);
        };
        _this.handleClickRemove = function (item) {
            _this.state.items.map(function (stateItem, index, array) {
                if (item.id === stateItem.id) {
                    array.splice(index, 1);
                }
                _this.setState(_this.state);
            });
            PNotify_1.default.success({
                text: "Položka byla odebrána",
                type: 'notice',
                stack: {
                    "dir1": "up",
                    "dir2": "left",
                    "firstpos1": 50,
                    "firstpos2": 25
                }
            });
        };
        _this.handleClickEdit = function (item) {
            _this.setState({
                cartForm: {
                    edit: {
                        item: item,
                    }
                }
            });
        };
        _this.storage = new cartStorage_1.CartStorage();
        var state = _this.storage.getCart();
        if (state === null) {
            _this.state = {
                title: 'Košík',
                cartForm: {
                    edit: {
                        item: null,
                    },
                },
                items: [],
                showModal: false,
            };
        }
        else {
            _this.state = state;
        }
        return _this;
    }
    Cart.prototype.render = function () {
        return (<div>
                <navigation_1.Navigation step={1}/>
                <Container_1.default>
                    <Row_1.default>
                        <Col_1.default className={'text-align-r margin-top'}>
                            <Button_1.default variant="primary" onClick={this.handleShowModal} data-tip="Přidat položku">
                                <div>
                                    <react_fontawesome_1.FontAwesomeIcon icon="plus"/>
                                </div>
                            </Button_1.default>
                        </Col_1.default>
                    </Row_1.default>
                </Container_1.default>

                <react_bootstrap_1.Modal show={this.state.showModal} onHide={this.handleClose}>
                    <react_bootstrap_1.Modal.Header closeButton>
                        <react_bootstrap_1.Modal.Title>Přidat zboží</react_bootstrap_1.Modal.Title>
                    </react_bootstrap_1.Modal.Header>
                    <react_bootstrap_1.Modal.Body>
                        <addItemForm_1.AddItemForm items={this.storage.getAllProducts()} onAddItem={this.handleOnAddItem}/>
                    </react_bootstrap_1.Modal.Body>
                </react_bootstrap_1.Modal>

                <cartTable_1.CartTable title={this.state.title} showEdit={true} items={this.state.items} handleClickEdit={this.handleClickEdit} handleClickRemove={this.handleClickRemove}/>

                <Container_1.default>
                    <Row_1.default>
                        <Col_1.default className={'text-align-r margin-top'}>
                            <Button_1.default className="primary" href="http://localhost/react-project/www/delivery.html">Pokračovat</Button_1.default>
                        </Col_1.default>
                    </Row_1.default>
                </Container_1.default>

                {this.state.cartForm.edit.item !== null &&
            <react_bootstrap_1.Modal show={true} onHide={this.handleClose}>
                        <react_bootstrap_1.Modal.Header closeButton>
                            <react_bootstrap_1.Modal.Title>Změna počtu</react_bootstrap_1.Modal.Title>
                        </react_bootstrap_1.Modal.Header>
                        <react_bootstrap_1.Modal.Body>
                            <cartForm_1.CartForm item={this.state.cartForm.edit.item} onChangeCount={this.handleChangeCount}/>
                        </react_bootstrap_1.Modal.Body>
                    </react_bootstrap_1.Modal>}
                <react_tooltip_1.default />
            </div>);
    };
    return Cart;
}(React.Component));
exports.Cart = Cart;
