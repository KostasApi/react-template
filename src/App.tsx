import React from 'react';

import './App.css';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import { useGetPokemonByNameQuery } from './redux/services/pokemon';
import {
  decrement,
  increment,
  selectCount,
} from './redux/slices/counter/counterSlice';

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetPokemonByNameQuery('raichu');

  return (
    <div className="App">
      <div>React template project</div>
      <div>Count: {count}</div>
      <button className="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
