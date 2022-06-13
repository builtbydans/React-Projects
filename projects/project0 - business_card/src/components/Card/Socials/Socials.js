import React from 'react'
import TwitterLogo from '../../../images/twitter-3-64.png'
import FacebookLogo from '../../../images/facebook-3-64.png'
import InstagramLogo from '../../../images/instagram-3-64.png'
import SnapchatLogo from '../../../images/snapchat-64.png'


const Socials = (props) => {
  return (
    <div className="social--container">
      <img src={TwitterLogo} alt="twitter" />
      <img src={FacebookLogo} alt="twitter" />
      <img src={InstagramLogo} alt="twitter" />
      <img src={SnapchatLogo} alt="twitter" />
    </div>
  )
}

export default Socials
