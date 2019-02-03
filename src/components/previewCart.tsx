import * as React from "react";
import {CartTable} from "./cartTable";
import {PreviewAddress} from "./previewAdress";
import {IBillingAddress, ICartContact, IDeliveryAddress} from "./deliveryForm";
import {Navigation} from "./navigation";

interface ICartItem {
    id: number;
    name: string;
    count: number;
    price: number;
}


interface IPreviewCartState {
    items: Array<ICartItem>,
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact,
}


export class PreviewCart extends React.Component< {}, IPreviewCartState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
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
             items: [
            { id: 1, name: 'Jablko', price: 600, count: 27},
            { id: 2, name: 'Hruška', price: 100, count: 26},
            { id: 3, name: 'Banán', price: 300, count: 29},
            { id: 4, name: 'Mandarinka', price: 700, count: 28},
            { id: 5, name: 'Batata', price: 800, count: 25},
            { id: 6, name: 'Cibule', price: 500, count: 256},
        ]
        };
    }

    render() {
        if (this.state === null) return;
             return (<div>
                <Navigation step={3}/>
                    <div>
                        <h2>Položky objednávky</h2>
                        <CartTable
                            title={"omg"}
                            showEdit={false}
                            items={this.state.items}/>
                        <div className={"margin-top"}/>
                        <PreviewAddress
                            deliveryAddress={this.state.deliveryAddress}
                            billingAddress={this.state.billingAddress}
                            contact={this.state.contact}
                        />
                    </div>
            </div>
        );
    }
}
