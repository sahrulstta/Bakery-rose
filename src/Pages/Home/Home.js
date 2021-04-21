import React from 'react'
import {homeObjOne} from './Data'
import  InfoSection  from '../../Component/InfoSection/InfoSection';
import Pricing from '../../Component/Pricing/Pricing';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home
