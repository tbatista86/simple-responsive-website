import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>              
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carres</FooterLink>
              <FooterLink to="/signin">Investos</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>              
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
              <FooterLink to="/">Partners</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>              
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
              <FooterLink to="/">About</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>              
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">YouTube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>

              <SocialIconLink href="/" target="blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="blank" arial-label="Instagran">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="blank" arial-label="YouTube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="blank" arial-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
