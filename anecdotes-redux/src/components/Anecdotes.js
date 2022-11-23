import { connect } from 'react-redux';
import { updateAnecdote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote, handleVote }) => (
  <div>
    <div>{anecdote.content}</div>
    <div>
      has {anecdote.votes}
      <button onClick={handleVote}>vote</button>
    </div>
  </div>
);

const AnecdoteList = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => props.updateAnecdote(anecdote)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .slice()
      .sort((a, b) => b.votes - a.votes)
      .filter((a) =>
        a.content.toLowerCase().includes(state.filter.toLowerCase()),
      ),
  };
};

const mapDispatchToProps = {
  updateAnecdote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
