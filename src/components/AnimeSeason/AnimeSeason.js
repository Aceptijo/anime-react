import React, {useEffect, useState} from 'react';
import "./AnimeSeason.sass"
import axios from "axios";
import AnimeSeasonItem from "../AnimeSeasonItem/AnimeSeasonItem";


const AnimeSeason = () => {
	const [animeSeason, setAnimeSeason] = useState([])
	
	useEffect(() => {
		axios.get('https://api.jikan.moe/v4/seasons/now?limit=7')
			.then(response => setAnimeSeason(response.data.data))
			.catch(error => console.log(error))
	}, [])
	
	
	return (
		<div className='App_AnimeSeason'>
			<div className='AnimeSeason-Header'>
				<span>АНИМЕ ЛЕТНЕГО СЕЗОНА</span>
			</div>
			<div className="AnimeSeason-List">
				{animeSeason.map(anime =>
					<AnimeSeasonItem
						key={anime.mal_id}
						image={anime.images}
						title={anime.title_english}
					/>
				)}
			</div>
		
		</div>
	);
};

export default AnimeSeason;