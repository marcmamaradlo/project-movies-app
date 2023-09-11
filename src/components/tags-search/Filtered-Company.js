import { Link } from "react-router-dom";

const FilteredCompany = ({ data, image }) => {

  const showFilteredCompanyData = () => {
    return data.results.map((item) => (
      <Link to={`/company/${item.id}`} key={item.id}>
        <div className='card-container'>
          <div className='card-container-img'>
            {item.logo_path
              ? <img src={`https://image.tmdb.org/t/p/w185${item.logo_path}`} alt={item.title} />
              : <img src={image} alt={item.title} />
            }
          </div>
          <div className='card-container-title'>
            <p>{item.name}</p>
          </div>
        </div>
      </Link>
    ))
  }
  return (
    <>
      {showFilteredCompanyData()}
    </>
  )
}

export default FilteredCompany;