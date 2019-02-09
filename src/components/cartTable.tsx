import * as React from "react";
import {Button} from "react-bootstrap";
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col } from 'reactstrap';
import NumberFormat from 'react-number-format';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faTrashAlt);


interface ITableProps {
    title: string;
    items: Array<ICartItem>;
    showEdit: boolean;
    handleClickEdit?(item: ICartItem): void;
    handleClickRemove?(item: ICartItem): void;
}

export interface ICartItem {
    id: number,
    name: string,
    price: number,
    count: number,
    unit: string,

}

export class CartTable extends React.Component<ITableProps, {}> {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return(
            <Container>
                <div>
                    <h2>{this.props.title}</h2>
                    <table className="table">
                        <tr>
                            <th>Název položky</th>
                            <th>Cena</th>
                            <th>Počet</th>
                            <th>Cena celkem</th>
                            {this.props.showEdit &&
                            <th></th>
                            }
                        </tr>
                        {this.props.items.map( (item: ICartItem) => {
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={' Kč'} /></td>
                                    <td>{item.count} {item.unit}</td>
                                    <td><NumberFormat value={item.count * item.price} displayType={'text'} thousandSeparator={true} suffix={' Kč'} /></td>
                                    {this.props.showEdit &&
                                    <td>
                                        <Button className={'margin-right'} data-tip="Editovat" variant="primary" onClick={(e) => this.props.handleClickEdit(item)}>
                                            <div>
                                                <FontAwesomeIcon icon="pencil-alt" />
                                            </div>
                                        </Button>
                                        <Button data-tip="Smazat" variant="danger" onClick={(e) => this.props.handleClickRemove(item)}>
                                            <div>
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </div>
                                        </Button>
                                    </td>
                                    }
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
