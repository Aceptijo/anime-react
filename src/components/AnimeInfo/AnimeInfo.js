import React from 'react';
import "./AnimeInfo.sass"


const AnimeInfo = ({anime}) => {
	
	return (
		<div className='App_AnimeInfo'>
			<div className='AnimeInfo_Img'>
				{anime.images && anime.images.jpg
					? (<img src={anime.images.jpg.image_url} alt=""/>)
					: (<span>Загрузка</span>)
				}
				<span>{`${anime.rank} МЕСТО В ТОП 100 СЕРИАЛОВ`}</span>
			</div>
			<span className='AnimeInfo-title'>{anime.title}</span>
			<div className='Anime_Scores'>
				<svg width="24px" height="24px" viewBox="0 0 16 16" fill="#f2b800">
					<path
						d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173
						 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184
						 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8
						 13.187l-4.389 2.256z"
					/>
				</svg>
				<span className='Scores_Score'>{anime.score}</span>
				<span className='Scores_Scored-by'>{anime.scored_by + ' votes,'}</span>
				<span className='Scores_Members'>{anime.members + ' views'}</span>
			</div>
			<hr/>
			<div className='Anime_Main-Info'>
				<div className='Info_Status'>
					<span>Статус: </span>
					<div>{anime.status}</div>
				</div>
				<div className='Info_Type'>
					<span>Тип: </span>
					<div>{anime.type}</div>
				</div>
				<div className='Info_Year'>
					<span>Год выхода: </span>
					<div>{anime.season?.charAt(0).toUpperCase() + anime.season?.slice(1) + ' ' + anime.year}</div>
				</div>
				<div className='Info_Rating'>
					<span>Возрастной рейтинг: </span>
					<div>{anime.rating}</div>
				</div>
				<div className='Info_Source'>
					<span>Первоисточник: </span>
					<div>{anime.source}</div>
				</div>
				<div className='Info_Genres'>
					<span>Жанры: </span>
					<div>
						{anime.genres?.map(genre => (
							<span key={genre.mal_id} style={
								{
									border: '2px solid #555',
									borderRadius: '6px',
									marginRight: '5px',
									padding: '0 5px 0 5px'
								}
							}
							>
								{genre.name}
							</span>
						))}
					</div>
					<div>
						{anime.themes?.map(theme => (
							<span key={theme.mal_id} style={
								{
									border: '2px solid #555',
									borderRadius: '6px',
									marginRight: '5px',
									padding: '0 5px 0 5px'
								}
							}
							>
								{theme.name}
							</span>
						))}
					</div>
				</div>
				<div className='Info_Studios'>
					<span>Студия: </span>
					<div>{anime.studios?.map(studio => studio.name).join(', ')}</div>
				</div>
				<div className='Info_Producers'>
					<span>Режиссёр: </span>
					<div>{anime.producers?.map(producer => producer.name).join(', ')}</div>
				</div>
				<div className='Info_Episodes'>
					<span>Количество серий: </span>
					<div>{anime.episodes}</div>
				</div>
				<div className='Info_Synopsis'>
					<span>{anime.synopsis}</span>
				</div>
			</div>
		</div>
	);
};

export default AnimeInfo;