import React, { useState } from 'react';
import './css/nav.css';
import './css/icon.css';

const Nav = ({ navToHash, profileData }) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const [isSlideInMenuOpen, setIsSlideInMenuOpen] = useState(false);
  const [isOccasionsOpen, setIsOccasionsOpen] = useState(false);
  const [isFlowersOpen, setIsFlowersOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleHamMenu = () => setIsHamMenuOpen(!isHamMenuOpen);
  const toggleSlideInMenu = () => setIsSlideInMenuOpen(!isSlideInMenuOpen);
  const toggleOccasionsMenu = () => setIsOccasionsOpen(!isOccasionsOpen);
  const toggleFlowersMenu = () => setIsFlowersOpen(!isFlowersOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <>
      <nav className={`menu grid__item ${isHamMenuOpen ? 'active' : ''}`}>
    <ul className="menu__list">

      <li className="menu__item">
        <a href="#home" className="menu__link" onClick={navToHash}>Home</a>
      </li>

      <li className="menu__item">
        <a href="#gallery" className="menu__link" onClick={navToHash}>Gallery</a>
      </li>

      <li className="menu__item">
        <button className="menu__button menu__drop-down" onClick={toggleOccasionsMenu}>
          Occasions <i className={`gg-chevron-down ${isOccasionsOpen ? 'active' : ''}`}></i>
        </button>
          <div className={`submenu ${isOccasionsOpen ? 'active' : ''}`}>
            <span className="submenu__title">All Occasions</span>
            <ul className="submenu__list">
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Anniversary</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Birthday</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Congratulation</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Graduation</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Sympathy</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Thank you</a></li>
            </ul>
          </div>
      </li>

      <li className="menu__item">
        <button className="menu__button menu__drop-down" onClick={toggleFlowersMenu}>
          All Flowers <i className={`gg-chevron-down ${isFlowersOpen ? 'active' : ''}`}></i>
        </button>
          <div className={`submenu ${isFlowersOpen ? 'active' : ''}`}>
            <span className="submenu__title">All Flowers</span>
            <ul className="submenu__list">
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Daisies</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Hydrangeas</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Lilies</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Calla Lilies</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Plants</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Roses</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Stock</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Sunflowers</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Tulips</a></li>
              <li className="submenu__item"><a href="/products.html" className="submenu__link">Bells of Ireland</a></li>
            </ul>
          </div>
      </li>

      <li className="menu__item"><a href="#about" className="menu__link" onClick={navToHash}>About</a></li>

      <li className="menu__item menu__item--compressed menu__item--profile">
        <div className="profile-container">
          {/* Profile Icon */}
          <a
            href="#profile"
            className="menu__link"
            onClick={(e) => {
              e.preventDefault();
              toggleProfileMenu();
            }}
          >
            <i className="gg-profile" aria-hidden="true"></i>
            <span className="sr-only">Profile</span>
          </a>

          {/* Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="profile-dropdown">

              <div className="profile-info">
                <img
                  src={profileData.profilePic}
                  alt="Profile"
                  className="profile-photo"
                />
                <p
                  className={`profile-username ${
                    profileData.isDogFree ? 'fabulous' : ''
                  }`}
                >
                  {profileData.username}
                </p>
              </div>


              <a
                href='#profile'
                className="profile-settings-link"
                onClick={()=>{
                  toggleProfileMenu()
                  navToHash()
                  }
                }
              >
                Profile Settings
              </a>
            </div>
          )}
        </div>
      </li>

      <li className="menu__item menu__item--compressed menu__item-search--compressed"><a href="/search.html" className="menu__link"><i className="gg-search"></i></a></li>
      <li className="menu__item menu__item--compressed"><a href="/mycart.html" className="menu__link"><i className="gg-shopping-cart"></i></a></li>
    </ul>
      </nav>

      <div className={`overlay__menu  ${isSlideInMenuOpen ? 'active':''}`}>
      <nav className="overlay__nav">
          <ul className="overlay__list">
              <li className="menu__item">
                  <a href="/exclusives.html" className="menu__link">Exclusives</a>
              </li>
              <li className="menu__item">
                  <a href="/occasions.html" className="menu__link">Occasions</a>
                  <ul className="submenu__list">
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Anniversary</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Birthday</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Congratulation</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Graduation</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Sympathy</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Thank you</a>
                      </li>
                  </ul>

              </li>
              <li className="menu__item">
                  <a href="/flowers.html" className="menu__link">All Flowers</a>
                  <ul className="submenu__list">
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Daisies</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Hydrangeas</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Lilies</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Calla Lilies</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Plants</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Roses</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Stock</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Sunflowers</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Tulips</a>
                      </li>
                      <li className="submenu__item">
                          <a href="/products.html" className="submenu__link">Bells of Ireland</a>
                      </li>
                  </ul>
                      
              </li>
              <li className="menu__item">
                  <a href="/about.html" className="menu__link">About</a>
              </li>
          </ul>
      </nav>
      </div>
    </>
  )};


export default Nav;