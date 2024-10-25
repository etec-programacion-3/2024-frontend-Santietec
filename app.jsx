import React from 'react';
import Navbar from './components/Navbar.jsx';
import MovieRow from './components/MovieRow.jsx';
import Hero from './components/Hero.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import Footer from './components/Footer.jsx';
import ProfileSelector from './components/ProfileSelector.jsx';
import SearchPanel from './components/SearchPanel.jsx';
import NotificationsPanel from './components/NotificationsPanel.jsx';

const { useState } = React;

function App() {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showProfiles, setShowProfiles] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [likedContent, setLikedContent] = useState([]);
  const [myList, setMyList] = useState([]);

  const handleLike = (movieId) => {
    setLikedContent(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const handleAddToList = (movieId) => {
    setMyList(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onSearchClick={() => setShowSearch(true)}
        onNotificationsClick={() => setShowNotifications(true)}
        onProfileClick={() => setShowProfiles(true)}
      />
      
      {showProfiles && (
        <ProfileSelector onClose={() => setShowProfiles(false)} />
      )}
      
      {showSearch && (
        <SearchPanel onClose={() => setShowSearch(false)} />
      )}
      
      {showNotifications && (
        <NotificationsPanel onClose={() => setShowNotifications(false)} />
      )}
      
      {!showVideoPlayer && (
        <>
          <Hero onPlay={() => setShowVideoPlayer(true)} />
          <MovieRow 
            title="Trending Now" 
            onLike={handleLike}
            onAddToList={handleAddToList}
            likedContent={likedContent}
            myList={myList}
          />
          <MovieRow 
            title="New Releases" 
            onLike={handleLike}
            onAddToList={handleAddToList}
            likedContent={likedContent}
            myList={myList}
          />
          <MovieRow 
            title="My List" 
            onLike={handleLike}
            onAddToList={handleAddToList}
            likedContent={likedContent}
            myList={myList}
          />
        </>
      )}
      
      {showVideoPlayer && (
        <VideoPlayer onClose={() => setShowVideoPlayer(false)} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
