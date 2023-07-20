import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                rating
                title
                body
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div className="category__wrapper">
      <h2>{data.category.data.attributes.name}</h2>
      {data.category.data.attributes.reviews.data.map((review) => {
        return (
          <div key={review.id} className="review__card">
            <div className="card__rating">{review.attributes.rating}</div>
            <h2 className="review__title">{review.attributes.title}</h2>
            <div className="card__categories flex-row">
              {review.attributes.categories.data.map((c) => (
                <span key={c.id}>{c.attributes.name}</span>
              ))}
            </div>
            <p className="review__body">
              {review.attributes.body.substring(0, 200)}...
            </p>
            <Link to={`/details/${review.id}`}>Read More</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Category;

