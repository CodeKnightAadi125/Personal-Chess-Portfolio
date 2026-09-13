
import {Link,NavLink} from 'react-router-dom';
function Header(){
    return(
<header className="shadow sticky z-50 top-0">
<nav className="bg-white px-6 py-3 flex justify-between items-center">
{/*Logo*/}
<div>
    <span className="text-2xl font-bold text-blue-600">AadiOnBoard</span>
</div>
<ul className="flex gap-6">
    <li>
        <NavLink to="/" className={({isActive})=>isActive? "text-blue-600 font-bold":"text-gray-700"}>Home</NavLink>
    </li>
    <li>
        <NavLink to="/about" className={({isActive})=>isActive? "text-blue-600 font-bold":"text-gray-700"}>About</NavLink>
    </li>
    <li>
        <NavLink to="/openings" className={({isActive})=>isActive? "text-blue-600 font-bold":"text-gray-700"}>Openings</NavLink>
    </li>
</ul>
</nav>
</header>
    )
}
export default Header;