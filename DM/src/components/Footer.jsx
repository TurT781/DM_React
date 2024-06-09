import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="ulFooter">
        <li>Créé par Flavien Patriarca AKA <span role="img" aria-label="turtle">🐢</span></li>
        <span className="span_footer">
          <li>
            <h1 className="h_footer">
              <a href="/">Accueil</a>
            </h1>
          </li>
          <li>
            <h1 className="h_footer">
              <a href="/products">Products</a>
            </h1>
          </li>
          <li>
            <h1 className="h_footer">
              <a href="/contact">Contact</a>
            </h1>
          </li>
        </span>
      </ul>
    </footer>
  );
};

export default Footer;
