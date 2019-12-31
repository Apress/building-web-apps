import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Client, Product } from '../services/api.client';

interface ProductsState {
  header: string;
  products: Product[];
  categoryId: number | null;
}

export class Products extends React.Component<RouteComponentProps<{ id: string | null }>, ProductsState> {

  constructor(props) {
    super(props);
    this.state =  { header: '', products: [], categoryId: null };
  }

  componentDidMount() {
    this.refreshProducts();
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.match && +this.props.match.params.id !== +prevProps.match.params.id) {
      this.refreshProducts();
    }
  }

  refreshProducts() {
    if (!this.props.match || !this.props.match.params.id) {
      this.loadFeaturedProducts();
    } else if (+this.props.match.params.id !== this.state.categoryId) {
      this.loadCategoryProducts(+this.props.match.params.id);
    }
  }

  loadFeaturedProducts() {
    const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

    client.getFeaturedProducts().then((data) => {
      this.setState({ categoryId: null, header: 'Featured Products', products: data });
    }).catch(err => {
      this.setState( {categoryId: this.state.categoryId, header: '[Error Loading Products]', products: []});
      console.log(err);
    });
  }

  loadCategoryProducts(categoryId: number) {
    const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

    client.getCategoryProducts(categoryId).then((data) => {
      const categoryName = data.length > 0 ? data[0].categoryName : 'Category';
      this.setState({ header: categoryName, products: data, categoryId: categoryId });
    }).catch(err => {
      this.setState( {categoryId: this.state.categoryId, header: '[Error Loading Products]', products: []});
      console.log(err);
    });
  }

  searchProducts(searchText: string) {
    const client = new Client(process.env.REACT_APP_SPYSTORE_API_URL);

    client.searchProducts(searchText).then((data) => {
      this.setState({ header: 'Search Results', products: data, categoryId: null });
    }).catch(err => {
      this.setState( {categoryId: this.state.categoryId, header: '[Error Loading Products]', products: []});
      console.log(err);
    });
  }

  render() {


    const featuredLink = this.state.header === 'Featured Products' ? <div/> :
                       <Link to='/' className="btn btn-info btn-lg">View Featured Products</Link>;

    const products = this.state.products.map((product) => {
      const imageUrl = '/images/' + product.details.productImage;
      const isCurrentCategory = this.state.categoryId === product.categoryId;

      return (<div key={ product.id.toString() } className="col-xs-6 col-sm-4 col-md-3">
        <div className="product">
          <img src={ imageUrl }/>
          <div className="price">${ product.currentPrice.toFixed(2) }</div>
          <div className="title-container">
            <h5>{ product.details.modelName }</h5>
          </div>
          <div className="model-number">
            <span className="text-muted">Model Number:</span> { product.details.modelNumber }</div>
          { (isCurrentCategory) ? (
                                  <Link to={ 'products/' + product.categoryId } className="category">{ product.categoryName }</Link>) :
            (<div className="category">{ product.categoryName }</div>) }
          <Link to={ '/product/' + product.id }
                className="btn btn-primary btn-cart"><span className="glyphicon glyphicon-shopping-cart"/> Add to
            Cart</Link>
        </div>
      </div>);
    });

    return <div>
      <div className="jumbotron">
        { featuredLink }
      </div>

      <h3>{ this.state.header }</h3>

      <div className="row">
        { products }
      </div>
    </div>;
  }
}
