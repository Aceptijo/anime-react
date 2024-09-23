import React, {useEffect, useRef, useState} from 'react';
import "./AnimeSeason.sass"
import axios from "axios";
import AnimeSeasonItem from "../AnimeSeasonItem/AnimeSeasonItem";


const AnimeSeason = () => {
	const [animeSeason, setAnimeSeason] = useState([])
	const sliderRef = useRef(null)
	
	useEffect(() => {
		async function fetchAnime() {
			try {
				const response = await axios.get('https://api.jikan.moe/v4/seasons/now')
				setAnimeSeason(response.data.data)
			} catch (error) {
				console.log(error)
			}
			
		}
		
		fetchAnime();
	}, [])
	
	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: 200,
				behavior: 'smooth'
			})
		}
	}
	
	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -200,
				behavior: 'smooth'
			})
		}
	}
	
	
	return (
		<div className='App_AnimeSeason'>
			<div className='AnimeSeason-Header'>
				<span>АНИМЕ ЛЕТНЕГО СЕЗОНА</span>
			</div>
			<div className="AnimeSlider_Сontainer">
				<button className="Slider_Arrow-left" onClick={scrollLeft}>←</button>
				<div className="AnimeSlider" ref={sliderRef}>
					{animeSeason.map(anime =>
						<AnimeSeasonItem
							key={anime.mal_id}
							image={anime.images}
							title={anime.title_english}
						/>
					)}
				</div>
				<button className="Slider_Arrow-right" onClick={scrollRight}>→</button>
			</div>
		</div>
	);
};

export default AnimeSeason;