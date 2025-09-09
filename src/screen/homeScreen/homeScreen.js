import React from 'react'
import './homeScreen.css'
import HomeBanner from './homeBanner/homeBanner'
import HomeDetails from './homeDetails/homeDetails'


const HomeScreen=() =>{
    return (
        <div className="HomeScreen">
            <HomeBanner/>
            <HomeDetails/>
            
        </div>

    )
}
export default HomeScreen