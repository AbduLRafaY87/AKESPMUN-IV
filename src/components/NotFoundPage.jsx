// import React from 'react';
import '../styles/NotFound.css';

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__content">
          <h1 className="notfound__title">404</h1>
          <h3 className="notfound__subtitle">Page Not Found!</h3>
          <p className="notfound__message">
            Oops! The page you are looking for does not exist.
          </p>
          <a href="/" className="notfound__button">
            <i className="fas fa-home"></i> Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;