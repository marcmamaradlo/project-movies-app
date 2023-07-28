import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='container bg-dark'>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <p><Link to='/'>MoviesDB</Link></p>
                    <i className="fa-solid fa-video"></i>
                </div>
                <div className='navbar-links'>
                    <p><Link>Movies</Link></p>
                    <p><Link>TV Shows</Link></p>
                    <p><Link>What's New</Link></p>
                    <p><Link>More...</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;   