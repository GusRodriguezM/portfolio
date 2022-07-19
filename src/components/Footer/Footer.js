import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:gustavo.rm.isc@gmail.com">gustavo.rm.isc@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            “Somewhere, something incredible is waiting to be known.” <br/>
            ― Carl Sagan
          </Slogan>
        </CompanyContainer>
        
        <SocialContainer>
          <SocialIcons href="https://github.com/GusRodriguezM">
            <AiFillGithub size="3rem"/>
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/GusRodriguezMorales/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
