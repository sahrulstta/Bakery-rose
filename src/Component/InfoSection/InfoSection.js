import React from 'react';
import {Link} from 'react-router-dom'
import {Img, ImgWraper, InfoSec, InfoRow, InfoColum,TextWraper, TopLine,Heading,Subtitel } from "./InfoElement";
import {Container,Button} from '../../GlobalStyled'

const InfoSection = ({start,img,alt,lightBg, imgStart,lightTopLine,lightText,primary,buttonlabel,lightSub,topLine, sub, headLine}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColum>
                            <TextWraper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitel lighSub={lightSub}>{sub}</Subtitel>
                                <Link to='/Chat Now'/>
                                    <Button big fontBig primary={primary}>{buttonlabel}</Button>
                            </TextWraper>
                        </InfoColum>

                        <InfoColum>
                            <ImgWraper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWraper>
                        </InfoColum>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
