import * as React from "react";
import {Button} from "react-bootstrap";
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faTrashAlt);


interface ITableProps {
    title: string;
    items: Array<ICartItem>;
    handleClickEdit(item: ICartItem): void;
    handleClickRemove(item: ICartItem): void;
}

export interface ICartItem {
    id: number,
    name: string,
    price: number,
    count: number,

}

export class CartTable extends React.Component<ITableProps, {}> {
    render(){
        return(
            <Container>
                <div>
                    <h2>{this.props.title}</h2>
                    <table className="table">
                        {this.props.items.map( (item: ICartItem) => {
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td data-tip="Cena">{item.price}</td>
                                    <td data-tip="Počet kusů">{item.count}</td>
                                    <td data-tip="Cena celkem">{item.count * item.price}</td>
                                    <td>
                                        <Button variant="primary" onClick={(e) => this.props.handleClickEdit(item)}>
                                            <div>
                                                <FontAwesomeIcon icon="pencil-alt" />
                                            </div>
                                        </Button>
                                        <Button variant="danger" onClick={(e) => this.props.handleClickRemove(item)}>
                                            <div>
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </div>
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                    <ReactTooltip />
                </div>
            </Container>
        )
    }
}
