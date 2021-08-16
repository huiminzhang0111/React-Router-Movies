import React from 'react';

export default function MovieCard (props) {
  const {actors} = props;
  return (
    <div>
      <p className='movie-card'>{actors}</p>
    </div>
  );
}
