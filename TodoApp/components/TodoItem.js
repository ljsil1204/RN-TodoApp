import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function TodoItem({id, text, done, onToggle, onRemove}) {
  const remove = () => {
    Alert.alert(
      '삭제', // 제목
      '정말로 삭제?', // 내용
      //버튼 배열
      // style : cancel, destructive, default(파란색)  => ios 에서만 동작
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      // 옵션 객체
      // cancelable => 안드로이드 Alart 바깥영역 터치, 백버튼 터치 시 닫히도록 설정
      // onDismiss => Alart 가 닫힐 때 호출되는 함수
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      {/* onPress={() => onToggle(id)} : 함수를 변수나 상수에 담지 않고 바로 사용하는 함수 => 익명함수 */}
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]} />
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={remove}>
          <MaterialIcons name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
