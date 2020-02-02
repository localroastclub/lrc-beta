import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-col-1">
          <div className="footer-item">My Account</div>
          <div className="footer-item">Veiw Cart</div>
          <div className="footer-item">Order Status</div>
        </div>
        <div className="footer-col-2">
          <div className="footer-item">Shipping</div>
          <div className="footer-item">Returns</div>
          <div className="footer-item">About Us</div>
        </div>
        <div className="footer-col-3">
          <a
            href="https://www.facebook.com/Localroastclub/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="icon icon-fb" />
          </a>
          <a
            href="https://twitter.com/localroastclub/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="icon icon-tweet" />
          </a>
          <a
            href="https://www.instagram.com/local_roast_club/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="icon icon-insta" />
          </a>
        </div>
      </div>
      <div className="footer-info">
        <p className="footer-cr">
          © Copyright 2020 Local Roast Club. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
