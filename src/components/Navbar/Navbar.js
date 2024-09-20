import "./Navbar.sass"
import Logo from "../Logo/Logo";


const Navbar = () => {
	return (
		<div className='App_Navbar'>
			<Logo/>
			<div className='Navbar_Links'>
				<a href="/anime-react/">Главная</a>
				<a href="/anime-react/anime">Аниме</a>
				<a href="/anime-react/top">TOП 100</a>
				<a href="/anime-react/random">Случайное</a>
				<a href="/anime-react/community">Сообщество</a>
			</div>
		</div>
	)
}

export default Navbar;