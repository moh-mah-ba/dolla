import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {FaFacebook , FaInstagram , FaTwitter , FaYoutube , FaLinkedin} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const ToggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={ToggleHome}>dolla</SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear} All Right Reserved.{" "}
            </WebsiteRights>
            {/* <WebsiteRight>dolla &copy; {new Date().getFullYear} </WebsiteRight> */}
            {/* <WebsiteRight>dolla &copy; {new Date().getFullYear} </WebsiteRight> */}
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'><FaFacebook /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Instagram'><FaInstagram /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Youtube'><FaYoutube /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'><FaTwitter /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Linkedin'><FaLinkedin /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
