import React from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import CollapseView from 'react-native-collapse-view';
import styles from './styles';

function PureTaskItem(props) {
  const { item } = props;
  const {
    name, description, isFinished,
  } = item;

  function renderIconView(collapse) {
    let img = null;
    let check = null;

    if (isFinished) {
      check = <View style={styles.checkbox} />;
    } else {
      check = <View style={styles.checkboxDone} />;
    }
    if (!collapse) {
      img = <View style={{ position: 'absolute', right: 10 }}><Image style={styles.icon} source={require('../../../images/arrow01.png')} /></View>;
    } else {
      img = <View style={{ position: 'absolute', right: 10 }}><Image style={styles.icon} source={require('../../../images/arrow02.png')} /></View>;
    }

    return (
      <View style={styles.iconView}>
        { check }
        <Text>
          { name }
        </Text>
        { img }
      </View>
    );
  }

  function renderCollapsedView(collapse) {
    return (
      <View style={styles.collapseView}>
        <Text>{description}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CollapseView
        tension={20}
        renderView={renderIconView}
        renderCollapseView={renderCollapsedView}
      />
    </View>
  );
}

PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  // listId: PropTypes.number.isRequired,
};

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
