import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'; // useSafeAreaInsets - StatusBar 높이 구하기

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0~11 범위
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();

  return (
    <>
      {/* ios 상태바 색상 적용 / 자동 높이 적용 */}
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      {/* StatusBar background android 만 적용 , barStyle은 안드로이드 아이폰 공통 속성 */}
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 15,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
