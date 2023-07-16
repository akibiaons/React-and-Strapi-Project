import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const  {loading, error, data} = useFetch('http://localhost:1337/api/reviews');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div>
      {data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          <small>console list</small>

          <p>{review.body}</p>

          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))};
    </div>
  )
}