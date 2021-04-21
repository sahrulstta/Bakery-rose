import React from 'react'
import Kartuu from '../../Component/kartu/Kartuu';
import { kartuOne, kartuTwo } from './Data';
import { Carditem, CardWraper, Cardss, CardContainer } from '../../Component/kartu/KartuElement';
import Cards from '../../Component/CardItems/Cards'

const Product = () => {
    return (
        <>
               <Cards/>
               {/* <Cardss>
                   <CardContainer>
                <CardWraper>
                
                    <Kartuu {...kartuTwo}/>

                    <Kartuu {...kartuOne}/>
                    <Kartuu {...kartuOne}/>
                
                
               
                    <Kartuu {...kartuOne}/>
                    <Kartuu {...kartuOne}/>
                
                </CardWraper>
                </CardContainer>
                </Cardss> */}
        </>
    )
}

export default Product
