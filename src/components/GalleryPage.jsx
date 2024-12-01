import React from 'react';
import './css/gallery.css';

const GalleryPage = ( { navToHash } ) => {

  return (
    <section className="gallery">
      <div className="content-wrapper gallery-wrapper">
        <div className="gallery__header section__header">
          <h2 className="gallery__title section__header-title">Our Catalog</h2>
          <hr className="hr" />
        </div>
        <div className="gallery__grid">
          <div className="gallery__item item-1">
            <a href="#home" className="gallery__link" onClick={navToHash}>
              <img src="./images/item-1.jpg" alt="Red Rose Arrangements" className="gallery__image" />
              <div className="gallery__caption">HomePage</div>
            </a>
          </div>
          <div className="gallery__item item-2">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-2.jpg" alt="Colorful Bouquets" className="gallery__image" />
              <div className="gallery__caption">Colorful Bouquets</div>
            </a>
          </div>
          <div className="gallery__item item-3">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-3.jpg" alt="Condolences" className="gallery__image" />
              <div className="gallery__caption">Condolences</div>
            </a>
          </div>
          <div className="gallery__item item-4">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-4.jpg" alt="Sunflowers" className="gallery__image" />
              <div className="gallery__caption">Sunflowers</div>
            </a>
          </div>
          <div className="gallery__item item-5">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-5.jpg" alt="Graduation and Recitals" className="gallery__image" />
              <div className="gallery__caption">Graduation and Recitals</div>
            </a>
          </div>
          <div className="gallery__item item-6">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-6.jpg" alt="Plants" className="gallery__image" />
              <div className="gallery__caption">Plants</div>
            </a>
          </div>
          <div className="gallery__item item-7">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-7.jpg" alt="Bouquets" className="gallery__image" />
              <div className="gallery__caption">Bouquets</div>
            </a>
          </div>
          <div className="gallery__item item-8">
            <a href="/products.html" className="gallery__link">
              <img src="./images/item-8.jpg" alt="Tulips" className="gallery__image" />
              <div className="gallery__caption">Tulips</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
