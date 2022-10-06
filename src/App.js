import React, { useEffect } from "react";
import Homepage from "./pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./pages/Profile/Profile";
import "./App.css";
function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				dispatch(
					login({
						uid: user.uid,
						email: user.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return () => {
			unsubscribe();
		};
	}, [dispatch]);
	return (
		<div className='App'>
			{!user ? (
				<Login />
			) : (
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
