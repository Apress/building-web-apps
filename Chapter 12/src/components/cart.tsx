import * as React from "react";
import {Link} from "react-router-dom";
import {CartRecordWithProductInfo, Client} from '../services/api.client';
import {ShoppingCartRecord} from '../services/api.client';
import {CartRecord} from "./cartRecord";

interface CartState {
    total: number;
    items: CartRecordWithProductInfo[];
    user: { id: number};
}

export class Cart extends React.Component<null, CartState> {

    constructor(props) {
        super(props);
        this.state = {total: 0, items: [], user: { id: +process.env.REACT_APP_SPYSTORE_USERID }};
    }

    componentDidMount() {
        this.loadCart();
    }

    loadCart() {
        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        if (this.state.user) {
            client.getShoppingCart(this.state.user.id).then((data) => {
                if (data.cartRecords) {
                    this.setState({total: this.calculateTotal(data.cartRecords), items: data.cartRecords, user: this.state.user});
                }
            }).catch(err => {
                this.setState({total: 0, items: [], user: this.state.user});
                console.log(err);
                alert('There was an error loading the cart');
            });
        }
    }

    calculateTotal(items: ShoppingCartRecord[] | undefined): number {

        let total = 0;

        if (items && items.length > 0) {
            items.forEach((row: ShoppingCartRecord) => {
                total += row.lineItemTotal ? row.lineItemTotal : 0;
            });
        }

        return total;
    }

    rowDeleted(row: ShoppingCartRecord) {

        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        if (row && row.id !== undefined && row.id !== null) {
            client.deleteCartRecord(row.id, row).then((data) => {
                this.loadCart();
            }).catch((err) => {
                alert('Error deleting row from cart');
                console.log(err);
            });
        }
    }

    updateQuantity(row: ShoppingCartRecord) {
        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        if (row && row.id !== undefined && row.id !== null) {

            client.updateCartRecord(row.id, row).then((data) => {
                this.loadCart();
            }).catch((err) => {
                alert('Error updating item quantity');
                console.log(err);
            });
        }
    }

    columnStyle = {
        width: '70%'
    };

    render() {

        let cartRows: any[] = [];
        const records: ShoppingCartRecord[] = this.state.items;

        if (records && records.length > 0) {
            cartRows = records.map((record: ShoppingCartRecord) => {
                var rowKey = record.productId + "." + record.quantity;

                return <CartRecord key={ rowKey  } item={ record } onRowDeleted={ (record) => this.rowDeleted(record) }
                                   updateQuantity={ (record) => this.updateQuantity(record) }/>;
            });
        }

        return <div>
            <h3>Cart</h3>

            <div className="table-responsive">
                <table className="table table-bordered product-table">
                    <thead>
                    <tr>
                        <th style={ this.columnStyle }>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Available</th>
                        <th className="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    { cartRows }
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>${ this.state.total.toFixed(2) }</th>
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div className="pull-right">
                <Link to="checkout">
                    <button className="btn btn-primary">Checkout</button>
                </Link>
            </div>
        </div>
    }
}
