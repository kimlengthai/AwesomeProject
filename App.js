import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get("window");
const circleWidth = width / 2;

const UIAnimation = () => {
  const [fontsLoaded] = useFonts({
    'Itim-Regular': require('./assets/fonts/Itim/Itim-Regular.ttf'),
  });

  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(translation.y, { toValue: 100, duration: 2000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 170, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 150, duration: 2000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 270, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 300, duration: 2000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 370, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
      Animated.timing(translation.x, { toValue: 413, duration: 2000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(translation.y, { toValue: 458, duration: 1000, easing: Easing.easeIn, useNativeDriver: true }),
    ]).start();
  }, []);

  const move = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.sequence([
      Animated.timing(move, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(move, { toValue: 0, duration: 4000, easing: Easing.linear, useNativeDriver: true }),
    ])
  ).start();

  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });

  const scale = move.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.babyUniversity,
      {
        fontFamily: 'Itim-Regular', fontSize: 50
      }]}
                  >Baby University</Text>
      <Animated.View
        style={[
          styles.ball,
          {
            transform: [{ translateY: translation.y }, { translateX: translation.x }],
          },
        ]}
      />
      <View style={styles.shadow} />
      <View style={styles.shadow2} />
      <View style={styles.shadow3} />
      {[...Array(1)].map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.ballYellowTop,
            { top: -30 },
            { transform: [{ scale: scale }] },
          ]}
        />
      ))}
      <Animated.View
        style={[
          styles.ballYellowBottom,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballRed,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenRight,
          { transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View
        style={[
          styles.ballGreenBottom,
          { transform: [{ scale: scale }] },
        ]}
      />
      <View style={styles.coveringI} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  babyUniversity: {
    color: 'darkblue',
    position: 'absolute',
    top: '45%',
    left: '35%',
  },
  ball: {
    backgroundColor: '#dd3434',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    left: 235,
    top: -100,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  
  shadow: {
    width: 185,
    height: 20,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 100,
    left: 200,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow2: {
    width: 185,
    height: 20,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 200,
    left: 350,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  shadow3: {
    width: 150,
    height: 20,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 300,
    left: 498,
    boxShadow: '0 0 10px black',
    zIndex: -1,
  },
  ballYellowTop: {
    backgroundColor: 'rgb(247, 213, 83)',
    borderRadius: 75,
    position: 'absolute',
    width: 150,
    height: 150,
    left: 550,
  },
  ballYellowBottom: {
    backgroundColor: 'rgb(247, 213, 83)',
    borderRadius: 75,
    position: 'absolute',
    width: 160,
    height: 160,
    right: 120,
    bottom: -80,
  },
  ballRed: {
    backgroundColor: 'rgb(237, 93, 91)',
    borderRadius: 75,
    position: 'absolute',
    width: 150,
    height: 150,
    left: -60,
    top: 100,
  },
  ballGreenRight: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    right: -80,
    top: 10,
  },
  ballGreenBottom: {
    backgroundColor: 'rgb(162, 193, 60)',
    borderRadius: 125,
    position: 'absolute',
    width: 220,
    height: 220,
    left: 50,
    bottom: -100,
  },
  coveringI: {
    width: 10,
    height: 10,
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 376,
    left: 660,
  },
});

export default UIAnimation;
