import * as React from "react";
import {DeliveryForm, IBillingAddress, ICartContact, IDeliveryAddress} from "./deliveryForm";
import {Navigation} from "./navigation"

interface IDeliveryState {
    deliveryAddress: IDeliveryAddress,
    billingAddress: IBillingAddress,
    contact: ICartContact,
}

export class Delivery extends React.Component<{}, IDeliveryState> {

    constructor(props, context){
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
                }
            };
    }

    render() {
        return (
            <div>
                <Navigation step={2}/>
                {this.state &&
                    <DeliveryForm
                        deliveryAddress={this.state.deliveryAddress}
                        billingAddress={this.state.billingAddress}
                        onSubmit={this.handleSaveAddress}/>
                }
            </div>

        );
    }

    handleSaveAddress = (deliveryAddress: IDeliveryAddress, billingAddress: IBillingAddress, contact: ICartContact) => {
        this.setState({
            deliveryAddress: deliveryAddress,
            billingAddress: billingAddress,
            contact: contact,
        });
    };

}
