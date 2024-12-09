import React, { useEffect } from 'react';
import flowers from '../data/flowers';
import './css/flowers.css';

const FlowerPage = ({ selectedCategory, setSelectedCategory }) => {
  // get category
  const categories = ['All', ...flowers.map((category) => category.category)];

  const filteredFlowers =
    selectedCategory === 'All'
      ? flowers
      : flowers.filter((flowerCategory) => flowerCategory.category === selectedCategory);

  return (
    <main className="flower main-content">
      <div className="content-wrapper flower-wrapper">
        <div className="flower__header section__header">
          <h2 className="flower__title section__header-title">{selectedCategory} Flowers</h2>
          <hr className="hr" />

          {/* 筛选框 */}
          <div className="flower-filter">
            <label htmlFor="flower-category-filter" className="flower-filter__label">
              Filter by Category:
            </label>
            <select
              id="flower-category-filter"
              className="flower-filter__select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // 更新分类状态
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Show*/}
        {filteredFlowers.map((flowerCategory) => (
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

export default FlowerPage;
