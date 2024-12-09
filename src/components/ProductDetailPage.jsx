import React,{useState} from 'react';
import occasions from '../data/occasions';
import flowers from '../data/flowers';
import './css/productDetail.css';

const ProductDetailPage = ({ category, productId, addToCart}) => {

  const [showMessage, setShowMessage] = useState(false); 


  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const getCategoryData = (category) => {
    const occasion = occasions.find((occ) => occ.category === category);
    if (occasion) return occasion;

    const flower = flowers.find((flr) => flr.category === category);
    if (flower) return flower;

    return undefined;
  };


  const categoryData = getCategoryData(category);
  // 查找对应的产品
  const product = categoryData?.products.find((prod) => prod.id === parseInt(productId, 10));


 // product not found
  if (!product) {
    return (
      <section className="product-detail">
        <div className="content-wrapper product-detail-wrapper">
          <div className="product-detail__header section__header">
            <h2 className="product-detail__title section__header-title">Product Not Found</h2>
            <hr className="hr" />
          </div>
          <p>The product you're looking for does not exist or has been removed.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <div className="content-wrapper product-detail-wrapper">

        <div className="product-detail__content">
          <img src={product.image} alt={product.name} className="product-detail__image" />
          <div className="product-detail__info">
            <div className="product-detail__header">
              <h2 className="product-detail__title">{product.name}</h2>
              
            </div>
            <p className="product-detail__price">${product.price}</p>
            <p className="product-detail__category">Category: {category}</p>
            <p className="product-detail__description">
              This is a placeholder description for {product.name}. You can add more details about the product here.
            </p>
            <hr className="hr" />
            <button
              className="btn cart-btn"
              onClick={handleAddToCart}
            >Add to Cart</button>
            {showMessage && (
              <p className="cart-message">Product added to cart!</p>
            )}
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
