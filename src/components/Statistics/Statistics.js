import React from 'react';
import "./Statistics.sass"


const Statistics = () => {
	return (
		<div className="App_Statistics">
			<div className="App_Statistics_Header">
				<span>СТАТИСТИКА</span>
			</div>
			<div className="App_Statistics_Info">
				<span>Вкладок с сайтом открыто: </span>
				<span>Пользователей: </span>
				<span>Аниме: </span>
				<span>Комментариев: </span>
				<span>Рецензий: </span>
				<div>
					<span>Новых серий за последние: </span>
					<ul>
						<li>24 часа:</li>
						<li>12 часов:</li>
						<li>3 часа:</li>
						<li>Час:</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Statistics;