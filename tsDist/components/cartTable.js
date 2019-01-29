import * as React from "react";
export class CartTable extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.title),
            React.createElement("table", { className: "table" }, this.props.items.map(function (item) {
                return (React.createElement("tr", null,
                    React.createElement("td", null, item.id),
                    React.createElement("td", null, item.name),
                    React.createElement("td", null, item.price)));
            }))));
    }
}
