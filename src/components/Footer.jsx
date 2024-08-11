import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container-fluid p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", marginTop: 'auto' }}>
        © 2024 Copyright:
        <p className="text-white">NewsApp</p>
      </div>
    </footer>
  );
};

export default Footer;
