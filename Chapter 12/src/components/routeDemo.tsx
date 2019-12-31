import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Cart } from './cart';
import { Products } from './products';
import { CategoryLinks } from "./categoryLinks";
import { Login } from './login';
import { ProductDetail } from './productDetail';

export class RouteDemo extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Products} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/categoryLinks" component={CategoryLinks} />
                    <Route path="/login" component={Login} />
                    <Route path="/products/:id" component={Products} />
                    <Route path="/product/:id" component={ProductDetail} />
                </Router>
            </div>
        )
    }
}
