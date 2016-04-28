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
    TextInput,
    Platform,
} from 'react-native';


export default class CategoryPage extends React.Component {

    constructor(props) {
        super(props);
    }
    _onClick(title:string) {
        // let navigator = this.props.navigator;
        // if(navigator) {
        //     navigator.push({
        //         name: title,
        //         component: ProductDetail,
        //         params: {
        //              title:title,
        //          }
        //     })
        // }
    }
    render() {
        return (
          <View style={{flex: 1}}>
              <View style={styles.container}>
                  <Text style={styles.topText}>
                    分类
                  </Text>
              </View>
              <View style={styles.separate}/>
              <ScrollView style={styles.container1}>
                <Text>分类</Text>
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
