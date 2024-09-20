import "./App.sass"
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Top from "../../pages/Top/Top";
import Header from "../Header/Header";
import Anime from "../../pages/Anime/Anime";
import Random from "../../pages/Random/Random";
import Community from "../../pages/Community/Community";
import AnimeDetails from "../AnimeDetails/AnimeDetails";


function App() {
	return (
		<div>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/anime' element={<Anime/>}/>
				<Route path='/top/*' element={<Top/>}/>
				<Route path='/random' element={<Random/>}/>
				<Route path='/community' element={<Community/>}/>
				<Route path='/anime/:id' element={<AnimeDetails/>}/>
			</Routes>
		</div>
	
	);
}

export default App;
