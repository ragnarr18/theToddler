import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import EditTask from '../EditTask';
import MoveTask from '../MoveTask';
import styles from './styles';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
      isEditModalOpen: false,
      isMoveModalOpen: false,
    };
  }

  render() {
    const {
      remove, item, functions
    } = this.props;
    const {
      id, name, description, isFinished,
    } = item;
    const {
      update, closeEdit, closeMove
    } = functions;

    // icons
    const trash = require('../../../images/delete.png');
    const edit = require('../../../images/edit.png');
    const move = require('../../../images/move.png');
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
              <View style={styles.iconContainer}>
                <Image style={styles.icon} source={trash} />
                <Text style={styles.iconText}> Discard Task</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              key={id}
              onPress={() => { this.setState({ isEditModalOpen: true }); }}
            >
              <View style={styles.iconContainer} >
                <Image style={styles.icon} source={edit} />
                <Text style={styles.iconText}> Edit Task</Text>
                <EditTask
                  isOpen={(this.state.isEditModalOpen)}
                  closeModal={() => this.setState({ isEditModalOpen: false })}
                  task={item}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              key={id}
              onPress={() => { this.setState({ isMoveModalOpen: true }); }}
            >
              <View style={styles.iconContainer}>
                <Image style={styles.icon} source={move} />
                <Text style={styles.iconText}> Move Task</Text>
                <MoveTask
                  isOpen={(this.state.isMoveModalOpen)}
                  closeModal={() => this.setState({ isMoveModalOpen: false })}
                  task={item}
                />
              </View>
            </TouchableHighlight>
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}

export default TaskItem;
