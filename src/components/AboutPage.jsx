import React from 'react';
import './css/about.css';

const AboutPage = () => (
  <main className="about main-content">
    <div className="content-wrapper about-wrapper">
      <div className="about__header section__header">
        <h1 className="about__title section__header-title">About Us</h1>
        <hr className="hr" />
      </div>

      <div className="pane-container">
        {/* Our Mission Panel */}
        <div className="panel" aria-labelledby="our mission">
          <img src="./images/item-1.jpg" alt="Our Mission" className="panel__image" />
          <div className="panel__text">
            <h2 className="panel__title">Our Mission</h2>
            <p className="panel__description">
              At Bloom & Grace, our mission is to bring beauty and joy into every home with our carefully curated floral designs. We strive to create a meaningful connection between nature and the people who cherish it.
            </p>
          </div>
        </div>

        {/* Our History Panel */}
        <div className="panel" aria-labelledby="our history">
          <div className="panel__text">
            <h2 className="panel__title">Our History</h2>
            <p className="panel__description">
              Since our founding in 2000, Bloom & Grace has grown from a small flower shop to a well-loved local brand. Our journey reflects a passion for flowers, creativity, and customer satisfaction.
            </p>
          </div>
          <img src="./images/info.jpg" alt="Our History" className="panel__image" />
        </div>

        {/* Meet the Team Panel */}
        <div className="panel" aria-labelledby="our team">
          <img src="./images/item-2.jpg" alt="Meet the Team" className="panel__image" />
          <div className="panel__text">
            <h2 className="panel__title">Meet the Team</h2>
            <p className="panel__description">
              Our talented team of floral designers, customer service specialists, and delivery experts work together to ensure every bouquet is delivered with care and love. Meet the people behind Bloom & Grace who make it all possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;



