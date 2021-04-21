import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Cardss = styled.div`
    padding: 4rem;
    background: #fff;
` 
export const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`

export const CardWraper = styled.div`
    position: relative;
    margin: 50px 0 45px;

`
export const Carditems = styled.ul`
    margin-bottom: 24px;

    @media screen and(min-width:1024px){
        display:flex;
    }
`
export const Carditem = styled.li`
    display: flex;
    flex: 1;
    margin: 3rem;
    border-radius: 10px;

    @media screen and(max-width:1024px){
        margin-bottom:2rem;
    }
`

export const ItemLink = styled(Link)`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`
export const KartuItemWraper = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;

    &::after{
    content: attr(data-category);
    position: absolute;
    bottom: 0; 
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: black ;
    background-color: #1f98f4;
    box-sizing: border-box;
    }
`
export const KartuItemImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
    transform: scale(1.1);
    }
`

export const KartuInfo = styled.div`
    padding: 20px 30px 30px;
`
export const KartuSub = styled.div`
    color: #000102;
    font-size: 18px;
    line-height: 24px;
`

  
//   .cards__item__link {
    // display: flex;
    // flex-flow: column;
    // width: 100%;
    // box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    // -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    // filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    // border-radius: 10px;
    // overflow: hidden;
    // text-decoration: none;
//   }
  
//   .cards__item__pic-wrap {
    // position: relative;
    // width: 100%;
    // padding-top: 67%;
    // overflow: hidden;
//   }
  
//   .fade-img {
    // animation-name: fade-img;
    // animation-duration: 2s;
//   }
  
//   .cards__item__pic-wrap::after {
    // content: attr(data-category);
    // position: absolute;
    // bottom: 0;
    // margin-left: 10px;
    // padding: 6px 8px;
    // max-width: calc((100%) - 60px);
    // font-size: 12px;
    // font-weight: 700;
    // color: #fff;
    // background-color: #1f98f4;
    // box-sizing: border-box;
//   }
  
//   .cards__item__img {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // display: block;
    // width: 100%;
    // max-width: 100%;
    // height: 100%;
    // max-height: 100%;
    // object-fit: cover;
    // transition: all 0.2s linear;
//   }
  
//   .cards__item__img:hover {
//     transform: scale(1.1);
//   }
  
//   .cards__item__info {
//     padding: 20px 30px 30px;
//   }
  
//   .cards__item__text {
    // color: #000102;
    // font-size: 18px;
    // line-height: 24px;
//   }
  
//   @media only screen and (min-width: 1200px) {
//     .content__blog__container {
//       width: 84%;
//     }
//   }
  
//   @media only screen and (min-width: 1024px) {
//     .cards__items {
//       display: flex;
//     }
//   }
  
//   @media only screen and (max-width: 1024px) {
//     .cards__item {
//       margin-bottom: 2rem;
//     }
//  }