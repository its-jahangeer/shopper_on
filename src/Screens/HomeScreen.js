import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props){
    return <ul className="products">
    {
      data.products.map(product =>
      <li>
      <div className="product">
      <Link to={'/product' + product._id}><img src ="/images/jj.jpg" alt="slimshirt"/></Link>
      <div className="product-name"><Link to={'/product' + product._id}>{product.name}</Link></div>
      <div className="product-brand">{product.brand}</div>
      <div className="price">${product.price}</div>
      <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
      </div>
  </li>
        )
    }
  <li>
      <div className="product">
      <img src="/images/jj.jpg" alt="slimshirt"/>
      <div className="product-name">Slim Shirt</div>
      <div className="product-brand">Nike</div>
      <div className="price">$60</div>
      <div className="product-rating">4.5 Stars (10 reviews)</div>
      </div>
  </li>
</ul>
}
export default HomeScreen;