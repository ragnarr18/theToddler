import React from 'react';
import {
  View, Text, Button
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from '../../../modals/TaskModal';
import changeTaskList from '../../../services/changeTaskList';
import data from '../../../resources/data.json';
import styles from './styles';

function moveAndClose(id, listId, closeModal) {
  changeTaskList(id, listId);
  closeModal();
}

function constructList(listId) {
  const items = data.lists.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  items.forEach((item) => {
    if (item.value === listId) {
      item.selected = true;
    }
  });
  return items;
}

class MoveTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.task.listId,
    };
  }

  updateList(text) {
    this.setState({ list: text });
  }

  render() {
    const { closeModal, isOpen, task } = this.props;
    const { id, listId } = task;
    const items = constructList(listId);

    return (
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Move Task</Text>
        <View style={{ marginBottom: 80 }}>
          <View style={{ zIndex: 10 }}>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>Destination</Text>
            <DropDownPicker
              items={items}
              placeholder="Select new list"
              containerStyle={{
                height: 40,
              }}
              style={styles.inputDropdown}
              itemStyle={{
                zIndex: 1,
                elevation: 1,
                justifyContent: 'center',
              }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              onChangeItem={(item) => this.updateList(item.value)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Move Task"
              onPress={() => moveAndClose(id, this.state.list, closeModal)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#bbbbbb"
              onPress={closeModal}
            />
          </View>
        </View>
        <Text style={{ marginBottom: 20, opacity: 0.5 }}>
          The Task will move the next time you leave this list
        </Text>
      </Modal>
    );
  }
}

export default MoveTask;
