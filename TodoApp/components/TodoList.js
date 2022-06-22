import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      // keyExtractor - 각 항목의 고유값을 추출해주는 함수
      // id 값이 고유값 => 리스트 렌더링 할때 고유값 필요
      // 고유값 없을 시 => 기본 항목 순서 index 사용됨 => 비효율적 업데이트되서 성능이 안좋음
      // 고유값은 문자열 타입이므로 toString 호출
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
