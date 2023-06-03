// Dependencies
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
//import { Results } from './Results';

// API
import { fetchPet } from '../api/fetchPet';

// Components
import Carousel from './Carousel';

export const Details = () => {
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);

  console.log('results: ', results);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🥴</h2>
      </div>
    );
  }

  const [pet] = results.data.pets;

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <center>
          <img src={pet.images[0]} alt={''} width="10%" />
        </center>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
