import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard (props) {


  const { title, director, metascore, id} = props.movie;
  return (
    <div className='movie-card'>
      { props.url === undefined ?  <h2>{title}</h2> : <Link to={`${props.url}/${id}`}>{title}</Link>}
      <div className='movie-director'>
        Director: <em>{director}</em>
      </div>
      <div className='movie-metascore'>
        Metascore: <strong>{metascore}</strong>
      </div>
      { props.movie.stars === undefined ? null : <MovieCard_forMovie stars={props.movie.stars}/> }

    </div>
  );
}


function MovieCard_forMovie (props) {
  const { stars } = props;
  return (
    <div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
      {star}
      </div>))}
  </div>
  )
}