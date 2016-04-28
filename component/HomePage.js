'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    ListView,
    RefreshControl,
    TouchableOpacity,
    Dimensions,
    Platform,
    TouchableHighlight,
} from 'react-native';

const WINDOW_WIDTH = Platform.OS==='ios'?Dimensions.get('window').width:Dimensions.get('screen').width;
const CELL_WIDTH=WINDOW_WIDTH/2-12;
const UNIT={img:require('../image/goods_ex.jpg'),title:'深海三文鱼蝴蝶开背元条',num:'库存：1000件',collect:0};

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
          isRefreshing:false,
          dataSource: ds.cloneWithRows(this._genRows(UNIT)),
        };
        this._onRefresh=this._onRefresh.bind(this);
    }
    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
          //这里从新获取数据

          this.setState({
            isRefreshing: false,
          });
        }, 3000);
    }
    componentWillMount() {
    }
    _renderRow(rowData:object, sectionID: number, rowID: number) {

      return (
        <TouchableHighlight>
            <View style={styles.row}>
              <Image source={rowData.img} style={{width:CELL_WIDTH,height:CELL_WIDTH}}/>
              <Text style={{padding:5,fontSize:13}}>
                {rowData.title}
              </Text>
              <View style={{flex:1,flexDirection:'row',padding:3,justifyContent:'space-between'}}>
                <Text style={{fontSize:12}}>{rowData.num}</Text>
                <Image source={require('../image/icon_favor_fill.png')} style={{width:20,height:20}}/>
              </View>
            </View>
        </TouchableHighlight>
      );
    }
    _genRows(unit:object){
        var dataBlob = [];
        for (let ii = 0; ii < 10; ii++) {
          dataBlob.push(unit);
        }
        return dataBlob;
    }
    render() {
        return (
          <View style={{flex: 1}}>
              <View style={styles.container}>
                 <Image source={require('../image/icon_message_point.png')} style={{width:27,height:25}}/>
                 <Image source={require('../image/icon_logo.png')} style={{width:75,height:23}}/>
                 <Image source={require('../image/icon_search.png')} style={{width:25,height:25}}/>
              </View>
              <View style={styles.separate}/>
              <ScrollView style={styles.container1}
                          refreshControl={
                            <RefreshControl
                              refreshing={this.state.isRefreshing}
                              onRefresh={this._onRefresh}
                          />}>
                <Image source={require('../image/banner_ex.jpg')} style={{width:WINDOW_WIDTH,height:CELL_WIDTH}}/>
                <View style={styles.container2}>
                    <Image source={require('../image/icon_shop.png')} style={{width:77,height:73}}/>
                    <View style={{marginLeft:15,}}>
                      <Text style={{fontSize:15}}>欢饮您，外婆家长沙加盟店</Text>
                      <Text style={{fontSize:18,color:'#FF7736',marginTop:10}}>浙江外婆家餐饮有限公司</Text>
                    </View>
                </View>
                <ListView
                    style={styles.container3}
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    scrollRenderAheadDistance={500}
                    renderRow={this._renderRow}
                />

              </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  container: {
      flexDirection: 'row',   // 水平排布
      paddingLeft: 8,
      paddingRight: 8,
      justifyContent:'space-between',
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 64 : 64,   // 处理iOS状态栏
      backgroundColor: '#FF7736',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  container1:{
    backgroundColor:'#F2F2F2',
  },
  container2:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    marginBottom:10,
    padding:10,
  },
  row:{
    backgroundColor:'#F2F2F2',
    marginBottom:10,
  },
  container3:{
    backgroundColor:'white',
    paddingTop:8,
  },
  separate:{
    height:1,
    backgroundColor:'#A7A7AA',
  },
  topText:{
    fontSize:14,
  },
});
