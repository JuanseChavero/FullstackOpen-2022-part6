import { createSlice } from '@reduxjs/toolkit';
import { notify } from './notificationReducer';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes: (state, action) => {
      const anecdotes = action.payload;
      return anecdotes;
    },
    appendAnecdote: (state, action) => {
      const anecdote = action.payload;
      state.push(anecdote);
    },
    voteAnecdote: (state, action) => {
      const anecdote = action.payload;
      const anecdoteToUpdate = state.find((a) => a.id === anecdote.id);
      anecdoteToUpdate.votes = anecdote.votes;
    },
  },
});

export const { setAnecdotes, appendAnecdote, voteAnecdote } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  if (content.length === 0) return;

  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(anecdote));
    dispatch(notify(`Anecdote "${anecdote.content}" created!`, 'success', 5));
  };
};

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.vote(anecdote);
    dispatch(voteAnecdote(updatedAnecdote));
    dispatch(notify(`Anecdote "${anecdote.content}" voted!`, 'success', 5));
  };
};

export default anecdoteSlice.reducer;
