import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TelegramIcon } from '../../assets/telegramIcon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebookIcon.svg';
import { ReactComponent as TweeterIcon } from '../../assets/twitterIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import { ReactComponent as TictocIcon } from '../../assets/tiktokIcon.svg';

const FooterContainer = styled.footer`
  margin: 30px 40px 100px;
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  return (
    <FooterContainer>
      <TelegramIcon />
      <FacebookIcon />
      <TweeterIcon />
      <InstagramIcon />
      <TictocIcon />
    </FooterContainer>
  );
}

export default Footer;
