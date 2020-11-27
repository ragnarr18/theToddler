import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { PropTypes } from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';


class PureTaskItem extends React.Component {
  constructor(props) {
    super(props);
    const { remove, item, navigation } = props;
    this.icon = require('../../../images/delete.png');
    this.item = item;
    this.remove = remove;
    this.navigation = navigation;
    this.navigate = this.navigation.navigate;
    this.id = this.item.id;
    this.name = this.item.name;
    this.description = this.item.description;
    this.isFinished = this.item.isFinished;
  }

  renderView() {
    let check = null;
    if (this.isFinished) {
      check = <View style={styles.checkbox} />;
    } else {
      check = <View style={styles.checkboxDone} />;
    }

    return (
      <View style={styles.iconView}>
        {check}
        <TouchableHighlight onPress={() => this.navigate('TaskDetails', this.item)}>
          <Text>
            {this.name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Collapse>
          <CollapseHeader>
            <Text>
              {this.name}
            </Text>
          </CollapseHeader>
          <CollapseBody>
            <Text>
              {this.description}
            </Text>
            <TouchableHighlight onPress={() => { this.remove(this.id); }}>
              <Text>Remove</Text>
            </TouchableHighlight>
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}


  /*
  return (
    <View>
      {renderView()}
    </View>
  );
}
*/

/*
PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
*/

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
