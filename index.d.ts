declare module "react-native-android-navigation-bar" {
  class NavigationBarColor {
    changeColor: (color: string, light?: boolean, animated?: boolean) => void
    hide: () => any
    show: () => any
  }

  const NavigationBar: NavigationBarColor;

  export default NavigationBar;
}
