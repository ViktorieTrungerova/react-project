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
var react_tooltip_1 = require("react-tooltip");
var reactstrap_1 = require("reactstrap");
var react_number_format_1 = require("react-number-format");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faPencilAlt, free_solid_svg_icons_1.faTrashAlt);
var CartTable = /** @class */ (function (_super) {
    __extends(CartTable, _super);
    function CartTable(props, context) {
        return _super.call(this, props, context) || this;
    }
    CartTable.prototype.render = function () {
        var _this = this;
        return (<reactstrap_1.Container>
                <div>
                    <h2>{this.props.title}</h2>
                    <table className="table">
                        <tr>
                            <th>Název položky</th>
                            <th>Cena</th>
                            <th>Počet</th>
                            <th>Cena celkem</th>
                            {this.props.showEdit &&
            <th></th>}
                        </tr>
                        {this.props.items.map(function (item) {
            return (<tr>
                                    <td>{item.name}</td>
                                    <td><react_number_format_1.default value={item.price} displayType={'text'} thousandSeparator={true} suffix={' Kč'}/></td>
                                    <td>{item.count} {item.unit}</td>
                                    <td><react_number_format_1.default value={item.count * item.price} displayType={'text'} thousandSeparator={true} suffix={' Kč'}/></td>
                                    {_this.props.showEdit &&
                <td>
                                        <react_bootstrap_1.Button className={'margin-right'} data-tip="Editovat" variant="primary" onClick={function (e) { return _this.props.handleClickEdit(item); }}>
                                            <div>
                                                <react_fontawesome_1.FontAwesomeIcon icon="pencil-alt"/>
                                            </div>
                                        </react_bootstrap_1.Button>
                                        <react_bootstrap_1.Button data-tip="Smazat" variant="danger" onClick={function (e) { return _this.props.handleClickRemove(item); }}>
                                            <div>
                                                <react_fontawesome_1.FontAwesomeIcon icon="trash-alt"/>
                                            </div>
                                        </react_bootstrap_1.Button>
                                    </td>}
                                </tr>);
        })}
                    </table>
                    <react_tooltip_1.default />
                </div>
            </reactstrap_1.Container>);
    };
    return CartTable;
}(React.Component));
exports.CartTable = CartTable;
