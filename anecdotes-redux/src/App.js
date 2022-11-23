import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnecdoteList from './components/Anecdotes';
import Filter from './components/Filter';
import AnecdoteForm from './components/NewAnecdote';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(initializeAnecdotes());
  }, [dispatcher]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </div>
  );
};

export default App;
