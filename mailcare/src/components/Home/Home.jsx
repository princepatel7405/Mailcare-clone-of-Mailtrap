import React from 'react'
import Header from '../Header/Header'
import MiddleContent from '../Middle content/MiddleContent'
import Qa from '../QA/Qa'
import Setup from '../Setup/Setup'
import Slider from '../Slider/Slider'
import Users from '../Bottom Content/Users'
import Faq from '../Bottom Content/Faq'
import BottomPoster from '../Bottom Content/BottomPoster'
const Home = () => {
  return (<>
    
    <Header/>
    <MiddleContent/>
    <Setup/>
    <Qa/>
    <Slider/>
    <Users/>
    <Faq/>
    <BottomPoster/>
    
  </>
  )
}

export default Home