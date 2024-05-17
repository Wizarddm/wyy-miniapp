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

interface OrderDetail {
  props: PageStateProps;
}

@inject("store")
@observer
class OrderDetail extends Component<PropsWithChildren> {
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
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
              订单详情
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img30.360buyimg.com/ling/jfs/t1/232856/1/16059/2924/66457663Ff345a84b/a9dcab8852c6e94c.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.cnt_row2}>
          <Image
            className={cssModule.img2}
            src="//img11.360buyimg.com/ling/jfs/t1/220511/2/41497/2311/6647216dFa5b2ca0b/4fdd2fd145f6a0b6.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              已完成
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              点击下方课程信息可进入课程页面
            </Text>
          </View>
        </View>
        <View className={cssModule.cnt_col2}>
          <View className={cssModule.goods}>
            <Image
              className={cssModule.goods_img}
              src="//img10.360buyimg.com/ling/jfs/t1/175493/28/46153/81330/6646c901F70af767e/85e877ef0f37e51e.png"
            ></Image>
            <View className={cssModule.cnt_col3}>
              <Text className={`${cssModule.line1} ${cssModule.tit}`}>
                女装下装六面原型结构详解
              </Text>
              <View className={cssModule.section_wrap}>
                <Text className={cssModule.section}>永久有效</Text>
              </View>
              <View className={cssModule.cnt_row3}>
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
          <Image
            className={cssModule.act}
            src="//img10.360buyimg.com/ling/jfs/t1/100060/12/44343/818/6647216dF90a6a3d0/9001bfe34050625d.jpg"
          ></Image>
          <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
            详细信息
          </Text>
          <View className={cssModule.cnt_row4}>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
              订单号
            </Text>
            <View className={cssModule.cnt_row5}>
              <Text className={cssModule.txt8}>
                ht212009896202404122320256102500{" "}
              </Text>
              <Text className={cssModule.txt9}>复制</Text>
            </View>
          </View>
          <View className={cssModule.cnt_row6}>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
              下单时间
            </Text>
            <View className={cssModule.cnt_row7}>
              <Text className={cssModule.txt10}>2024-04-27 </Text>
              <Text className={cssModule.txt11}>5:17:17</Text>
            </View>
          </View>
          <View className={cssModule.cnt_row8}>
            <Text className={cssModule.txt12}>支付方式</Text>
            <Text className={cssModule.txt13}>抖音支付</Text>
          </View>
          <View className={cssModule.cnt_row9}>
            <Text className={cssModule.txt12}>支付时间</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt14}`}>
              2024-04-12 24:20:32
            </Text>
          </View>
          <View className={cssModule.cnt_row9}>
            <Text className={`${cssModule.line1} ${cssModule.txt15}`}>
              课程有效期
            </Text>
            <Text className={cssModule.txt13}>永久有效</Text>
          </View>
          <View className={cssModule.cnt_row10}>
            <Text className={`${cssModule.line1} ${cssModule.txt15}`}>
              商品原价
            </Text>
            {/*商品价格*/}
            <View className={cssModule.price_wrap1}>
              <Text className={cssModule.price1}>¥10.01</Text>
            </View>
          </View>
          <Image
            className={cssModule.act1}
            src="//img10.360buyimg.com/ling/jfs/t1/100060/12/44343/818/6647216dF90a6a3d0/9001bfe34050625d.jpg"
          ></Image>
          <View className={cssModule.cnt_row11}>
            <Text className={cssModule.txt16}>实付</Text>
            {/*商品价格*/}
            <View className={cssModule.price_wrap2}>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={cssModule.price}>49.90</Text>
            </View>
          </View>
          <View className={cssModule.cnt_row12}>
            <View className={cssModule.section_wrap1}>
              <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                申请退款
              </Text>
            </View>
            <View className={cssModule.section_wrap2}>
              <Text className={`${cssModule.line1} ${cssModule.section2}`}>
                咨询客服
              </Text>
            </View>
          </View>
        </View>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default OrderDetail;
