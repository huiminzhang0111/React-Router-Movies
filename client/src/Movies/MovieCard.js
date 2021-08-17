import React from 'react';

export default function MovieCard (props) {
  const { detail } = props;

  return (
    <div>
      <p className='movie-card'>{detail}</p>
    </div>
  );
}
