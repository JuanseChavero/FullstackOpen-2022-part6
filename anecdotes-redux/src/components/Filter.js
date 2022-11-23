import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

// Filter component with an input for filtering a list
const Filter = (props) => {
  const handleFilterChange = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <div>
      filter <input onChange={handleFilterChange} />
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
