import React from "react";
import { HeaderContainer } from './styled'

import FitnessLogo from '../logo/Fitness Hocam Logo.jpg'
import UserLogo from '../logo/Fitness Hocam Logo@2x.jpg'
import notifications from '../icons/notifications.svg'
import userImage from '../img/user-profile-image.jpg';
import inboxIcon from '../icons/inbox.svg';



const Header = () => {
  return (
    <HeaderContainer>
      <div className="input-left">
        <div className="inbox-logo">
          <img src={FitnessLogo} alt="logo" />
        </div>
      </div>
      <div className="input-right">
        <div className="notifications">
          <img src={notifications} alt="notifications" />
        </div>
        <div className="user-messages">
          <img src={inboxIcon} alt="inbox" />
        </div>
        <div className="user-profile">
          <img src={userImage} alt="user-profile-image" />
        </div>
      </div>
      </HeaderContainer>
  );
};

export default Header;
