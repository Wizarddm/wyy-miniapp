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

interface CouponExpired {
  props: PageStateProps;
}

@inject("store")
@observer
class CouponExpired extends Component<PropsWithChildren> {
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
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              已过期
            </Text>
          </View>
          <View className={cssModule.color_view}></View>
        </View>
        <View className={cssModule.cnt_col1}>
          <View className={cssModule.cnt_row4}>
            {/*商品价格*/}
            <View className={cssModule.price_wrap}>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={`${cssModule.line1} ${cssModule.price}`}>
                300.00
              </Text>
            </View>
            <View className={cssModule.cnt_col2}>
              <View className={cssModule.cnt_row5}>
                <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
                  限时优惠
                </Text>
                <View className={cssModule.cnt_col3}>
                  <Image
                    className={cssModule.img2}
                    src="//img30.360buyimg.com/ling/jfs/t1/217657/19/41650/3527/6646c5cdFd4c19edc/b44417ed55950eb2.png"
                  ></Image>
                  <View className={cssModule.color_view1}></View>
                  <Image
                    className={cssModule.img3}
                    src="//img14.360buyimg.com/ling/jfs/t1/131901/20/45923/1685/6646c5cdF22987a82/85b8774f0bb4e2b7.png"
                  ></Image>
                  <Text className={cssModule.txt8}>已过期</Text>
                </View>
              </View>
              <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
                过期时间：2024-04-07 05:29:00
              </Text>
            </View>
          </View>
          <Image
            className={cssModule.act}
            src="//img13.360buyimg.com/ling/jfs/t1/191502/3/44690/159/6646c4c2Fc1d3652f/03d769911fb9e365.png"
          ></Image>
          <Text className={`${cssModule.line1} ${cssModule.txt10}`}>
            使用规则：指定课程可用
          </Text>
        </View>
        <View className={cssModule.color_view2}></View>
      </View>
    );
  }
}

export default CouponExpired;
