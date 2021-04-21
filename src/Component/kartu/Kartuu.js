import React from 'react'
import {Carditem, ItemLink, KartuItemWraper,KartuItemImg,KartuInfo,KartuSub} from './KartuElement'

const Kartuu = ({path, lable, itemalt, itemimg, text}) => {
    return (
        <>
        
        <Carditem>
            <ItemLink to={path}>
                <KartuItemWraper data-category={lable}>
                    <KartuItemImg src={itemimg} alt={itemalt}/>
                </KartuItemWraper>
                <KartuInfo>
                    <KartuSub>{text}</KartuSub>
                </KartuInfo>
            </ItemLink>
        </Carditem>
    </>
    )
}

export default Kartuu
