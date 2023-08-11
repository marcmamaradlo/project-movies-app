const Similar = ({ data }) => {

    const similarComponent = () => {
        try {
            return data.map((item) => (
                <div className='card-container' key={item.id}>
                    <div className='card-container-img'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                    </div>
                    <div className='card-container-title'>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='section'>
            <div className='heading'>
                <div className='heading-left'>
                    <h3>Recomendations</h3>
                </div>
                <p>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='coming-soon'>
                {similarComponent()}
            </div>
        </div>
    )
}

export default Similar;