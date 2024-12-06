// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import './css/header.css';
import './css/icon.css';
import './css/dialog.css';

const Header = ({ navToHash, profileData }) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const [isSlideInMenuOpen, setIsSlideInMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const dialogRef = useRef();
  const dialogRefSmall = useRef();
  
  // Close the dialog when click other place
  const handleClickOutside = (event) => {
    if ((dialogRef.current && dialogRef.current === event.target) ||(dialogRefSmall.current && dialogRefSmall.current === event.target)  ) {
      dialogRef.current.close();
      dialogRefSmall.current.close();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleMenuClick = (event) => {
    navToHash(event);
    closeAllMenus();
    toggleSlideInMenu();
    toggleHamMenu();
  };
  
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
  // close the all the menu if click somewhere else
  useEffect(() => {
    if (isHamMenuOpen || isSlideInMenuOpen || activeMenu) {
      const handleClickOutside = (e) => {
        if (
          !e.target.closest('.menu') && 
          !e.target.closest('.overlay__menu') && 
          !e.target.closest('.menu__drop-down') 
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
      <div
        className={`overlay__menu ${isSlideInMenuOpen ? 'active' : ''}`}
        aria-hidden={!isSlideInMenuOpen}
        role="dialog"
      >
          <nav className="overlay__nav" aria-label="Main Navigation">
              <ul className="overlay__list">

                  <li className="menu__item">
                      <a href="#occasions" className="menu__link" onClick={handleMenuClick}>Occasions</a>
                      <ul className="submenu__list">
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Anniversary</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Birthday</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Congratulation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Graduation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Sympathy</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Thank you</a></li>
                      </ul>

                  </li>
                  <li className="menu__item">
                      <a href="#flowers" className="menu__link onClick={handleMenuClick}">All Flowers</a>
                      <ul className="submenu__list">
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Daisies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Hydrangeas</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Lilies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Calla Lilies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Plants</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Roses</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Stock</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Sunflowers</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Tulips</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Bells of Ireland</a></li>
                      </ul>
                          
                  </li>
                  <li className="menu__item">
                      <a href="#about" className="menu__link" onClick={handleMenuClick}>About</a>
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
                    <a href="#home" className="menu__link" onClick={handleMenuClick}>Home</a>
                  </li>

                  <li className="menu__item">
                    <a href="#gallery" className="menu__link" onClick={handleMenuClick}>Gallery</a>
                  </li>

                  <li className="menu__item">
                    <button className="menu__button menu__drop-down" onClick={()=>toggleMenu('occasions')}>
                      Occasions <i className={`gg-chevron-down ${activeMenu === 'occasions' ? 'active' : ''}`}></i>
                    </button>
                      <div className={`submenu ${activeMenu === 'occasions' ? 'active' : ''}`}>
                        <span className="submenu__title">All Occasions</span>
                        <ul className="submenu__list">
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Anniversary</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Birthday</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Congratulation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Graduation</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Sympathy</a></li>
                          <li className="submenu__item"><a href="#occasions" className="submenu__link" onClick={handleMenuClick}>Thank you</a></li>
                        </ul>
                      </div>
                  </li>

                  <li className="menu__item">
                  <button
                    className="menu__button menu__drop-down"
                    aria-expanded={activeMenu === 'flowers'}
                    aria-controls="flowers-submenu"
                    onClick={() => toggleMenu('flowers')}
                  >
                    All Flowers <i className={`gg-chevron-down ${activeMenu === 'flowers' ? 'active' : ''}`}></i>
                  </button>
                      <div className={`submenu ${activeMenu === 'flowers' ? 'active' : ''}`}>
                        <span className="submenu__title">All Flowers</span>
                        <ul className="submenu__list">
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Daisies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Hydrangeas</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Lilies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Calla Lilies</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Plants</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Roses</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Stock</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Sunflowers</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Tulips</a></li>
                          <li className="submenu__item"><a href="#flowers" className="submenu__link" onClick={handleMenuClick}>Bells of Ireland</a></li>
                        </ul>
                      </div>
                  </li>

                  <li className="menu__item"><a href="#about" className="menu__link" onClick={handleMenuClick}>About</a></li>

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
                              closeAllMenus()
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

                  <li className="menu__item menu__item--compressed menu__item-search--compressed"><button href="" onClick={(event) => {event.stopPropagation(); dialogRef.current.showModal();}} className="menu__link button__link"><i className="gg-search"></i></button></li>

                  <dialog ref={dialogRef} className='search-box'>
                    <div>
                      <input type="text" name="serach" id="serach" className='search-input'/>
                    </div>
                  </dialog>
                  <li className="menu__item menu__item--compressed"><a href="#cart" className="menu__link"><i className="gg-shopping-cart"></i></a></li>
                </ul>
              </nav>

              {/* smaller screen */}
              <nav className="mobile-menu">
                <li className="menu__item menu__item--compressed menu__item--profile">
                  <div className="profile-container">
                    <a
                      href="#profile"
                      className="menu__link"
                      onClick={(e) => {
                        navToHash();
                        e.preventDefault();
                      }}
                    >
                      <i className="gg-profile" aria-hidden="true"></i>
                      <span className="sr-only">Profile</span>
                    </a>

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
                          href="#profile"
                          className="profile-settings-link"
                          onClick={() => {
                            closeAllMenus();
                            navToHash();
                          }}
                        >
                          Profile Settings
                        </a>
                      </div>
                    )}
                  </div>
                </li>

                <li className="menu__item menu__item--compressed menu__item-search--compressed">
                  <button
                    href=""
                    onClick={(event) => {
                      event.stopPropagation();
                      dialogRefSmall.current.showModal();
                    }}
                    className="menu__link button__link"
                  >
                    <i className="gg-search"></i>
                  </button>
                </li>

                <dialog ref={dialogRefSmall} className="search-box">
                  <div>
                    <input type="text" name="search" id="search" className="search-input" />
                  </div>
                </dialog>

                <li className="menu__item menu__item--compressed">
                  <a href="#cart" className="menu__link">
                    <i className="gg-shopping-cart"></i>
                  </a>
                </li>
              </nav>

              
            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;
