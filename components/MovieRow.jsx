import React from 'react';
import MovieCard from './MovieCard.jsx';

function MovieRow({ title, onLike, onAddToList, likedContent, myList }) {
  // Mock data for movies
  const movies = [
    { id: 1, title: 'Movie 1', image: '/movie1.jpg' },
    { id: 2, title: 'Movie 2', image: '/movie2.jpg' },
    { id: 3, title: 'Movie 3', image: '/movie3.jpg' },
    // Add more mock movies as needed
  ];

  return (
    <div className="px-8 my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onLike={() => onLike(movie.id)}
            onAddToList={() => onAddToList(movie.id)}
            isLiked={likedContent.includes(movie.id)}
            isInList={myList.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
