import React from "react";
import "./Footer.css";
import { ReactComponent as Img } from "./IMAGE.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <section className="bg">
          <Img />
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non .
          </p>
        </section>
        <section className="md">
          <h3>Menu Items</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section className="md">
          <h3>Other Pages</h3>
          <ul>
            <li>Styleguide</li>
            <li>Changelog</li>
            <li>licenses</li>
            <li>Team</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
