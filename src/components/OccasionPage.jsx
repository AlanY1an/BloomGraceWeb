import React, { useEffect } from 'react';
import occasions from '../data/occasions';
import './css/occasion.css';

const OccasionPage = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', ...occasions.map((occasion) => occasion.category)];

  const filteredOccasions =
    selectedCategory === 'All'
      ? occasions
      : occasions.filter((occasion) => occasion.category === selectedCategory);

  useEffect(() => {
    if (!categories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [selectedCategory, categories, setSelectedCategory]);

  return (
    <main className="main-content occasion">
      <div className="content-wrapper occasion-wrapper">
        <div className="occasion__header section__header">
          <h2 className="occasion__title section__header-title">Occasions</h2>
          <hr className="hr" />

          <div className="occasion-filter">
            <label htmlFor="occasion-category-filter" className="occasion-filter__label">
              Filter by Category:
            </label>
            <select
              id="occasion-category-filter"
              className="occasion-filter__select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredOccasions.map((occasion) => (
          <div key={occasion.category} className="occasion-category">
            <h3 className="occasion-category__title">{occasion.category}</h3>
            <div className="grid-container">
              {occasion.products.map((product) => (
                <div key={product.id} className="grid-item">
                  <a
                    href={`#occasions/${occasion.category}/${product.id}`}
                    className="grid-item__link"
                  >
                    <div className="grid-item__image-wrapper">
                      <img src={product.image} alt={product.name} className="grid-item__image" />
                      <div className="grid-item__overlay"></div>
                    </div>
                  </a>
                  <h4 className="grid-item__title">
                    {product.name} - ${product.price}
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

export default OccasionPage;

