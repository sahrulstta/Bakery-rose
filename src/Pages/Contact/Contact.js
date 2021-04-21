import React from 'react'
import {homeObjOne, homeObjTre, homeObjTwo} from './Data'
import  InfoSection  from '../../Component/InfoSection/InfoSection';


const Contact = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjTre} />
        </>
    )
}

export default Contact
