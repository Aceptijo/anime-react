import "./Top.sass"
import AnimeList from "../../components/AnimeList/AnimeList";
import Statistics from "../../components/Statistics/Statistics";
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";


const Top = () => {
	return (
		<div className='App_Top'>
			<AnimeSearch/>
			<div className="App_Content">
				<AnimeList/>
				<Statistics/>
			</div>
		</div>
	)
}

export default Top;