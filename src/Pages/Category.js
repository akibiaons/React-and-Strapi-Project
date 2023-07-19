import React from 'react'
import {useQuery, gql} from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

const CATEGORY = gql`
  query($id: ID!) {
    category(id: $id) {
      data {
        id
          attributes {
            name
              reviews {
                data {
                  attributes {
                    title
                    rating
                    body
                  }
           }
        }
      }
    }
  }
}

`

export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const category = data.category.data[0].attributes;
  const reviews = data.category.data[0].attributes.reviews.data;


    console.log(data)

  return (
    <div>
      <h2>{category.name}</h2>
      {reviews.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          <small>console list</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>

          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
