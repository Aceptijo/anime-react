import React from 'react';
import "./AnimeSeasonItem.sass"
import {Link, useParams} from "react-router-dom";


const AnimeSeasonItem = ({image, title, id}) => {
	
	const animeTitle = title.split('').slice(0, 35).join('')
	
	return (
		<div className="AnimeSeasonItem">
			{image?.jpg?.image_url ? (
				<Link to={`/anime/${id}`} className='AnimeSeasonItem-content'>
					<img src={image.jpg.image_url} alt=""/>
					<span>{`${animeTitle}...`}</span>
				</Link>
			) : (
				<span>Загрузка</span>
			)}
		</div>
	);
};

export default AnimeSeasonItem;