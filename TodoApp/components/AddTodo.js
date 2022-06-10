import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력히세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress} // keyboard enter 누를 시 호출 함수
        returnKeyType="done" // enter 문구
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.buttonStyle}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default AddTodo;
