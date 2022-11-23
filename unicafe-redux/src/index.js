import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({ type: 'GOOD' });
  };

  const ok = () => {
    store.dispatch({ type: 'OK' });
  };

  const bad = () => {
    store.dispatch({ type: 'BAD' });
  };

  const zero = () => {
    store.dispatch({ type: 'ZERO' });
  };

  const state = store.getState();

  return (
    <div>
      <div>
        <button onClick={good}>Good</button>
        <button onClick={ok}>Ok</button>
        <button onClick={bad}>Bad</button>
        <button onClick={zero}>Zero</button>
      </div>
      <div>
        <div>Good: {state.good}</div>
        <div>Ok: {state.ok}</div>
        <div>Bad: {state.bad}</div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
