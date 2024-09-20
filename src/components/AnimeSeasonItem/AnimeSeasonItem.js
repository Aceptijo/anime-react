import React from 'react';
import "./AnimeSeasonItem.sass"


const AnimeSeasonItem = ({image, title}) => {
	return (
		<div className="AnimeSeasonItem">
			{image?.jpg?.image_url ? (
				<div className='AnimeSeasonItem-content'>
					<img src={image.jpg.image_url} alt=""/>
					<span>{title}</span>
				</div>
			) : (
				<span>Загрузка</span>
			)}
		</div>
	);
};

export default AnimeSeasonItem;