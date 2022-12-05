import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            fugiat obcaecati id. Alias eius dolores nostrum. Ut quisquam error
            inventore impedit quidem velit aspernatur fuga ex animi, suscipit,
            nihil dolorum?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nam
            modi? Eum provident optio, omnis vel nostrum placeat exercitationem
            obcaecati qui vitae necessitatibus pariatur numquam explicabo magni
            ipsam sed blanditiis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Serkan Store </span>
          <span className="copyright"> All Right Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
