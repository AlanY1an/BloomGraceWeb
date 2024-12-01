import React from 'react';
import occasions from '../data/occasions';
import './css/occasion.css';

const OccasionPage = ({ navToHash }) => (
  <section className="occasion">
    <div className="content-wrapper occasion-wrapper">
      <div className="occasion__header section__header">
        <h2 className="occasion__title section__header-title">Occasions</h2>
        <hr className="hr" />
      </div>

      {occasions.map((occasion) => (
        <div key={occasion.category} className="occasion-category">
          <h3 className="occasion-category__title">{occasion.category}</h3>
          <div className="grid-container">
            {occasion.products.map((product) => (
              <div key={product.id} className="grid-item">
                <a
                  href={`#occasions/${occasion.category}/${product.id}`}
                  onClick={navToHash}
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
  </section>
);

export default OccasionPage;
