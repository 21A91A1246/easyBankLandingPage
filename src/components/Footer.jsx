import React from 'react'

const Footer = () => {
  return (
    <div className='footerDiv'>

      <div className="logoDiv">
          <img src="./images/logo_white (1).svg" alt="logo" />
          <div className="icons">
            <img src="./images/icon-facebook.svg" id='specialIcon' alt="fb" />
            <img src="./images/icon-youtube.svg" id='specialIcon'  alt="fb" />
            <img src="./images/icon-twitter.svg" id='specialIcon'  alt="fb" />
            <img src="./images/icon-youtube.svg" id='specialIcon'  alt="fb" />
            <img src="./images/icon-pinterest.svg" id='specialIcon'  alt="fb" />
          </div>
      </div>
      <div className="socialmedia">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
      </div>
      <div className="socialmedia">
          <a href="#">Career</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
      </div>
      <div className="invite">
          <button>Request Invite</button>
          <p>@ Easybank.All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
