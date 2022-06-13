import React from 'react'
import TwitterLogo from '../../../images/twitter-3-64.png'
import FacebookLogo from '../../../images/facebook-3-64.png'
import InstagramLogo from '../../../images/instagram-3-64.png'
import SnapchatLogo from '../../../images/snapchat-64.png'
import './Socials.css';

const Socials = (props) => {
  return (
    <div className="social--container">
      <a href="http://www.twitter.com"><img className="social--container-imgsize" src={TwitterLogo} alt="twitter" /></a>
      <a href="http://www.facebook.com"><img className="social--container-imgsize" src={FacebookLogo} alt="facebook" /></a>
      <a href="http://www.instagram.com"><img className="social--container-imgsize" src={InstagramLogo} alt="instagram" /></a>
      <a href="http://www.snapchat.com"><img className="social--container-imgsize" src={SnapchatLogo} alt="snapchat" /></a>
    </div>
  )
}

export default Socials
