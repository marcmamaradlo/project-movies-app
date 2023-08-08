import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='container navbar-bg-dark'>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <p><Link to='/'>MoviesDB</Link></p>
                    <i className="fa-solid fa-video"></i>
                </div>
                <div className='navbar-search-container'>
                    <div className='navbar-search'>
                        <input type='text' id='searchInput' placeholder='Search...' />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <div className='navbar-links'>
                    <p><Link>Movies</Link></p>
                    <p><Link>TV Shows</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;   