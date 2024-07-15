import React, { useEffect, useRef, useState } from 'react'
import './secondHomePage.css'
import { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { footerRendering, navbarRendering, selectAllTours } from '../../Store/AllToursSlice/allToursSlice';
import SecondHomePageWhyBlocks from '../../Components/SecondHomePageWhyBlocks/SecondHomePageWhyBlocks';
import AnimatedRecomendations from '../../Components/AnimatedRecomendations/AnimatedRecomendations';
import AboutPartOfHomePage from '../../Components/AboutPartOfHomePage/AboutPartOfHomePage';
import FeedbacksPartOfHomePage from '../../Components/FeedbacksPartOfHomePage/FeedbacksPartOfHomePage';
import SeeMoreReviewPart from '../../Components/SeeMoreReviewPart/SeeMoreReviewPart';
import { feedbacks } from '../../Components/Feedbacks/feedbacks';

const SecondHomePage = () => {
    const [seeMorePartReview, setSeeMorePartReview] = useState(false)
    const [seeMoreID, setSeeMoreID] = useState(0)
    const dispatch = useDispatch()

    const OnlySecondHomePageStyle = createGlobalStyle`
    header {
      background-color: rgb(138, 138, 138, 0.980);
    }
    body {
        position: relative;
    }
  `;


    const handleSeeMorePart = (id) => {
        setSeeMoreID(id)
        setSeeMorePartReview(true)
    }

    const handlerCloseSeeMorePart = () => {
        setSeeMorePartReview(false)
    }

    const text = "HHere you make your first step of realizing your dream";
    const [animatedText, setAnimatedText] = useState('')
    const [scrollSize, setScrollSize] = useState(0)
    const indexRef = useRef(0);

    function typeWriter() {
        if(indexRef.current < text.length) {
            setAnimatedText((previous) => previous + text.charAt(indexRef.current));
            indexRef.current++;
            setTimeout(typeWriter, 80);
        }
    }

    useEffect(() => {
        dispatch(navbarRendering(true))
        dispatch(footerRendering(true))
        const timer = setTimeout(typeWriter, 1000); 
        return () => clearTimeout(timer);
    }, [])

    function logScrollSize() {
        const scrollTop = document.documentElement.scrollTop;
        setScrollSize(scrollTop);
    }

    window.addEventListener('scroll', logScrollSize);

  return (
    <div className='secondHomePage'>
        {scrollSize > 600  && <OnlySecondHomePageStyle />}
        <div className='secondPageTopBlock'>
            <div className='backgroundPart'>
                <div className='textPart'>
                    <h2>Highland Treks Agency Operator</h2>
                    <div className='animatedPartOfWelcome'>{animatedText}</div>
                </div>
            </div>
        </div>
        <div className='whyToChooseUs'>
            <div className='block'>
                <div className='textPart'>
                    <h2>5 Reasons Why To Travel With Highland Treks</h2>
                    <p>Our main goal is to make your vacation in the mountains interesting and unforgettable!</p>
                </div>
                <SecondHomePageWhyBlocks/>
            </div>
        </div>
        <AnimatedRecomendations scroll={scrollSize} scrollingSize={750} firstImage = 'https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' firstTitle = 'Classic and adventure tours' firstSubtitle = "Discover the perfect blend of classic and adventure tours with our mountain traveling company, offering something for every type of explorer." secondImage = "https://images.pexels.com/photos/1001430/pexels-photo-1001430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" secondTitle='Our classic tours highlight the timeless beauty and rich history of the mountains, allowing you to immerse yourself in the serene landscapes and local culture.'  thirdImage = "https://images.pexels.com/photos/2313669/pexels-photo-2313669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" thirdTitle='Each tour is crafted to provide an enriching and memorable journey, guided by our knowledgeable and passionate team. '/>
        <AnimatedRecomendations scroll={scrollSize} scrollingSize={1310} firstImage='https://images.pexels.com/photos/1194233/pexels-photo-1194233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' firstTitle='Mountain climbing with experienced guides' firstSubtitle='Experience the thrill of mountain climbing with our seasoned guides who ensure your safety and success on every ascent.' secondTitle='Our experienced guides bring years of expertise and in-depth knowledge of the terrain, ensuring a safe and enjoyable climb.' secondImage='https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' thirdTitle='Each journey is carefully planned, taking into account your skill level and preferences to create a personalized adventure.' thirdImage='https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <AnimatedRecomendations scroll={scrollSize} scrollingSize={1860} firstImage='https://images.pexels.com/photos/1748597/pexels-photo-1748597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' firstTitle='Experience the thrill of mountain skiing adventures' firstSubtitle='Discover the exhilarating world of mountain skiing with our expert-guided tours that cater to both beginners and seasoned skiers.' secondImage='https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' secondTitle='Our comprehensive packages include top-notch ski gear, safety equipment, and personalized training sessions to ensure a safe and memorable experience.' thirdImage='https://images.pexels.com/photos/19535249/pexels-photo-19535249/free-photo-of-ski-lift-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' thirdTitle='Relax in our luxurious mountain lodges after an adventurous day on the slopes, complete with gourmet dining and cozy accommodations.' />
        <AboutPartOfHomePage/>
        <FeedbacksPartOfHomePage handler={handleSeeMorePart}/>
        {seeMorePartReview && <SeeMoreReviewPart handler={handlerCloseSeeMorePart} info={feedbacks[seeMoreID -1]}/>}
    </div>
  )
}

export default SecondHomePage;