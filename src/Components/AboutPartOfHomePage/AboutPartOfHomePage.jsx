import React from 'react'
import './aboutPartOfHomePage.css'

const AboutPartOfHomePage = () => {
  return (
    <div className='aboutPartOfHomePage'>
        <div className='topPart'>
            <div className='imagePart'>
                <div>
                    <img src="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
            </div>
            <div className='contentPart'>
                <h1>About Highland Treks</h1>
                <p>Welcome to Highland Treks, your gateway to the majestic and awe-inspiring world of mountain traveling. Founded by passionate adventurers, Highland Treks is dedicated to providing unforgettable experiences amidst some of the world's most breathtaking landscapes.</p>
            </div>
        </div>
        <div className='bottomPart'>
            <p>At Highland Treks, our mission is to inspire and guide outdoor enthusiasts in exploring the wonders of the mountains. We believe in fostering a deep connection with nature, promoting environmental stewardship, and encouraging a spirit of adventure. Whether you are a seasoned mountaineer or a novice hiker, we are here to make your journey safe, enjoyable, and memorable.</p>
            <p>Your safety is our top priority. Our guides are trained in first aid and mountain rescue, and we use high-quality equipment to ensure a secure trekking experience. We constantly monitor weather conditions and are prepared to adapt plans as needed to keep you safe.</p>
            <p>Joining a Highland Treks adventure means becoming part of a community of like-minded adventurers. Our trips foster camaraderie and connection, creating lifelong friendships and unforgettable memories.</p>
            <h5>What We Offer</h5>
            <ul>
                <li>Expertly Guided Tours</li>
                <li>Customized Itineraries</li>
                <li>Sustainable Practices</li>
                <li>Comprehensive Packages</li>
            </ul>
            <p className='lastPart'>Explore, discover, and connect with nature — join Highland Treks today and start your adventure of a lifetime!</p>
        </div>
    </div>
  )
}

export default AboutPartOfHomePage;