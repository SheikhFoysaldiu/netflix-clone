import React, { useState } from "react";
import "./Login.style.css";

import SignIn from "../../component/SingIn/SignIn";
const Login = () => {
	const [singIn, setsingIn] = useState(false);
	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img
					className='loginScreen__logo'
					src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
					alt='netflix_logo'
				/>
				<button className="loginScreen__button" onClick={()=>(setsingIn(true))}>Sing In</button>
				<div className="loginScreen_gradient"/>
			</div>
			<div className="loginScreen__body">
				{singIn ? <SignIn/>
					:
					(
						<>
							<h1>
								Unlimited films,TV Programmes and more.
							</h1>
							<h2>
								Watch anywhere. Cancel at any time.
							</h2>
							<h3>
								Ready to watch? Enter your email to create or restart
								your membership
							</h3>
							<div className="loginScreen_input">
								<form>
									<input type="email" placeholder="Email Address" />
									<button className="loginScreen__getStarted" onClick={() => (setsingIn(true))}> Get Started</button>
								</form>
							</div>
						</>)}
			</div>
		</div>
	);
};

export default Login;
