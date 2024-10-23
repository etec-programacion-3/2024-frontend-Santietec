import React, { useState } from 'react';
import Navbar from './components/NavBar';
import MovieRow from './components/MovieRow';
import Hero from './components/hero';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/footer';
import ProfileSelector from './components/ProfileSelector';

function App() {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showProfiles, setShowProfiles] = useState(false);
  const [likedContent, setLikedContent] = useState<number[]>([]);
  const [myList, setMyList] = useState<number[]>([]);

  const handleLike = (movieId: number) => {
    setLikedContent(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const handleAddToList = (movieId: number) => {
    setMyList(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const getContentForSection = () => {
    switch (activeSection) {
      case 'tvshows':
        return (
          <div className="space-y-12 pt-24">
            <MovieRow
              title="Popular TV Shows"
              category="tv"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
            <MovieRow
              title="Trending Series"
              category="tv-trending"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
          </div>
        );
      case 'movies':
        return (
          <div className="space-y-12 pt-24">
            <MovieRow
              title="Action Movies"
              category="movies-action"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
            <MovieRow
              title="Comedy Movies"
              category="movies-comedy"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
          </div>
        );
      case 'new':
        return (
          <div className="space-y-12 pt-24">
            <MovieRow
              title="New Releases"
              category="new-releases"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
            <MovieRow
              title="Coming Soon"
              category="coming-soon"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
            />
          </div>
        );
      case 'mylist':
        return (
          <div className="space-y-12 pt-24">
            <MovieRow
              title="My List"
              category="my-list"
              onPlayMovie={() => setShowVideoPlayer(true)}
              onLike={handleLike}
              onAddToList={handleAddToList}
              likedContent={likedContent}
              myList={myList}
              showOnlyMyList
            />
          </div>
        );
      default:
        return (
          <>
            <Hero onPlay={() => setShowVideoPlayer(true)} />
            <div className="space-y-12 mt-[-10vh] relative z-10">
              <MovieRow
                title="Trending Now"
                category="trending"
                onPlayMovie={() => setShowVideoPlayer(true)}
                onLike={handleLike}
                onAddToList={handleAddToList}
                likedContent={likedContent}
                myList={myList}
              />
              <MovieRow
                title="Popular on Netflix"
                category="popular"
                onPlayMovie={() => setShowVideoPlayer(true)}
                onLike={handleLike}
                onAddToList={handleAddToList}
                likedContent={likedContent}
                myList={myList}
              />
            </div>
          </>
        );
    }
  };

  if (showProfiles) {
    return <ProfileSelector onProfileSelect={() => setShowProfiles(false)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onProfileClick={() => setShowProfiles(true)}
      />
      <div className="pb-8 px-4 md:px-8">
        {getContentForSection()}
      </div>
      <Footer />

      {showVideoPlayer && (
        <VideoPlayer onClose={() => setShowVideoPlayer(false)} />
      )}
    </div>
  );
}

export default App;