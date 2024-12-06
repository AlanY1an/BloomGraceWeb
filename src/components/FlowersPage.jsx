import React from 'react';
import flowers from '../data/flowers';
import './css/flowers.css';

const FlowerPage = (navToHash) => {
  return (
    <main className="flower main-content">
      <div className="content-wrapper flower-wrapper">
        <div className="flower__header section__header">
          <h2 className="flower__title section__header-title">Flowers</h2>
          <hr className="hr" />
        </div>

        {flowers.map((flowerCategory) => (
          <div key={flowerCategory.category} className="flower-category">
            <h3 className="flower-category__title">{flowerCategory.category}</h3>
            <div className="grid-container">
              {flowerCategory.products.map((product) => (
                <div key={product.id} className="grid-item">
                  <a
                    href={`#flowers/${flowerCategory.category}/${product.id}`}
                    className="grid-item__link"
                  >
                    <div className="grid-item__image-wrapper">
                      <img src={product.image} alt={product.name} className="grid-item__image" />
                      <div className="grid-item__overlay"></div>
                    </div>
                  </a>
                  <h4 className="grid-item__title">
                    {product.name} - {product.price}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FlowerPage;
