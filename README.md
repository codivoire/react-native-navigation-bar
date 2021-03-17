# React Native Navigation Bar Color Change
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fthebylito%2Freact-native-navigation-bar-color.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fthebylito%2Freact-native-navigation-bar-color?ref=badge_shield)


React Native Navigation Bar Color Change is a [React Native](http://facebook.github.io/react-native/) library for change color of navigation/Bottom bar on Android.

### Android Only

<div>
<img src="https://github.com/thebylito/react-native-navigation-bar-color/raw/master/screenshots/screenShot1.jpg" height="600">
<img src="https://github.com/thebylito/react-native-navigation-bar-color/raw/master/screenshots/screenShot2.jpg" height="600">
<img src="https://github.com/thebylito/react-native-navigation-bar-color/raw/master/screenshots/screenShot3.jpg" height="600">
<img src="https://user-images.githubusercontent.com/29806253/46919604-96247c00-cfaf-11e8-996a-81330dad6562.png" height="600">
</div>

## Installation

### 1 - Dependencies:

react-native >= 0.60.0

### 2 - Install the package:

`$ yarn add @codivoire/react-native-navigation-bar`

or

`$ npm install @codivoire/react-native-navigation-bar --save`

## Example

```javascript
import React from 'react';
import {View, Text, Button} from 'react-native';
import NavigationBar from '@codivoire/react-native-navigation-bar';

export default function App() {
  const setNavigationColor = color => {
    NavigationBar.changeColor(color);
  };
  const hideNavigation = () => {
    NavigationBar.hide();
  };

  const showNavigation = () => {
    NavigationBar.show();
  };

  const testSetTranslucent = () => {
    NavigationBar.changeColor('translucent', false);
  };

  const testSetTransparent = () => {
    NavigationBar.changeColor('transparent', true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
      }}>
      <Button title="Set transparent" onPress={testSetTransparent} />
      <Button title="Set translucent" onPress={testSetTranslucent} />
      <Button
        title="Set color red"
        onPress={() => {
          setNavigationColor('red');
        }}
      />
      <Button
        title="Set color blue"
        onPress={() => {
          setNavigationColor('blue');
        }}
      />
      <Button
        title="Set color ligth"
        onPress={() => {
          changeNavigationBarColor('#ffffff', true);
        }}
      />
      <Button title="Hide bar" onPress={hideNavigation} />
      <Button title="Show bar" onPress={showNavigation} />
      <Text>Hello Word!</Text>
    </View>
  );
}
```

## API

### `changeColor(color, Boolean(light icon color), Boolean(animated - default is true))`: (Android)
Change color of Navigation/Bottom bar.
color can be a "translucent" | "transparent" | HEX color, or name.

ex: green, blue, #80b3ff, #ffffff....

Light is true? icons will be dark.

```javascript
  import NavigationBar from '@codivoire/react-native-navigation-bar';
  
  NavigationBar.changeColor('#80b3ff');
```

### `hide()`: (Android)
Hide Navigation Bar

```javascript
  import NavigationBar from '@codivoire/react-native-navigation-bar';
  
  NavigationBar.hide();
```

### `show()`: (Android)
Show Navigation Bar

```javascript
  import NavigationBar from '@codivoire/react-native-navigation-bar';
  
  NavigationBar.show();
```

## License

MIT
