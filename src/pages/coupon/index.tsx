import { Component, PropsWithChildren } from "react";
import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import cssModule from "./index.module.less";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Coupon {
  props: PageStateProps;
}

@inject("store")
@observer
class Coupon extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className={cssModule.mod}>
        <View className={cssModule.cnt_col}>
          <View className={cssModule.cnt_row}>
            <Text className={`${cssModule.line1} ${cssModule.txt}`}>
              下午9:41
            </Text>
            <Text className={cssModule.txt1}>HD</Text>
            <Image
              className={cssModule.icon}
              src="//img20.360buyimg.com/ling/jfs/t1/201651/31/42951/745/66457662Fd13edc24/40db6f55f55dbc5c.png"
            ></Image>
            <Image
              className={cssModule.icon1}
              src="//img13.360buyimg.com/ling/jfs/t1/191869/7/44937/795/6642b361Ff9a0e03d/0eedbcbb4ecfbce1.png"
            ></Image>
          </View>
          <Image
            className={cssModule.icon2}
            src="//img11.360buyimg.com/ling/jfs/t1/204154/17/42353/312/66457662Fa58c9936/4631d89246091ef7.png"
          ></Image>
          <View className={cssModule.cnt_row1}>
            <Image
              className={cssModule.img}
              src="//img30.360buyimg.com/ling/jfs/t1/190312/37/45194/2028/66456d7fF74b334cf/5912f3b6e5e0c9da.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
              优惠券
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img12.360buyimg.com/ling/jfs/t1/223647/25/43490/2921/6646bf5aF4b892d31/c78d2154ae7d8661.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.cnt_row2}>
          <View className={cssModule.cnt_row3}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              未使用
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              已使用
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              已过期
            </Text>
          </View>
          <View className={cssModule.color_view}></View>
        </View>
        <Image
          className={cssModule.main_img}
          src="//img13.360buyimg.com/ling/jfs/t1/159031/25/44989/29724/6646c15cF95712285/82d6254a0449a9c1.png"
        ></Image>
        <Text className={`${cssModule.line1} ${cssModule.tit}`}>
          还没有优惠券哦~~
        </Text>
        <View className={cssModule.section_wrap}>
          <Text className={`${cssModule.line1} ${cssModule.section}`}>
            去首页逛逛
          </Text>
        </View>
        <View className={cssModule.color_view1}></View>
      </View>
    );
  }
}

export default Coupon;
