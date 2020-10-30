import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ links }) => (
  <div className="flex">
    <Link to="/">Home</Link>
    {links.map( (link) => (
      <>
        <div className="mx-2">→</div>
        <Link to={link.to}>{link.label}</Link>
      </>
    ))}
  </div>
)

export default Breadcrumb