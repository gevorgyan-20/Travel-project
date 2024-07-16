import React from 'react'
import './secondHomePageWhyBlocks.css'
import Hearth from '../../Icons/Hearth'
import Plane from '../../Icons/Plane'
import Send from '../../Icons/Send'
import Globus from '../../Icons/Globus'
import PageTitle from '../PageTitle/PageTitle'

const SecondHomePageWhyBlocks = () => {
  return (
    <div className='secondHomePageWhyBlocks'>
        <PageTitle title={'Highland Treks'}/>
        <div className='eachSecondHomePageWhyBlock'>
            <div className='circleBlocks'>
                <div>
                    <div>
                        <Hearth/>
                    </div>
                </div>
            </div>
            <div className='textBlocks'>
                <span>New discoveries any time for anyone</span>
            </div>
        </div>
        <div className='eachSecondHomePageWhyBlock'>
            <div className='circleBlocks'>
                <div>
                    <div><Send/></div>
                </div>
            </div>
            <div className='textBlocks'>
                <span>Enjoyable Traveling(+ safe and comfortable)</span>
            </div>
        </div>
        <div className='eachSecondHomePageWhyBlock'>
            <div className='circleBlocks'>
                <div>
                    <div><Plane/></div>
                </div>
            </div>
            <div className='textBlocks'>
                <span>One of the most experienced tour operators</span>
            </div>
        </div>
        <div className='eachSecondHomePageWhyBlock'>
            <div className='circleBlocks'>
                <div>
                    <div><Globus/></div>
                </div>
            </div>
            <div className='textBlocks'>
                <span>Direct flight operating to France, Switzerland and Austria for 20 years</span>
            </div>
        </div>
    </div>
  )
}

export default SecondHomePageWhyBlocks;