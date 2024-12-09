import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import OccasionPage from './components/OccasionPage';
import ProductDetailPage from './components/ProductDetailPage';
import FlowerPage from './components/FlowersPage';
import CartPage from './components/CartPage';

const App = () => {
  const [page, setPage] = useState(document.location.hash || '#home'); 
  const [selectedCategory, setSelectedCategory] = useState('All');
  // Profile data state
  const [profileData, setProfileData] = useState({
    username: 'Yian',
    isDogFree: true,
    profilePic: 'profile-images/profile-1.jpg',
    actualName: 'Yian Ge',
    state: '',
    city: '',
  });

  // items in Cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  // Update quantity from the cart Page
  const updateCartQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      .filter((item) => item.quantity > 0) 
    );
  };
  

  useEffect(
    ()=>{
      function handlePageChange(){
          console.log('updating state');
          setPage(document.location.hash);
      }
      window.addEventListener('popstate',handlePageChange);
      
      return ()=>{
        window.removeEventListener('popstate',handlePageChange);
      }
    },
    []
  );
  
  const navToHash = (eventOrHash) => {
    eventOrHash.preventDefault?.(); 
    if(eventOrHash.target.hash === document.location.hash){
      return;
    }
    const hash = eventOrHash?.target?.hash || eventOrHash;
    window.history.pushState(null,'',hash); 
    setPage(hash);
  };

  const renderPage = () => {
    if (page.startsWith('#occasions/')) {
      const [, category, productId] = page.split('/');
      return <ProductDetailPage category={category} productId={productId} addToCart={addToCart} />;
    }
    if (page.startsWith('#flowers/')) {
      const [, category, productId] = page.split('/');
      return <ProductDetailPage category={category} productId={productId}  addToCart={addToCart}  />;
    }
    switch (page) {
      case '#home':
        return <HomePage />;
      case '#gallery':
        return <GalleryPage navToHash={navToHash} />;
      case '#profile':
        return (
          <ProfilePage 
            profileData={profileData}
            setProfileData={setProfileData}
          />
        );
      case '#about':
        return <AboutPage />;
      case '#occasions':
        return <OccasionPage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      case '#flowers':
        return <FlowerPage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />;
      case '#cart':
        return <CartPage  cart={cart} updateCartQuantity={updateCartQuantity} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Header navToHash={navToHash} profileData = {profileData}  setSelectedCategory={setSelectedCategory} /> 
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
