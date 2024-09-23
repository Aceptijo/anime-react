import React from 'react';
import "./AnimeSeasonItem.sass"


const AnimeSeasonItem = ({image, title}) => {
	const animeTitle = title.split('').slice(0, 35).join('')
	
	console.log(animeTitle)
	return (
		<div className="AnimeSeasonItem">
			{image?.jpg?.image_url ? (
				<div className='AnimeSeasonItem-content'>
					<img src={image.jpg.image_url} alt=""/>
					<span>{`${animeTitle}...`}</span>
				</div>
			) : (
				<span>Загрузка</span>
			)}
		</div>
	);
};

export default AnimeSeasonItem;