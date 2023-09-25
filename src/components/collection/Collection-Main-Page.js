import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context";

import CollectionBanner from "./Collection-Banner";
import CollectionContent from "./Collection-Content";
const CollectionMainPage = () => {

  const params = useParams();
  const [collectionData, setCollectionData] = useState([]);
  const context = useContext(MyContext);
  const apiKey = context.state.apiKey;


  async function getCollectionData() {
    try {
      const selector = 'collection';
      const dataCollection = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}?api_key=${apiKey}`);
      setCollectionData(dataCollection.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCollectionData(); // eslint-disable-next-line 
  }, [params.id]);

  return (
    <div className='container'>
      <div className='collection-page'>
        <CollectionBanner
          name={collectionData.name}
          id={collectionData.id}
          overview={collectionData.overview}
          backdropPath={collectionData.backdrop_path}
          posterPath={collectionData.poster_path}
        />
      </div>
      <div className='section'>
        <CollectionContent data={collectionData.parts} />
      </div>
    </div>
  )
}

export default CollectionMainPage;