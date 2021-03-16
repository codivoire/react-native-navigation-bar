import {NativeModules, Platform} from 'react-native';

const {NavigationBarColor} = NativeModules;

const NavigationBar = {
  changeColor: (color = String, light = false, animated = true) => {
    if (Platform.OS === 'android') {
      NavigationBarColor.changeNavigationBarColor(color, light, animated);
    }
  },
  show: () => {
    if (Platform.OS === 'android') {
      return NavigationBarColor.showNavigationBar();
    } else {
      return false;
    }
  },
  hide: () => {
    if (Platform.OS === 'android') {
      return NavigationBarColor.hideNavigationBar();
    } else {
      return false;
    }
  }
};

export default NavigationBar;
