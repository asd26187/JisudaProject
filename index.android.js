'use strict';

import React, {
  AppRegistry,
  Navigator,
} from 'react-native';

// import Splash from './Splash';
import MainScreen from './MainScreen';
//定义默认路由导航器
 export default class JisudaProject extends React.Component {
  render() {
    let defaultName = 'MainScreen';
    let defaultComponent = MainScreen;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
    );
  }
}
//这一步是应用入口
AppRegistry.registerComponent('JisudaProject', () => JisudaProject);
