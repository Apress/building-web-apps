import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Client, Product, ProductDetails, ShoppingCartRecord } from '../services/api.client';

interface ProductDetailState {
    product: Product | null;
    quantity: number;
    user: { id: number};
}

export class ProductDetail extends React.Component<RouteComponentProps<{ id: string }>, ProductDetailState> {

    constructor(props, context) {
        super(props, context);
        this.addToCart = this.addToCart.bind(this);

        let product = new Product();
        product.details = new ProductDetails();

        this.state = { product: product, quantity: 1, user: { id: +process.env.REACT_APP_SPYSTORE_USERID }};
    }

    componentDidMount() {
        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        if (!this.props.match.params) {
            throw new Error('Invalid data');
        }

        client.getProduct(+this.props.match.params.id).then((data) => {
            this.setState({ quantity: 1, product: data, user: this.state.user});
        });
    }

    quantityUpdated(event) {
        this.setState({quantity: event.target.value > 0 ? event.target.value : 0 , product: this.state.product, user: this.state.user});
        event.preventDefault();
    }

    addToCart() {
        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        if (this.state.user && this.state.quantity>0) {

            const cartRecord = new ShoppingCartRecord();

            cartRecord.customerId = this.state.user.id;
            cartRecord.productId = this.state.product.id;
            cartRecord.lineItemTotal = this.state.quantity;
            cartRecord.quantity = this.state.quantity;
            cartRecord.id = 0;

            client.addCartRecord(this.state.user.id, cartRecord).then((data) => {
                this.props.history.push('/cart');
            }).catch((err) => {
                alert('An error occurred when adding items to the current cart');
                console.log(err);
            })
        }
    }

    render() {
        return (<span>
            <h1 className="visible-xs">{ this.state.product.details.modelName }</h1>
            <div className="row product-details-container">
                <div className="col-sm-6 product-images">
                    <img src={'/images/' + this.state.product.details.productImageLarge }/>
                    <div className="key-label">PRODUCT IMAGES</div>
                </div>

                <div className="col-sm-6">
                    <h1 className="hidden-xs">{ this.state.product.details.modelName }</h1>
                    <div className="price-label">PRICE:</div>
                    <div className="price">${ this.state.product.currentPrice  }</div>
                    <div className="units">Only { this.state.product.unitsInStock} left.</div>
                    <div className="product-description">{ this.state.product.details.description }</div>


                <ul className="product-details">
                    <li>
                        <div className="key-label">MODEL NUMBER:</div>
                        { this.state.product.details.modelNumber}
                    </li>
                    <li>
                        <div className="key-label">CATEGORY:</div>
                        <Link
                            to={'/products/' + this.state.product.categoryId }>{ this.state.product.categoryName}</Link>
                    </li>
                </ul>

                <div className="row cart-group">
                    <label>QUANTITY:</label>
                    <input type="number" name="qty" value={this.state.quantity} onChange={(e) => this.quantityUpdated(e)} className="cart-quantity form-control"/>
                    <button className="btn btn-primary" onClick={this.addToCart}>Add to Cart</button>
                </div>

                <Link to="/">Back to List</Link>
            </div>
            </div>
        </span>)
    }
}
