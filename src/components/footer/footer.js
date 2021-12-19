import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TelegramIcon } from '../../assets/telegramIcon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebookIcon.svg';
import { ReactComponent as TweeterIcon } from '../../assets/twitterIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import { ReactComponent as TictocIcon } from '../../assets/tiktokIcon.svg';

const FooterContainer = styled.footer`
  padding: 30px 40px 80px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 500px) {
    padding: 30px 150px 80px;
  }

  @media (min-width: 1400px) {
    padding: 30px auto;
    padding-bottom: 150px;
    width: 700px;
  }
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
