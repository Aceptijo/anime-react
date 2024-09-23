import "./Navbar.sass"
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const Navbar = () => {
	const [randomAnime, setRandomAnime] = useState([])
	const [newRandomAnime, setNewRandomAnime] = useState(false)
	
	const fetchRandomAnime = async () => {
		try {
			const response = await axios.get('https://api.jikan.moe/v4/random/anime')
			setRandomAnime(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}
	
	useEffect(() => {
		fetchRandomAnime()
	}, [newRandomAnime])
	
	const randomClick = () => {
		setNewRandomAnime(prevState => !prevState)
	}
	
	
	return (
		<div className='App_Navbar'>
			<Logo/>
			<div className='Navbar_Links'>
				<Link to="/">Главная</Link>
				<Link to="/anime">Аниме</Link>
				<Link to="/top">TOП 100</Link>
				<Link to={`/anime/${randomAnime.mal_id}`} onClick={randomClick}>Случайное</Link>
				<Link to="/community">Сообщество</Link>
			</div>
		</div>
	)
}

export default Navbar;