'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomePage from './component/HomePage';
import CategoryPage from './component/CategoryPage';
import CartPage from './component/CartPage';
import MinePage from './component/MinePage';

const HOME = '首页';
const HOME_NORMAL = require('./image/icon_home.png');
const HOME_FOCUS = require('./image/icon_home_fill.png');
const CATEGORY = '分类';
const CATEGORY_NORMAL = require('./image/icon_sort.png');
const CATEGORY_FOCUS = require('./image/icon_sort_fill.png');
const CART = '购物车';
const CART_NORMAL = require('./image/icon_cart.png');
const CART_FOCUS = require('./image/icon_cart_fill.png');
const PERSONAL = '我的';
const PERSONAL_NORMAL = require('./image/icon_my.png');
const PERSONAL_FOCUS = require('./image/icon_my_fill.png');

//首页配置，各组件导入
export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }
    //根据需求定制tab
    _renderTabItem(img:string,selectedImg:string,title:string,childView:object) {
        return (
            <TabNavigator.Item
                title = {title}
                titleStyle={{color:'black'}}
                selectedTitleStyle={{color:'#FF7736'}}
                selected={this.state.selectedTab === title}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: title })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    render() {
        let {navigator}=this.props;
        return (
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage navigator={navigator}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY,<CategoryPage navigator={navigator}/>)}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, <CartPage navigator={navigator}/>)}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL,<MinePage navigator={navigator}/>)}
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 50,
        alignItems: 'center',
    },
    tabIcon: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',
        marginTop: 5
    }
});
