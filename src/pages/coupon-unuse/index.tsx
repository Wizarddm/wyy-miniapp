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

interface CouponUnuse {
  props: PageStateProps;
}

@inject("store")
@observer
class CouponUnuse extends Component<PropsWithChildren> {
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
              src="//img10.360buyimg.com/ling/jfs/t1/177610/7/46719/744/6643293cF58df17ba/3b5bb154afa2b667.png"
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
              src="//img14.360buyimg.com/ling/jfs/t1/183495/19/40116/2933/6646c4c2Fd8e542c4/4a9db4c53f529baf.png"
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
        {/*以下是一个列表*/}
        <View className={cssModule.cnt_col_list}>
          {/*列表项*/}
          {[0, 1].map((item, index) => (
            <View
              className={`${cssModule.cnt_col_item_common} ${cssModule.cnt_col_item}`}
              key={index}
            >
              <View
                className={`${cssModule.cnt_row4_common} ${cssModule.cnt_row4}`}
              >
                {/*商品价格*/}
                <View
                  className={`${cssModule.price_wrap_common} ${cssModule.price_wrap}`}
                >
                  <Text className={cssModule.yuan_common}>¥</Text>
                  <Text
                    className={`${cssModule.line1} ${cssModule.price_common}`}
                  >
                    300.00
                  </Text>
                </View>
                <View
                  className={`${cssModule.cnt_col1_common} ${cssModule.cnt_col1}`}
                >
                  <Text
                    className={`${cssModule.line1} ${cssModule.txt6_common} ${cssModule.txt6}`}
                  >
                    限时优惠
                  </Text>
                  <View className={cssModule.section_wrap_common}>
                    <Text
                      className={`${cssModule.line1} ${cssModule.section_common} ${cssModule.section}`}
                    >
                      还有17天5小时53分钟过期
                    </Text>
                  </View>
                </View>
              </View>
              <View className={cssModule.act_wrap_common}>
                <Image
                  className={cssModule.act_common}
                  src="//img13.360buyimg.com/ling/jfs/t1/191502/3/44690/159/6646c4c2Fc1d3652f/03d769911fb9e365.png"
                ></Image>
              </View>
              <View className={cssModule.cnt_row5_common}>
                <Text className={`${cssModule.line1} ${cssModule.txt7_common}`}>
                  使用规则：指定课程可用
                </Text>
                <View className={cssModule.section_wrap1_common}>
                  <Text
                    className={`${cssModule.line1} ${cssModule.section1_common}`}
                  >
                    去使用
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View className={cssModule.color_view1}></View>
      </View>
    );
  }
}

export default CouponUnuse;
