import React, { useEffect, useState } from 'react'
import './mainPage.css'
import { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { footerRendering, isInSiteChanging, navbarRendering, seeMoreButtonWork, selectAllTours, toursFiltering } from '../../Store/AllToursSlice/allToursSlice';
import MainPageSingleTour from '../../Components/MainPageSingleTour/MainPageSingleTour';
import Close from '../../Icons/Close';
import PageTitle from '../../Components/PageTitle/PageTitle';

const MainPage = () => {
    const { sortedTours, notSortedTours, isSeeMoreButtonActive} = useSelector(selectAllTours)
    const dispatch = useDispatch()
  

    useEffect(() => {
      dispatch(footerRendering(true));
      dispatch(navbarRendering(true))
      dispatch(isInSiteChanging());
      dispatch(seeMoreButtonWork(0));
    }, [])

    const OnlyMainPageStyle = createGlobalStyle`
    header {
      background-color: rgb(138, 138, 138, 0.980);
    }
    body {
      padding-top: 70px;
    }
  `;

    const filterItems = ["Peru", "Switzerland", "Norway", "Australia", "China", "France", "Italy", "USA", "Canada", "New Zeland", "Austria", "Japan", "Germany"];

    const [inputActivate, setInputActivate] = useState(false)
    const [buttonName, setButtonName] = useState('---')
    const [seeMoreClicks, setSeeMoreClicks] = useState(1)

  return (
    <div className='mainPage'>
      <PageTitle title={'Plan your visit'}/>
        <OnlyMainPageStyle/>
        <div className='mainPageFirstBlock'>
            <label htmlFor="">Filter by country </label>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <div className='inputButtonBlock' onMouseEnter={() => setInputActivate(true)} onMouseLeave={() => setInputActivate(false)}>
                    <input type="button" value={buttonName}/>
                    {inputActivate && filterItems.map((el) => {
                        return(
                            <div className='filterItems' key={Math.random()*99999} onClick={() => {dispatch(toursFiltering(el)); setInputActivate(false); setButtonName(el)}}>{el}</div>
                        )
                    })}
                </div>
                {buttonName === '---' || <button className='icon' onClick={() => {dispatch(toursFiltering('all')); setButtonName('---'); setSeeMoreClicks(1); dispatch(seeMoreButtonWork(0))}}><Close/></button>}
            </form>
        </div>
        <div className='sortedTours'>
          {(sortedTours.length === 0 ? notSortedTours : sortedTours).map((el) => <MainPageSingleTour tour={el} key={Math.random() * 66666}/>)}
          {isSeeMoreButtonActive && <button className='seeMoreButton' onClick={() => {dispatch(seeMoreButtonWork(seeMoreClicks)); setSeeMoreClicks(seeMoreClicks + 1)}}>See more</button>}
        </div>
    </div>
  )
}

export default MainPage;