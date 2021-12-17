import React from 'react';

import { ReactComponent as EmailIcon } from '../../assets/enterIcon.svg';

import {
  EmailField,
  EmailFieldContainer,
  EmailIconContainer,
  SubscribeContainer,
  SubscribeSubTitle,
  SubscribeTitle,
} from './subscribe.styles';
// import { ReactComponent as WhitePaperIcon } from '../../assets/whitePaperIcon.svg';

function Subscribe() {
  return (
    <SubscribeContainer>
      <SubscribeTitle>
        JOIN OUR <br /> COMMUNITY
      </SubscribeTitle>
      <SubscribeSubTitle>Subcribe to our news letter</SubscribeSubTitle>

      <EmailFieldContainer>
        <EmailField placeholder="E-Mail" />
        <EmailIconContainer>
          <EmailIcon />
        </EmailIconContainer>
      </EmailFieldContainer>
    </SubscribeContainer>
  );
}

export default Subscribe;
