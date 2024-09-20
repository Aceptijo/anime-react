import React from 'react';
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";
import "./Home.sass"
import AnimeSeason from "../../components/AnimeSeason/AnimeSeason";


const Home = () => {
	return (
		<div className='App_Home'>
			<AnimeSearch/>
			<AnimeSeason/>
		</div>
	);
};

export default Home;