import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Menu extends React.Component {
    render() {
        return (<span>
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

        </span>);
    }
}
