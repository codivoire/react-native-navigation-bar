declare module "@codivoire/react-native-navigation-bar" {
  class RnNavigationBar {
    changeColor: (color: string, light?: boolean, animated?: boolean) => void
    hide: () => any
    show: () => any
  }

  const NavigationBar: RnNavigationBar;

  export default NavigationBar;
}
