import "./AnimeList.sass"
import AnimeItem from "../AnimeItem/AnimeItem";
import {useEffect, useState} from "react";
import axios from "axios";


const AnimeList = () => {
	const [animeList, setAnimeList] = useState([])
	
	useEffect(() => {
		axios.get('https://api.jikan.moe/v4/top/anime?limit=20')
			.then(response => {
				setAnimeList(response.data.data)
			})
			.catch(error => {
				console.log('Ошибка при получении', error)
			})
	}, []);
	
	return (
		<div className="App_AnimeList">
			<div className="AnimeList_Header">
				<span>
					ТОП-100 АНИМЕ-СЕРИАЛОВ
				</span>
			</div>
			<div className="App_AnimeList-Items">
				{animeList.map(item =>
					<AnimeItem
						key={item.mal_id}
						title={item.title}
						members={item.members}
						favorites={item.favorites}
						images={item.images}
						id={item.mal_id}
					/>
				)}
			</div>
		</div>
	);
};

export default AnimeList;