import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Store the value of the "anecdote" input
    const content = event.target.anecdote.value;

    // Create a new anecdote with the content
    props.createAnecdote(content);

    // Reset the value of the "anecdote" input
    event.target.anecdote.value = '';
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createAnecdote,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
