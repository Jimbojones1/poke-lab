
import { Link } from "react-router-dom"

export default function NavBar(){
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>	
				<li><Link to="/pokemon">pokemon</Link></li>	
				<li><Link to='/pokemon/new'>Create Pokemon</Link></li>
			</ul>
		</nav>
	)
}