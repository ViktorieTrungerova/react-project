import * as React from "react";
export class Table extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.title),
            React.createElement("table", { className: "table" },
                React.createElement("tr", null,
                    React.createElement("td", null, "this.props")))));
    }
}
