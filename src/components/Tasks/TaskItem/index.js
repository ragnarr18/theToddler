import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { PropTypes } from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';

class PureTaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true
    };
  }

  render() {
    const {
      remove, item, navigation,
    } = this.props;
    const {
      id, name, description, isFinished,
    } = item;
    const icon = require('../../../images/delete.png');
    const arrow01 = require('../../../images/arrow01.png');
    const arrow02 = require('../../../images/arrow02.png');

    let check;
    let arrow;
    if (isFinished) {
      check = <View style={styles.checkboxDone} />;
    } else {
      check = <View style={styles.checkbox} />;
    }
    if (this.state.isClosed) {
      arrow = <Image style={styles.arrow} source={arrow01} />;
    } else {
      arrow = <Image style={styles.arrow} source={arrow02} />;
    }

    return (
      <View>
        <Collapse onToggle={(status) => this.setState({ isClosed: !status })}>
          <CollapseHeader style={styles.iconView}>
            {check}
            <Text style={styles.title}>
              {name}
            </Text>
            {arrow}
          </CollapseHeader>
          <CollapseBody style={styles.collapseView}>
            <Text style={styles.description}>
              {description}
            </Text>
            <TouchableHighlight key={id} onPress={() => { remove(id); }}>
              <Image style={styles.icon} source={icon} />
            </TouchableHighlight>
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}


const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
