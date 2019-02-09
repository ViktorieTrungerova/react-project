import * as React from "react";
import {CartTable, ICartItem} from "./cartTable";
import {CartForm} from "./cartForm";
import {Modal} from "react-bootstrap";
import PNotify from "pnotify/dist/es/PNotify";
import {Navigation} from "./navigation";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AddItemForm} from "./addItemForm";
import ReactTooltip from 'react-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {CartStorage} from "./cartStorage";
import {IProduct} from "../interfaces/iproduct";

library.add(faPlus);

export interface ICartState {
    title: string,
    items: Array<ICartItem>,
    cartForm: {
        edit: {
            item?: ICartItem;
        }
    }
    showModal: boolean,
}

export class Cart extends React.Component<{}, ICartState> {

    storage: CartStorage;

    constructor(props, context) {
        super(props, context);
        this.storage = new CartStorage();

        let state = this.storage.getCart();
        if (state === null){
            this.state = {
                title: 'Košík',
                cartForm: {
                    edit: {
                        item: null,
                    },
                },
                items: [],
                showModal: false,
            };
        } else {
            this.state = state;
        }
    }

    render(){

        return(
            <div>
                <Navigation step={1}/>
                <Container>
                    <Row>
                        <Col className={'text-align-r margin-top'}>
                            <Button variant="primary" onClick={this.handleShowModal} data-tip="Přidat položku">
                                <div>
                                    <FontAwesomeIcon icon="plus" />
                                </div>
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Přidat zboží</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddItemForm items={this.storage.getAllProducts()} onAddItem={this.handleOnAddItem}/>
                    </Modal.Body>
                </Modal>

                <CartTable title={this.state.title}
                    showEdit={true}
                    items={this.state.items}
                    handleClickEdit={this.handleClickEdit}
                    handleClickRemove={this.handleClickRemove}
                />

                <Container>
                    <Row>
                        <Col className={'text-align-r margin-top'}>
                            <Button  className="primary" href="http://localhost/react-project/www/delivery.html">Pokračovat</Button>
                        </Col>
                    </Row>
                </Container>

                {this.state.cartForm.edit.item !== null &&
                    <Modal show={true} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Změna počtu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CartForm item={this.state.cartForm.edit.item} onChangeCount={this.handleChangeCount}/>
                        </Modal.Body>
                    </Modal>
                }
                <ReactTooltip />
            </div>
        )
    }


    setState = (state) => {
        super.setState(state);
        this.storage.saveCart(this.state);
    };

    handleClose = () => {
        this.setState({
            cartForm: {
                edit: {
                    item: null,
                }
            },
            showModal: false,
        });
    };


    handleShowModal= () => {
        this.setState({showModal: true});

    };

    handleChangeCount = (item: ICartItem, count: number) => {
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


    handleOnAddItem = (product: IProduct, count: number) => {
        this.state.items.push({
            id: null,
            name: product.name,
            count: count,
            unit: product.unit,
            price: product.price,
        });
        this.setState(this.state);
    };

    handleClickRemove = (item: ICartItem) => {
        this.state.items.map((stateItem: ICartItem, index, array) => {
            if (item.id === stateItem.id) {
                array.splice(index, 1);
            }

            this.setState(this.state);
        });

        PNotify.success({
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

    handleClickEdit = (item: ICartItem) => {
        this.setState({
            cartForm: {
                edit: {
                    item: item,
                }
            }
        });
    };



}
