import React, { useEffect, useState } from 'react'
import './feedbacksPartOfHomePage.css'
import { feedbacks } from './../Feedbacks/feedbacks';
import EachFeedback from './../EachFeedback/EachFeedback';

const FeedbacksPartOfHomePage = ({handler}) => {
    const [activeFeedbacks, setActiveFeedbacks] = useState(0)
    const [smallScreenSize, setSmallScreenSize] = useState(false)


    useEffect(() => {
        if(window.innerWidth < 779) {
            setSmallScreenSize(true)
        } else {
            setSmallScreenSize(false)
        }
    }, [window.innerWidth])

  return (
    <div className='feedbacksPartOfHomePage'>
        <div className='container'>
            <div className='feedbackTitle'>
                <h1>Feedbacks</h1>
                <h3>Travel reviews</h3>
            </div>
            <div className='feedbackMainBlog'>
                <div className='reviewsBlock'
                style={{transform: `translateX(-${activeFeedbacks*window.innerWidth}px)`}}>
                    {feedbacks.map((el) => <EachFeedback id={el.id} text={el.text} author={el.author} handler={handler} key={Math.random() * 9999}/>)}
                </div>
                {smallScreenSize ? <div className='paginationPart'>
                    <span className={`paginationBlocks ${activeFeedbacks === 0 && 'current'}`} onClick={() => setActiveFeedbacks(0)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 1 && 'current'}`} onClick={() => setActiveFeedbacks(1)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 2 && 'current'}`} onClick={() => setActiveFeedbacks(2)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 3 && 'current'}`} onClick={() => setActiveFeedbacks(3)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 4 && 'current'}`} onClick={() => setActiveFeedbacks(4)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 5 && 'current'}`} onClick={() => setActiveFeedbacks(5)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 6 && 'current'}`} onClick={() => setActiveFeedbacks(6)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 7 && 'current'}`} onClick={() => setActiveFeedbacks(7)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 8 && 'current'}`} onClick={() => setActiveFeedbacks(8)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 9 && 'current'}`} onClick={() => setActiveFeedbacks(9)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 10 && 'current'}`} onClick={() => setActiveFeedbacks(10)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 11 && 'current'}`} onClick={() => setActiveFeedbacks(11)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 12 && 'current'}`} onClick={() => setActiveFeedbacks(12)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 13 && 'current'}`} onClick={() => setActiveFeedbacks(13)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 14 && 'current'}`} onClick={() => setActiveFeedbacks(14)}></span>
                </div> : <div className='paginationPart'>
                    <span className={`paginationBlocks ${activeFeedbacks === 0 && 'current'}`} onClick={() => setActiveFeedbacks(0)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 1 && 'current'}`} onClick={() => setActiveFeedbacks(1)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 2 && 'current'}`} onClick={() => setActiveFeedbacks(2)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 3 && 'current'}`} onClick={() => setActiveFeedbacks(3)}></span>
                    <span className={`paginationBlocks ${activeFeedbacks === 4 && 'current'}`} onClick={() => setActiveFeedbacks(4)}></span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default FeedbacksPartOfHomePage;