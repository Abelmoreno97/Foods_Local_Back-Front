import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <div>
            <Link to="/">LANDING </Link>
            <Link to="/home">HOME </Link>
            <Link to="/create">FORM </Link>
            <Link to="/detail">DETAIL </Link>
        </div>
    )
};

export default NavBar;