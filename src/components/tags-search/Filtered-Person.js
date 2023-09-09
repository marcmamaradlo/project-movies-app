import { Link } from "react-router-dom";

const FilteredPerson = ({ data }) => {

  console.log(data);

  const showFilteredPersonData = () => {
    return data.map((item) => (
      <Link to={`/person/${item.id}`}>
        <div className='card-container'>
          <div className='card-container-img'>
            {item.profile_path
              ? <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />
              : <img src='https://images.unsplash.com/photo-1648170723309-46a266549e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80' alt={item.title} />
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
      {showFilteredPersonData()}
    </>
  )
}

export default FilteredPerson;