import { TransitionSpecs } from '@react-navigation/stack';
import { Platform } from 'react-native';

//for screen transition animation effects
export const MyTransition = {
  gestureEnabled: Platform.OS == "ios" ? true : false,
  gestureDirection: 'horizontal',
  headerShown: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1],
              extrapolate: 'clamp',
            }),
          },
        ],
      },
    };
  },
};
