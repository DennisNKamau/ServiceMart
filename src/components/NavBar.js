import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/job-listings">Job Listings</a></li>
        <li><a href="/post-job">Post Job</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
