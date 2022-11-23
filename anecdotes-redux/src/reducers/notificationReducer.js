import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    type: 'info',
  },
  reducers: {
    setNotification: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
    },

    // Clear the notification message.
    clearNotification: (state) => {
      state.message = '';
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

// Variable to store the timeout ID for the notification, for
// resetting the timer in case there are multiple in a row
let timeoutID;

export const notify = (message, type, seconds) => {
  return (dispatch) => {
    // Clear the previous notification
    clearTimeout(timeoutID);

    // Set the notification
    dispatch(setNotification({ message, type }));

    // Clear the notification after a certain time
    timeoutID = setTimeout(() => {
      dispatch(clearNotification());
    }, seconds * 1000);
  };
};

export default notificationSlice.reducer;
