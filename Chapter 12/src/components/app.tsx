import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Category } from '../services/api.client';
import { Client } from '../services/api.client';

import '../styles/spystore-bootstrap.scss';

import { Cart } from './cart';
import { Products } from './products';
import { CategoryLinks } from "./categoryLinks";
import { Login } from './login';
import { ProductDetail } from './productDetail';

interface AppState {
    categories: Category[];
}

export class App extends React.Component<any, AppState> {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories()
    {
        const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

        client.getAllCategories().then((data) => {
            var categories: Category[] = data || [];

            this.setState({ categories: categories });
        }).catch((err) => {
            console.log(err);
            this.setState({ categories: [] });
        });
    }

    render() {
        return (
            <Router>
            <div>

                <header className="navbar navbar-expand-sm navbar-light bg-primary navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link to="/products" className="navbar-brand d-inline-block d-sm-none"
                               >SPY STORE</Link>
                        </div>
                        <nav className="collapse navbar-collapse header-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item dropdown categories-dropdown d-block d-lg-none">
                                    <a href="#" className="nav-link dropdown-toggle"
                                       data-toggle="dropdown">CATEGORIES <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <CategoryLinks categories= { this.state.categories } />
                                        <li className="nav-item"><a className="nav-link"
                                                                    >Privacy</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item navbar-text">Hello <em>Super Spy</em></li>
                                <li className="nav-item"><Link to="/cart" title="Cart" className="nav-link"><span
                                    className="fa fa-shopping-cart"></span> Cart</Link></li>
                                <li className="nav-item"><Link to="/login" className="nav-link" ><span className="fa fa-lock"></span> LOGIN</Link>
                                </li>
                                <li className="nav-item"><Link to="/orders" title="Order History"
                                                               className="nav-link"><span className="fa fa-tag"></span> Orders</Link></li>
                                <li className="nav-item dropdown search-dropdown">
                                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><span
                                        className="fa fa-search"></span> SEARCH</a>
                                    <div className="dropdown-menu dropdown-menu-right bg-primary">
                                        <form className="form-inline justify-content-end"
                                              role="search">
                                            <div className="input-group md-4">
                                                <label className="sr-only" htmlFor="searchString">Search</label>
                                                <input type="text" id="searchString" name="searchString" className="form-control"
                                                       placeholder="SEARCH"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-light" type="submit"><span
                                                        className="fa fa-search"></span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="page container">
                    <div className="card">
                        <nav className="card-header d-none d-sm-block">
                            <div className="store-logo">
                                <Link to="/"><img src="./images/store-logo.png" alt="Spy Store"/></Link>
                            </div>
                            <ul className="nav nav-pills d-none d-lg-flex">

                                <CategoryLinks categories= { this.state.categories } />

                                <li className="nav-item"><a className="nav-link">Privacy</a></li>
                            </ul>
                        </nav>
                        <div className="card-body">
                            <Route exact path="/" component={Products} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/categoryLinks" component={CategoryLinks} />
                            <Route path="/login" component={Login} />
                            <Route path="/products/:id" component={Products} />
                            <Route path="/product/:id" component={ProductDetail} />
                        </div>
                    </div>
                </div>
                <footer className="border-top footer text-muted">
                    <div className="container">
                        &copy; 2019 - SpyStore.React - <Link to="/privacy">Privacy</Link>
                    </div>
                </footer>

            </div >
            </Router>
        )
    }
}
