import { connect } from 'react-redux';

const Notification = (props) => {
  const notification = props.notification;

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
