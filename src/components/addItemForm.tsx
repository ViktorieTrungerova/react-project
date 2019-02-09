import * as React from "react";
import {Button, Form, Table} from "react-bootstrap";
import {IProduct} from "../interfaces/iproduct";

interface IaddItemFormProps {
    items: Array<IProduct>;
    onAddItem (item: IProduct, count: number): void,
}

export class AddItemForm extends React.Component<IaddItemFormProps, {}> {

    render() {
        return (
       <div>
           <Form onSubmit={this.handleAddItem}>
               <Form.Group >
                   <Form.Label>Výběr zboží</Form.Label>
                   <Form.Control as="select" name="itemSelect">
                       {this.props.items.map((product: IProduct) => {
                           return ( <option value={product.id}>{product.name}</option>);
                       })};
                   </Form.Control>
               </Form.Group>
               <Form.Control name="count" type="text" placeholder="Počet kusu tu bude" />
               <Button type="submit">
                   Přidat
               </Button>
           </Form>

           <Table>
               <tr>
                   <th>Cena</th>
                   <th>Cena celkem</th>
               </tr>
               <tr>
                   <td>600</td>
                   <td>500</td>
               </tr>
           </Table>
       </div>
        )
    }


    handleAddItem = (e) => {
        e.preventDefault();
        const addItemId = Number(e.target.elements['itemSelect'].value);
        const count = e.target.elements['count'].value;

        let selectedProduct = null;
        this.props.items.map((product: IProduct) => {
            if (product.id === addItemId) {
                selectedProduct = product;
                return;
            }
        });

        this.props.onAddItem(selectedProduct, count);
    }

}
