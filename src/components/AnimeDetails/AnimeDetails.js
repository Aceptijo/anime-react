import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import AnimeSearch from "../AnimeSearch/AnimeSearch";
import "./AnimeDetails.sass"
import AnimeInfo from "../AnimeInfo/AnimeInfo";
import Statistics from "../Statistics/Statistics";


const AnimeDetails = () => {
	const {id} = useParams()
	const [anime, setAnime] = useState('')
	
	useEffect(() => {
		axios.get(`https://api.jikan.moe/v4/anime/${id}`)
			.then(response => setAnime(response.data.data))
			.catch(error => console.log(error))
	}, [id]);
	
	return (
		<div className='App_AnimeDetails'>
			<AnimeSearch/>
			<div className="App_Info-Content">
				<AnimeInfo anime={anime}/>
				<Statistics/>
			</div>
		</div>
	);
};

export default AnimeDetails;