import React from 'react';
import "./AnimeTrailer.sass"
import ReactPlayer from "react-player";


const AnimeTrailer = ({anime}) => {
	return (
		<div className="App_AnimeTrailer">
			<div className='AnimeTrailer_Header'>
				<span>ТРЕЙЛЕР</span>
			</div>
			<div className="AnimeTrailer_Video">
				{anime?.trailer?.url ? (
					// <video src={anime.trailer.url} controls></video>
					<ReactPlayer url={anime.trailer.url} width={'100%'} height={'100%'}/>
				) : (
					<span>Загрузка</span>
				)}
			</div>
		</div>
	);
};

export default AnimeTrailer;