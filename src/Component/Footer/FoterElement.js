import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiCook} from 'react-icons/gi'

export const FooterContainer = styled.div`
    background-color:#101522;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
`
export const FooterFolow = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-bottom:24px;
    padding:24px;
    color:#fff;
`
export const FoterSubHading = styled.h1`
    font-family:'Trebuchet MS', 'Lucida Sans Unicode','Lucida Grnde', 'Lucida Sans', Arial, sans-serif;
    margin-bottom:24px;
    font-size:24px;
`
    
export const FooterSubText = styled.p`
    margin-bottom:24px;
    font-size:20px;
`
export const FooterLinkContainer = styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    justify-content:center;

    @media screen and (max-width:820px){
        padding-top:32px;
    }
`
export const FooterLinkWraper = styled.div`
    display:flex;

    @media screen and (max-width:820px){
        flex-direction:column;
    }
`
export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:150px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;
    }
`
export const FooterLinkTitle = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    
    &:hover{
        color:#fbddf8;
        transition: 0.3s ease-out;
    }
`
export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`

export const SocialMediaWraper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:1000px;
    margin:15px auto 0 auto;

    @media screen and (max-width:820px){
        flex-direction:column;
    }
`
export const SocialLogo = styled(Link)`
    color:#fbddf8;
    justify-content:center;
    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
`
export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:24px;
`
export const SocialIcon = styled(GiCook)`
    margin-right:10px;
    color:#fbddf8;
    width:24px;
`
export const SocialIconLink = styled.a`
    color:#fbddf8;
    font-size:24px;
    margin:10px 20px 10px 20px;
`