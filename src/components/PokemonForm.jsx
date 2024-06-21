
// src/components/PokemonForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = ({addPokemon}) => {
  const [formData, setFormData] = useState(initialState);

  // initialize the hook
  // navigate is a function we can pass a route path 
  // to.
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : complete submit logic
	addPokemon(formData)
	setFormData(initialState)
	navigate('/pokemon')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

//   function handleChange(e){
// 	setFormData({
// 		...formData,
// 		[e.target.name]: e.target.value
// 	})
//   }

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
