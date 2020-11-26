import React from 'react';
import PropTypes from 'prop-types';
import TaskDetailsItem from '../../../components/Tasks/TaskDetailsItem';

class PureTaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props;
    this.item = this.navigation.state.params;
  }

  render() {
    return (
      <TaskDetailsItem item={this.item} navigation={this.navigation} />
    );
  }
}

/*
PureTaskDetails.defaultProps = {
  description: '',
};

PureTaskDetails.PropsTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
*/

const TaskDetails = React.memo(PureTaskDetails);
export default TaskDetails;
