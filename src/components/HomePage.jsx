import React, { useRef, useState } from 'react';
import "./css/home-page.css";
import "./css/dialog.css";
import Button from './Button';

const HomePage = () => {
  const dialogRef = useRef();
  const [feedback, setFeedback] = useState(""); 

  const handleCloseModal = () => {
    setFeedback(""); 
    dialogRef.current.close();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFeedback("Thank you for subscribing!"); 
  };

  return (
    <main className="main-content">
      {/* Info Section */}
      <section className="info">
        <div className="info__image">
          {/* Info Details Overlay */}
          <div className="info__wrapper content-wrapper">
            <div className="info__details">
              <h3 className="info__title">Bloom & Grace</h3>
              <p className="info__address">20 Summer Street, Malden, 02148 Boston, MA.</p>
              <p className="info__hours">
                Mon - Tue, 10 a.m. - 6 p.m.<br />
                Wed - Sat, 10:00 a.m. - 4:00 p.m.<br />
                Sunday, CLOSED
              </p>
              <a className="info__button btn" href="https://maps.app.goo.gl/PMEdjbE2V9KoxUu47" target="_blank" rel="noopener noreferrer">
                <i className="gg-pin"></i>View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter">
        <div className="content-wrapper newsletter__wrapper">
          <div className="newsletter__header">
            <h2 className="newsletter__title">Subscribe to Our Newsletter</h2>
            <p className="newsletter__description">Get promotions, new products, and offers delivered straight to your inbox.</p>
            <hr className="hr" />

            {/* Open modal */}
            <Button type="button" visual="link" className="newsletter__button" onClick={() => dialogRef.current.showModal()}>
              Subscribe
            </Button>

            <dialog ref={dialogRef} className="modal">
              <h2>Subscribe</h2>
              <form autoComplete="off" className="newsletter__form" action="/register" method="POST" onSubmit={handleFormSubmit}>
                <div className="newsletter__notes">
                  <p>Required fields are marked <span className="required"> * </span></p>
                </div>

                {/* Name */}
                <div className="newsletter__form-group">
                  <label htmlFor="name" className="newsletter__label">Name <span className="required"> * </span></label>
                  <div className="newsletter__input-container">
                    <input type="text" id="name" name="name" className="newsletter__input newsletter__input--name" placeholder="Your full name" />
                    <div className="newsletter__error--name"></div>
                  </div>
                </div>

                {/* Email */}
                <div className="newsletter__form-group">
                  <label htmlFor="email" className="newsletter__label">Email <span className="required"> * </span></label>
                  <div className="newsletter__input-container">
                    <input type="text" id="email" name="email" className="newsletter__input newsletter__input--email" placeholder="Your email address" />
                    <div className="newsletter__error--email"></div>
                  </div>
                </div>

                {/* Confirm Email */}
                <div className="newsletter__form-group">
                  <label htmlFor="confirm-email" className="newsletter__label">Confirm Email <span className="required"> * </span></label>
                  <div className="newsletter__input-container">
                    <input type="text" id="confirm-email" name="confirm-email" className="newsletter__input newsletter__input--confirm-email" placeholder="Confirm your email address" />
                    <div className="newsletter__error--confirm-email"></div>
                  </div>
                </div>

                {/* Tier */}
                <div className="newsletter__form-group">
                  <label htmlFor="tier" className="newsletter__label">Select Subscription Tier</label>
                  <select id="tier" name="tier" className="newsletter__select">
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="exclusive">Exclusive</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div className="newsletter__form-group newsletter__form-group--checkbox">
                  <label htmlFor="wants-spam" className="newsletter__label newsletter__label--checkbox">
                    I would like to receive promotional emails
                  </label>
                  <input type="checkbox" id="wants-spam" name="wants-spam" className="newsletter__checkbox" />
                </div>

                {/* Submit */}
                <div className="newsletter__form-group newsletter__form-group--btn ">
                  <Button type="submit" visual="link" className="newsletter__button btn">Submit</Button>
                </div>
              </form>

              {feedback && <p className="feedback-message">{feedback}</p>}

              {/* Close modal button */}
              <Button type="button" visual="button" className="modal-close--btn" onClick={handleCloseModal}>X</Button>
            </dialog>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
