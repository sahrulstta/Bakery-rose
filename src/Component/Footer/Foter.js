import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterFolow,
    FooterSubText,
    FoterSubHading,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkWraper,
    FooterLinkTitle,
    SocialMediaWraper,
    SocialIcon,
    SocialLogo,
    SocialIconLink,
    SocialMedia,
    SocialIcons
    } from './FoterElement'

const Foter = () => {
    return (
        <FooterContainer>
            <FooterLinkContainer>
                <FooterLinkWraper>
                    <FooterLinkItems>
                        <FooterLinkTitle to='/Home'>Home</FooterLinkTitle>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle to='/Product'>About Us</FooterLinkTitle>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle to='/Service'>Service</FooterLinkTitle>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle to='/'>Contact</FooterLinkTitle>
                    </FooterLinkItems>
                </FooterLinkWraper>
                <SocialMedia>
                <SocialMediaWraper>
                    <SocialLogo to='/'>
                        <SocialIcon/>BAKERI
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' arial-lable="Instagram"><FaInstagram/></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' arial-lable="Facebook"><FaFacebook/></SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' arial-lable="Twitter"><FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWraper>
                </SocialMedia>
            </FooterLinkContainer>
        </FooterContainer>
    )
}

export default Foter
