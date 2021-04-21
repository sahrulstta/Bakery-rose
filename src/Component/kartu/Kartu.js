import React from 'react';
import {Cards, CardContainer, CardWraper, Carditems, Carditem} from './KartuElement'
import Kartuu from './Kartuu';



function Kartu() {
    return(
    <>
    <Cards>
        <CardContainer>
            <CardWraper>
                <Carditems>
                    <Carditem>
                        <Kartuu/>
                    </Carditem>
                </Carditems>
                <Carditems>
                    <Carditem>
                        <Kartuu/>
                    </Carditem>
                </Carditems>
            </CardWraper>
        </CardContainer>
    </Cards>
    </>
    );
}

export default Kartu