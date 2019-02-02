import * as React from "react";
import {Form, Button} from "react-bootstrap";
import {ICartItem} from "./cartTable";
import {Confirm} from 'react-confirm-bootstrap';


interface IFormProps {
    item: ICartItem,
    onChangeCount (item: ICartItem, count: number): void,
}

export class CartForm extends React.Component<IFormProps, {}> {

    handleChangeCount = (e) => {
        e.preventDefault();
        const count = e.target.elements['count'].value;
        this.props.onChangeCount(this.props.item, count);
        return false;
    };

    render(){
        return(
            <Form onSubmit={this.handleChangeCount}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Počet kusů</Form.Label>
                    <Form.Control name="count" type="number" defaultValue={this.props.item.count.toString()} />
                    <Button className={'margin-top margin-right'} type="submit" variant="primary">Změna množství</Button>
                </Form.Group>
            </Form>
        )
    }
}

