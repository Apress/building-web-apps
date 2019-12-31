import * as React from "react";
import { Link } from "react-router-dom";
import {CartRecordWithProductInfo} from "../services/api.client";

interface CartRecordState {
    quantity: number;
    item: CartRecordWithProductInfo | null;
}

interface CartRecordProps {
    item: CartRecordWithProductInfo;
    updateQuantity: (item: CartRecordWithProductInfo) => void;
    onRowDeleted: (item: CartRecordWithProductInfo) => void;
}

export class CartRecord extends React.Component<CartRecordProps, CartRecordState> {

    constructor(props) {
        super(props);
        this.state = {quantity: -1, item: null };
    }

    componentDidMount() {
        this.setState({quantity: this.props.item.quantity, item: this.props.item});
    }

    quantityUpdated(event) {

        var quantity: number = Number(event.target.value);

        if (quantity > this.state.item.unitsInStock) {
            quantity = this.state.item.unitsInStock;
        }
        else if (quantity < 1) {
            quantity = 1;
        }

        let item = this.state.item;

        item.quantity = quantity;

        this.setState({quantity: quantity, item: item});
    }

    updateQuantity() {
        if (this.props.updateQuantity) {
            this.props.updateQuantity(this.state.item);
        }
    }

    removeRow() {
        if (this.props.onRowDeleted) {
            this.props.onRowDeleted(this.state.item);
        }
    }

    render() {
        return <tr>
            <td>
                <div className="product-cell-detail">
                    <img src="images/product-thumb.png" className="pull-left"/>
                    <Link to={'/product/' + this.props.item.productId }
                          className="h5">{ this.props.item.modelName }</Link>
                    <div className="small text-muted hidden-xs">{ this.props.item.description }</div>
                </div>
            </td>
            <td className="text-right">${ this.props.item.currentPrice.toFixed(2) }</td>
            <td className="text-right cart-quantity-row">
                <input type="number" className="cart-quantity" value={ this.state.quantity }
                       onChange={ (e) => this.quantityUpdated(e) }/>
                <button className="btn btn-link btn-sm" onClick={ () => this.updateQuantity() }>Update</button>
                <button className="btn btn-link btn-sm" onClick={ () => this.removeRow() }>Remove</button>
            </td>
            <td className="text-right">{ this.props.item.unitsInStock }</td>
            <td className="text-right">${ this.props.item.lineItemTotal.toFixed(2) }</td>
        </tr>
    }
}
