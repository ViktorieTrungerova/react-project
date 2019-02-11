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
var AddItemForm = /** @class */ (function (_super) {
    __extends(AddItemForm, _super);
    function AddItemForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAddItem = function (e) {
            e.preventDefault();
            var addItemId = Number(e.target.elements['itemSelect'].value);
            var count = e.target.elements['count'].value;
            var selectedProduct = null;
            _this.props.items.map(function (product) {
                if (product.id === addItemId) {
                    selectedProduct = product;
                    return;
                }
            });
            _this.props.onAddItem(selectedProduct, count);
        };
        return _this;
    }
    AddItemForm.prototype.render = function () {
        return (<div>
           <react_bootstrap_1.Form onSubmit={this.handleAddItem}>
               <react_bootstrap_1.Form.Group>
                   <react_bootstrap_1.Form.Label>Výběr zboží</react_bootstrap_1.Form.Label>
                   <react_bootstrap_1.Form.Control as="select" name="itemSelect">
                       {this.props.items.map(function (product) {
            return (<option value={product.id}>{product.name}</option>);
        })};
                   </react_bootstrap_1.Form.Control>
               </react_bootstrap_1.Form.Group>
               <react_bootstrap_1.Form.Control name="count" type="text" placeholder="Počet kusu tu bude"/>
               <react_bootstrap_1.Button type="submit">
                   Přidat
               </react_bootstrap_1.Button>
           </react_bootstrap_1.Form>

           <react_bootstrap_1.Table>
               <tr>
                   <th>Cena</th>
                   <th>Cena celkem</th>
               </tr>
               <tr>
                   <td>600</td>
                   <td>500</td>
               </tr>
           </react_bootstrap_1.Table>
       </div>);
    };
    return AddItemForm;
}(React.Component));
exports.AddItemForm = AddItemForm;
