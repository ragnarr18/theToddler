import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';

function PureTaskItem(props) {
  const { item } = props;
  const {
    name, description, isFinished,
  } = item;

  const renderView = () => {
    let check = null;
    if (isFinished) {
      check = <View style={styles.checkbox} />;
    } else {
      check = <View style={styles.checkboxDone} />;
    }
    return (
      <View style={styles.iconView}>
        {check}
        <Text>
          {name}
        </Text>
      </View>
    );
  };

  const renderCollapsedView = (
    <View style={styles.collapseView}>
      <Text>{description}</Text>
    </View>
  );

  return (
    <View>
      <Collapse style={styles.container}>
        <CollapseHeader>
          {renderView()}
        </CollapseHeader>
        <CollapseBody>
          {renderCollapsedView}
        </CollapseBody>
      </Collapse>
    </View>
  );
}

PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
};

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
