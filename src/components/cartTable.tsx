import * as React from "react";

interface ITableProps {
    title: string;
    items: Array<ICartItem>;
}

export interface ICartItem {
    id: number,
    name: string,
    price: number,
}
export class CartTable extends React.Component<ITableProps, {}> {
    render(){
        return(
            <div>
            <h2>{this.props.title}</h2>
            <table className="table">
                {this.props.items.map(function (item: ICartItem) {
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    );
                })}
            </table>
            </div>
        )
    }
}
