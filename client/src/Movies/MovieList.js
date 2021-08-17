import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { url } = useRouteMatch();
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} url={url}/>
      ))}
    </div>
  );
}

