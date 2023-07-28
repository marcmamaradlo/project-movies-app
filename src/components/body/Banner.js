const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='banner-div'>
                    <div className='banner-details'>
                        <h2>Welcome!</h2>
                        <p>Millions of movies, TV shows and people to discover. Explore now!</p>
                        <div className='banner-details-search'>
                            <input type='text' id='searchInput' placeholder='Search...' />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className='banner-button'>
                            <button>About API <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;