import "./Navbar.sass"
import Logo from "../Logo/Logo";


const Navbar = () => {
	return (
		<div className='App_Navbar'>
			<Logo/>
			<div className='Navbar_Links'>
				<a href="/">Главная</a>
				<a href="/anime">Аниме</a>
				<a href="/top">TOП 100</a>
				<a href="/random">Случайное</a>
				<a href="/community">Сообщество</a>
			</div>
		</div>
	)
}

export default Navbar;