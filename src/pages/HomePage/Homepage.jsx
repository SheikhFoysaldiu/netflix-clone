import React from "react";

import "./Homepage.style.css";

import Navbar from "../../component/Navbar/Navbar.jsx";
import Banner from "../../component/Banner/Banner";
import Row from "../../component/Row/Row";
import requests from "../../api/requests";

function Homescreen() {
	return (
		<div className='homescreen'>
			<Navbar />
			<Banner />
			<Row
				title='NETFLIX ORIGNAL'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default Homescreen;
