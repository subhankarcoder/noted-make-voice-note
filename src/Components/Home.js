import React, { useEffect} from 'react'
import "./home.css";

const Home = () => {
    window.addEventListener("scroll",setScrollVar);
    window.addEventListener("resize",setScrollVar);
    function setScrollVar() {
        const htmlelement = document.documentElement;
        const percentOfScreenHeightScrolled = (htmlelement.scrollTop / htmlelement.clientHeight);
        console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
        htmlelement.style.setProperty("--scroll",Math.min(percentOfScreenHeightScrolled * 100, 100));
    }
      
  return (
    <>
    <div className='imgs'>
        <img src='./images/home_ui2.png' data-img id='img-1' className='top-section-img show'/>
    </div>
    <section className='top-section full-screen-section'>
        <div className='left'>
            <h1>Speak.<br/>Add.<br/>Complete!</h1>
            <p>Use the AI powered notes creation application. Just speak your task and let us do the job!</p>
        </div>
        {/* <img className='home_img' src='./images/home_img_note.png'/> */}
        <div className='right'>
            <img className='home_img' src='./images/home_img_note.png'/>
        </div>
        {/* <div data-img-to-show="#img-1"></div> */}
    </section>
    <section className='full-screen-section first-main-section'>
            <h1>Speak your daily tasks and add them.</h1>
        <img src='./images/ai_ui.png' className='section-img'/>
        {/* <img className='home_img' src='./images/home_img_note.png'/> */}
    </section>
    <section className='full-screen-section task-section'>
            <h1>Highlight your tasks according to<br/> your priority</h1>
        <img src='./images/card_1.png' className='card-img'/>
        {/* <img className='home_img' src='./images/home_img_note.png'/> */}
    </section>
    <section className='full-screen-section task-section'>
        <img src='./images/card_2.png' className='card-img'/>
    <h1>Complete tasks and earn Points</h1>
        {/* <img className='home_img' src='./images/home_img_note.png'/> */}
    </section>
    <section className='try'>
    <section className='try-now'>
      <h1>So what are you waiting for?</h1>
      <a href='#'>Start</a>

    </section>
    </section>
    </>
  )
}

export default Home