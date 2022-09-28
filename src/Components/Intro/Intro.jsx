import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
	return (
		<div className="intro">
			<div className="i-left">
				<div className="i-name">
					<span> Hey! I AM </span>
					<span>Rahul</span>
					<span>
						Frontend Developer with high level of experience in web designing and development, productting
						the Quality works
					</span>
				</div>
				<button className="button i-button">Hire me</button>
				<div className="i-icons">
					<img src={Github} alt="" />
					<img src={Linkedin} alt="" />
					<img src={Instagram} alt="" />
				</div>
			</div>

			<div className="i-right">
				<img src={vector1} alt="" />
				<img src={vector2} alt="" />
				<img src={boy} alt="" />
				<img src={glassesimoji} alt="" />
				<div className="i-floating1">

					<FloatingDiv image={crown} text1="Web" text2="Developer" />
				</div>

				<div className="i-floating2">

					<FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
			
      	</div>
        <div className="blur1" ></div>
        <div className="blur2" ></div>

			</div>
		</div>
	);
}

export default Intro;
