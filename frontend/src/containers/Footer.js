import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-col-1">
          <div className="footer-item">
            My Account
          </div>
          <div className="footer-item">
            Veiw Cart
          </div>
          <div className="footer-item">
            Order Status
          </div>
        </div>
        <div className="footer-col-2">
          <div className="footer-item">
            Shipping
          </div>
          <div className="footer-item">
            Returns
          </div>
          <div className="footer-item">
            About Us
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p className="footer-cr">
          © Copyright 2019 Local Roast Club. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;