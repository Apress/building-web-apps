import * as React from "react";
import { Category } from '../services/api.client';
import { Link } from "react-router-dom";

interface CategoryLinkState {
    categories: Category[];
}

interface CategoryLinkProps {
    categories: Category[];
}

export class CategoryLinks extends React.Component<CategoryLinkProps, CategoryLinkState> {

    render() {
        const categories: Category[] = this.props.categories;

        const links = categories.map((category,index) => {
            return (<li className="nav-item" key={ category.id }>
                <Link to={ "/products/" + category.id } className="nav-link">{ category.categoryName }</Link>
            </li>)
        });

        return (<ul className="nav nav-pills hidden-sm">
            <li className="nav-item" key="featured">
                <Link to={ "/"  } className="nav-link">Featured</Link>
            </li>
                    { links }
                </ul>)

    }
}
