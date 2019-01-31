import * as React from "react";
import {CartTable, ICartItem} from "./cartTable";
import {CartForm} from "./cartForm";
import {Button, Modal} from "react-bootstrap";
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";
import PNotifyConfirm from "pnotify/dist/es/PNotifyConfirm";

interface ICartState {
    title: string,
    items: Array<ICartItem>,
    cartForm: {
        edit: {
            item?: ICartItem;
        }
    }
}

export class Cart extends React.Component<{}, ICartState> {

    constructor(props, context) {
        super(props, context);
        this.state = this.getData();
    }

    render(){
        console.log(typeof this.state.cartForm);

        return(
            <div>
                <CartTable title={this.state.title}
                    items={this.state.items}
                    handleClickEdit={this.handleClickEdit}
                    handleClickRemove={this.handleClickRemove}
                />

                {this.state.cartForm.edit.item !== null &&
                    <Modal show={true}>
                        <Modal.Header>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CartForm item={this.state.cartForm.edit.item} onChangeCount={this.handleChangeCount}/>
                        </Modal.Body>
                    </Modal>
                }

            </div>
        )
    }

    handleChangeCount = (item: ICartItem, count:number) => {
        this.state.items.map( (stateItem: ICartItem, index, array) => {
            if (item.id === stateItem.id) {
                array[index].count = count;
            }
        });
        
        this.setState({
            cartForm: {
                edit: {
                    item: null,
                }
            }
        })
    };

    handleClickEdit = (item: ICartItem) => {
        this.setState({
            cartForm: {
                edit: {
                    item: item,
                }
            }
        });
    };

    handleClickRemove = (item: ICartItem) => {

        PNotify.alert({
            text: "Polozka byla odebrana",
            type: 'notice'
        });

    };

    getData(){
        return {
            title: 'Kosik',
            cartForm: {
                edit: {
                    item: null,
                },
            },
            items: [
                { id: 1, name: 'Jablko', price: 600, count: 27},
                { id: 2, name: 'Hruska', price: 100, count: 26},
                { id: 3, name: 'Banan', price: 300, count: 29},
                { id: 4, name: 'Mandarinka', price: 700, count: 28},
                { id: 5, name: 'Batata', price: 800, count: 25},
                { id: 6, name: 'Cibule', price: 500, count: 256},
            ],
        }
    }


}
