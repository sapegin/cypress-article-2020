import React from 'react';
import { fetchIngredients as defaultFetchIngredients } from '../services';

export function RemotePizza({ fetchIngredients }) {
  const [status, setStatus] = React.useState('idle');
  const [ingredients, setIngredients] = React.useState([]);

  const handleCook = () => {
    setStatus('loading');
    fetchIngredients()
      .then((response) => {
        setStatus('ready');
        setIngredients(response.args.ingredients);
      })
      .catch(() => {
        setStatus('failed');
      });
  };

  return (
    <>
      <h3>Pizza</h3>
      <button onClick={handleCook} disabled={status !== 'idle'}>
        Cook
      </button>
      {status === 'failed' && <p>Something went wrong.</p>}
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
    </>
  );
}

RemotePizza.defaultProps = {
  fetchIngredients: defaultFetchIngredients,
};
