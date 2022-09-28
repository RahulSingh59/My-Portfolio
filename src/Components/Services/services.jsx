import React from 'react'
import  './services.css';
import Heart from "../../img/heartemoji.png";
import Humble from "../../img/humble.png"
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./Test.pdf";
const services = () => {
  return (
    <div className='services'>
        <div className="awsome">
            <span>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
            Suscipit minima maiores, reiciendis quasi nihil eum quisquam dolores, doloremque !</span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur3 s-button"></div>
        </div>
        <div className="cards">
          <div style={{left:'14rem'}}>
          <Card 
          emoji= {Heart}
          heading = {'Design'}
          details = {"Figma, Sketch , Adobe, XD"}
          />
          </div>

          <div style={{left:'-4rem', top:'12rem'}}>
          <Card 
          emoji= {Glasses}
          heading = {'Developer'}
          details = {"HTML, CSS, React"}
          />
          </div>


          <div  style={{left:'12rem', top:'19rem'}}>
          <Card
          emoji= {Humble}
          heading = {'Humble'}
          details = {"Figma, Sketch , Adobe, XD"}
          />
          </div>

        </div>
        <div className="blur s-blur2" style={{background: "var(--purple:)"}}></div>
    </div>
  )
}

export default services