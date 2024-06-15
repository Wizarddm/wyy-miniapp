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

interface OrderPayed {
  props: PageStateProps;
}

@inject("store")
@observer
class OrderPayed extends Component<PropsWithChildren> {
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
      <View className={cssModule.goods}>
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
              src="//img12.360buyimg.com/ling/jfs/t1/180257/24/39966/780/66457410F808a148f/f16032043625e6d8.png"
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
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>订单</Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img30.360buyimg.com/ling/jfs/t1/232856/1/16059/2924/66457663Ff345a84b/a9dcab8852c6e94c.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.section_wrap}>
          <Text className={cssModule.section}>99</Text>
        </View>
        <View className={cssModule.cnt_row2}>
          <View className={cssModule.cnt_row3}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              待支付
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              已购买
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>退款</Text>
          </View>
          <View className={cssModule.color_view}></View>
        </View>
        <View className={cssModule.goods1}>
          <View className={cssModule.goods2}>
            <Image
              className={cssModule.goods_img}
              src="//img10.360buyimg.com/ling/jfs/t1/175493/28/46153/81330/6646c901F70af767e/85e877ef0f37e51e.png"
            ></Image>
            <View className={cssModule.cnt_col1}>
              <Text className={`${cssModule.line1} ${cssModule.tit}`}>
                女装下装六面原型结构详解
              </Text>
              <View className={cssModule.section_wrap1}>
                <Text className={cssModule.section1}>永久有效</Text>
              </View>
              <View className={cssModule.cnt_row4}>
                <Text className={`${cssModule.line1} ${cssModule.tit1}`}>
                  直播课
                </Text>
                {/*商品价格*/}
                <View className={cssModule.price_wrap}>
                  <Text className={cssModule.yuan}>¥</Text>
                  <Text className={cssModule.price}>49.90</Text>
                </View>
              </View>
            </View>
          </View>
          <View className={cssModule.cnt_row5}>
            <Text className={`${cssModule.line1} ${cssModule.section2}`}>
              订单号：ht2120028262024041224202561025
            </Text>
            <Text className={cssModule.section3}>复制</Text>
          </View>
          <View className={cssModule.cnt_row6}>
            <View className={cssModule.section_wrap2}>
              <Text className={`${cssModule.line1} ${cssModule.section4}`}>
                查看详情
              </Text>
            </View>
            <View className={cssModule.section_wrap3}>
              <Text className={`${cssModule.line1} ${cssModule.section5}`}>
                去评价
              </Text>
            </View>
          </View>
        </View>
        <View className={cssModule.color_view1}></View>
      </View>
    );
  }
}

export default OrderPayed;
