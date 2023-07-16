import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="site-header">
      <Link to="/"><h1>Ninja Reviews</h1></Link>
    </div>
  )
}
