import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
	return (
		<div className='main'>
			<div className='nav'>
				<p>Gemini</p>
				<img src={assets.user_icon} alt='' />
			</div>
			<div className='main-container'>
				<div className='greet'>
					<p>
						<span>Hello, Navdeep</span>
					</p>
					<p>How can i help you today?</p>
				</div>

				<div className='cards'>
					<div className='card'>
						<p>How much money can i make trading NQM2024</p>
						<img src={assets.compass_icon} alt='' />
					</div>

					<div className='card'>
						<p>Is trading ESM2024 easier than NQM2024</p>
						<img src={assets.compass_icon} alt='' />
					</div>

					<div className='card'>
						<p>How much margin is required for 1 mini NQM2024 long @20,522</p>
						<img src={assets.code_icon} alt='' />
					</div>

					<div className='card'>
						<p>How to retire at the age of 25</p>
						<img src={assets.bulb_icon} alt='' />
					</div>
				</div>

				<div className='main-bottom'>
					<div className='search-box'>
						<input type='text' placeholder='Enter prompt here' />
						<div>
							<img src={assets.gallery_icon} alt='' />
							<img src={assets.mic_icon} alt='' />
							<img src={assets.send_icon} alt='' />
						</div>
					</div>

					<p className='bottom-info'>
						<span>Powered by Gemini AI</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
