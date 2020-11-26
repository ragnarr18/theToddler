import React from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import ClickableIcon from '../../ClickableIcon';
import styles from './styles';
import data from '../../../resources/data.json';

function placeHolderFunction() {
  console.log('hello');
}

function PureTaskItem(props) {
  const icon = require('../../../images/delete.png');
  const { item } = props;
  const {
    id, name, description, isFinished,
  } = item;

  function deleteSelf() {
    data.tasks = data.tasks.filter((t) => t.id !== { id });
    console.log(id, data.tasks.length);
  }

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
      <ClickableIcon iconSource={icon} iconFunction={deleteSelf} />
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
