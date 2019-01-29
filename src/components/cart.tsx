import * as React from "react";
import {CartTable, ICartItem} from "./cartTable";

interface ICartState {
    title: string,
    items: Array<ICartItem>,
}

export class Cart extends React.Component<{}, ICartState> {

    constructor(props, context) {
        super(props, context);
        this.state = this.getData();
    }

    render(){
        return(
            <div>
                <CartTable title={this.state.title}
                    items={this.state.items}
                />
            </div>
        )
    }

    getData(){
        return {
            title: 'Kosik',
            items: [
                { id: 1, name: 'Jablko', price: 600},
                { id: 2, name: 'Hruska', price: 100},
                { id: 3, name: 'Banan', price: 300},
                { id: 4, name: 'Mandarinka', price: 700},
                { id: 5, name: 'Batata', price: 800},
                { id: 6, name: 'Cibule', price: 500},
            ],
        }
    }


}
