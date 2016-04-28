'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    StyleSheet,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';

// import TopInfo from './Mine/TopInfo';
// import MyMenu from './Mine/MyMenu';
// import MyItem from './Mine/MyItem';

//个人中心，涉及数据变化的部分进行组件封装，便于后期维护修改

const WINDOW_WIDTH = Platform.OS==='ios'?Dimensions.get('window').width:Dimensions.get('screen').width;

export default class MinePage extends React.Component {

    constructor(props) {
        super(props);

    }
    _onClick() {

    }
    render() {
        return (
          <View style={{flex: 1}}>
              <View style={styles.container}>
                  <Text style={styles.topText}>
                    我的
                  </Text>
              </View>
              <View style={styles.separate}/>
              <ScrollView style={styles.container1}>
                    <Text>个人中心</Text>
              </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',   // 水平排布
      paddingLeft: 5,
      paddingRight: 5,
      justifyContent:'center',
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 64 : 64,   // 处理iOS状态栏
      backgroundColor: 'white',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  container1:{
    backgroundColor:'#F1F2F6',
  },
  separate:{
    height:1,
    backgroundColor:'#A7A7AA',
  },
  topText:{
    fontSize:16,
  },
});
