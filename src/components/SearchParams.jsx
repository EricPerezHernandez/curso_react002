// Dependencies
//import { useState, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from '../api/fetchSearch';

// Components
import { Results } from './Results';

// Custom Hook
import { useBreedList } from '../hooks/useBreedList';

// Constants
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
  /*const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');*/
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  //const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  //useEffect(() => {
  //  requestPets();
  //  /* eslint-disable-next-line */
  //}, []);

  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //requestPets();
          const formData = new FormData(e.target);
          console.log('formData: ', formData);
          const obj = {
            animal: formData.get('animal') ?? '',
            location: formData.get('location') ?? '',
            breed: formData.get('breed') ?? '',
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            //value={location}
            placeholder="Location"
            //onChange={(e) => setLocation(e.target.value)}
            name="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            //value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              //setBreed('');
            }}
            name="animal"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds?.length}
            id="breed"
            //value={breed}
            //onChange={(e) => setBreed(e.target.value)}
            name="breed"
          >
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
