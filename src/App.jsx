import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';


const App = () => {
  const [page, setPage] = useState(document.location.hash || '#home'); 

  // Profile data state
  const [profileData, setProfileData] = useState({
    username: 'Yian',
    isDogFree: true,
    profilePic: 'profile-images/profile-1.jpg',
    actualName: 'Yian Ge',
  });

  // Handle backward/forward 
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
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Header navToHash={navToHash} profileData = {profileData} /> 
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
