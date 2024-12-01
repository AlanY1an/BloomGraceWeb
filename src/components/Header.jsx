// import React from 'react';

// const Header = ({ setPage }) => (
//   <header>
//     <h1>My React App</h1>
//     <nav>
//       <button onClick={() => setPage('text')}>Text Page</button>
//       <button onClick={() => setPage('cards')}>Card Page</button>
//       <button onClick={() => setPage('panels')}>Panel Page</button>
//     </nav>
//   </header>
// );

// export default Header;
import React, { useState, useEffect } from 'react';
import './css/header.css';
import './css/icon.css';

const Header = ({ navToHash, profileData }) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const [isSlideInMenuOpen, setIsSlideInMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleHamMenu = () => {
    setIsHamMenuOpen(!isHamMenuOpen);
    setIsSlideInMenuOpen(false); 
  };

  const toggleSlideInMenu = () => {
    setIsSlideInMenuOpen(!isSlideInMenuOpen);
  };

  const toggleMenu = (menuName) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? false : menuName));
  };

  const closeAllMenus = () => {
    setActiveMenu(false);
  };

  useEffect(() => {
    if (isHamMenuOpen || isSlideInMenuOpen || activeMenu) {
      const handleClickOutside = (e) => {
        if (
          !e.target.closest('.menu') && // 非主菜单点击
          !e.target.closest('.overlay__menu') && // 非 Slide-In 菜单点击
          !e.target.closest('.menu__drop-down') // 非下拉菜单按钮点击
        ) {
          closeAllMenus();
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isHamMenuOpen, isSlideInMenuOpen, activeMenu]);

  return (
    <>
      {/* // <!-- Slide In --> */}
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
      
      <header className="header">
        <div className="announcement-bar">
          <p className="announcement-bar__message">#Giving love</p>
        </div>
        <div className="header-container">
          <div className="content-wrapper header-wrapper">
            <div className="site-header grid-table">
              <div className="ham-menu" onClick={toggleSlideInMenu}>
                <button className="ham-menu__toggle" aria-label="Toggle navigation" onClick={toggleHamMenu}>
                  <div className={`ham-menu__icon ${isHamMenuOpen ? 'active' : ''}`}></div>
                </button>
              </div> 
              <div className="site-header__logo grid__item">
                <h1><a href="/" className="site-header__logo-link"> <span>Bloom</span>  <span>&</span><span>Grace</span></a></h1>
              </div>

              <nav className={`menu grid__item ${isHamMenuOpen ? 'active' : ''}`}>
                <ul className="menu__list">

                  <li className="menu__item">
                    <a href="#home" className="menu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Home</a>
                  </li>

                  <li className="menu__item">
                    <a href="#gallery" className="menu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Gallery</a>
                  </li>

                  <li className="menu__item">
                    <button className="menu__button menu__drop-down" onClick={()=>toggleMenu('occasions')}>
                      Occasions <i className={`gg-chevron-down ${activeMenu === 'occasions' ? 'active' : ''}`}></i>
                    </button>
                      <div className={`submenu ${activeMenu === 'occasions' ? 'active' : ''}`}>
                        <span className="submenu__title">All Occasions</span>
                        <ul className="submenu__list">
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Anniversary</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Birthday</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Congratulation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Graduation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Sympathy</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>Thank you</a></li>
                        </ul>
                      </div>
                  </li>

                  <li className="menu__item">
                    <button className="menu__button menu__drop-down" onClick={() => toggleMenu('flowers')}>
                      All Flowers <i className={`gg-chevron-down ${activeMenu === 'flowers' ? 'active' : ''}`}></i>
                    </button>
                      <div className={`submenu ${activeMenu === 'flowers' ? 'active' : ''}`}>
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

                  <li className="menu__item"><a href="#about" className="menu__link" onClick={(e)=> {navToHash(e);closeAllMenus();}}>About</a></li>

                  <li className="menu__item menu__item--compressed menu__item--profile">
                    <div className="profile-container">
                      {/* Profile Icon */}
                      <a
                        href="#profile"
                        className="menu__link"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu('profile');
                        }}
                      >
                        <i className="gg-profile" aria-hidden="true"></i>
                        <span className="sr-only">Profile</span>
                      </a>

                      {/* Dropdown Menu */}
                      {activeMenu === 'profile' && (
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
            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;
