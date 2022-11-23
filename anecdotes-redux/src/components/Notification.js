import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    color: 'black',
    fontSize: 20,
    display: notification.message ? 'block' : 'none',
  };

  return (
    <div style={style}>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;
