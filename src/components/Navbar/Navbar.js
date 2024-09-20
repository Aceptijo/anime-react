import "./Navbar.sass"
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";


const Navbar = () => {
	return (
		<div className='App_Navbar'>
			<Logo/>
			<div className='Navbar_Links'>
				<Link to="/">Главная</Link>
				<Link to="/anime">Аниме</>
				<Link to="/top">TOП 100</Link>
				<Link to="/random">Случайное</Link>
				<Link to="/community">Сообщество</Link>
			</div>
		</div>
	)
}

export default Navbar;