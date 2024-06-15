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

interface CoursesPurchased {
  props: PageStateProps;
}

@inject("store")
@observer
class CoursesPurchased extends Component<PropsWithChildren> {
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
              已购课程
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img10.360buyimg.com/ling/jfs/t1/233416/23/17054/2396/6646fda5Fa72a7717/060a3cb8e974783d.png"
            ></Image>
          </View>
          {/*以下是一个列表*/}
          <View className={cssModule.cnt_col_list}>
            {/*列表项*/}
            {[0, 1].map((item, index) => (
              <View
                className={`${cssModule.goods_item_common} ${cssModule.goods_item}`}
                key={index}
              >
                <View
                  className={`${cssModule.goods_common} ${cssModule.goods}`}
                >
                  <Image
                    className={cssModule.goods_img_common}
                    src="//img10.360buyimg.com/ling/jfs/t1/175493/28/46153/81330/6646c901F70af767e/85e877ef0f37e51e.png"
                  ></Image>
                  <View className={cssModule.cnt_col1_common}>
                    <Text
                      className={`${cssModule.line1} ${cssModule.tit_common}`}
                    >
                      女装下装六面原型结构详解
                    </Text>
                    <View className={cssModule.section_wrap_common}>
                      <Text
                        className={`${cssModule.section_common} ${cssModule.section}`}
                      >
                        永久有效
                      </Text>
                    </View>
                    <View className={cssModule.cnt_row2_common}>
                      <Text
                        className={`${cssModule.line1} ${cssModule.section_common} ${cssModule.tit1}`}
                      >
                        直播课
                      </Text>
                      {/*商品价格*/}
                      <View className={cssModule.price_wrap_common}>
                        <Text className={cssModule.yuan_common}>¥</Text>
                        <Text className={cssModule.price_common}>49.90</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className={cssModule.cnt_row3_common}>
                  <Text
                    className={`${cssModule.line1} ${cssModule.section1_common}`}
                  >
                    订单号：ht2120028262024041224202561025
                  </Text>
                  <Text className={cssModule.section2_common}>复制</Text>
                </View>
              </View>
            ))}
          </View>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.color_view}></View>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                猜你喜欢
              </Text>
              <View className={cssModule.cnt_row5}>
                <Image
                  className={cssModule.icon3}
                  src="//img30.360buyimg.com/ling/jfs/t1/156847/20/45001/844/6646fda2F96334f7b/02c0a9f23aeb1601.png"
                ></Image>
                <Text className={`${cssModule.line1} ${cssModule.section3}`}>
                  换一换
                </Text>
              </View>
            </View>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_col_list1}>
              {/*列表项*/}
              {[0, 1].map((item, index) => (
                <View
                  className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item}`}
                  key={index}
                >
                  <View className={cssModule.wrapper_common}>
                    <View className={cssModule.section_wrap1_common}>
                      <Text className={cssModule.section4_common}>专栏</Text>
                    </View>
                  </View>
                  <View className={cssModule.cnt_col3_common}>
                    <View className={cssModule.cnt_row6_common}>
                      <Image
                        className={cssModule.img2}
                        src="//img14.360buyimg.com/ling/jfs/t1/223324/6/40520/3679/6646fda3Ff30acfa1/90d61cd5c7250c36.png"
                      ></Image>
                      <View className={cssModule.cnt_row7_common}>
                        <Text className={cssModule.txt5_common}>
                          女装下装六面
                        </Text>
                        <Text
                          className={`${cssModule.txt5_common} ${cssModule.txt6}`}
                        >
                          原
                        </Text>
                        <Text className={cssModule.txt5_common}>型</Text>
                      </View>
                    </View>
                    <View className={cssModule.cnt_row8_common}>
                      <Text className={cssModule.txt5_common}>型</Text>
                      <Text className={cssModule.txt5_common}>结构详解</Text>
                    </View>
                    <View className={cssModule.cnt_row9_common}>
                      <Text
                        className={`${cssModule.line1} ${cssModule.section4_common} ${cssModule.txt7}`}
                      >
                        273人已学习
                      </Text>
                      <Image
                        className={cssModule.icon4}
                        src="//img12.360buyimg.com/ling/jfs/t1/247313/40/9255/2453/6646fda3F529e7662/825bca650ba65ffc.png"
                      ></Image>
                    </View>
                  </View>
                  <Image
                    className={cssModule.icon5}
                    src="//img20.360buyimg.com/ling/jfs/t1/239422/22/8897/4769/6642bb11Ff9d416b3/5ba895d9befc3cbd.png"
                  ></Image>
                  <Image
                    className={cssModule.icon6}
                    src="//img20.360buyimg.com/ling/jfs/t1/237586/22/16674/5483/6646fda4Fcb1f6e84/f6e62237b1f9992f.png"
                  ></Image>
                  <Image
                    className={cssModule.icon7}
                    src="//img30.360buyimg.com/ling/jfs/t1/176006/23/42018/5565/6642bb11F066ca0c9/9758d63cfc792652.png"
                  ></Image>
                  <Image
                    className={cssModule.icon8}
                    src="//img12.360buyimg.com/ling/jfs/t1/187280/1/44961/5764/6642bb12F92103893/c41b49ab709ae799.png"
                  ></Image>
                </View>
              ))}
            </View>
          </View>
          <View className={cssModule.cnt_col4}>
            <View className={cssModule.view}></View>
            <Image
              className={cssModule.img3}
              src="//img12.360buyimg.com/ling/jfs/t1/177298/15/45918/1927/6646fda4F01c3adae/f6f1c8eb8ccf28a5.png"
            ></Image>
            <View className={cssModule.cnt_row10}>
              <Image
                className={cssModule.img4}
                src="//img30.360buyimg.com/ling/jfs/t1/245011/35/8714/1694/6646fda4F374e3f21/ae79ee5202e5bc6d.png"
              ></Image>
              <Image
                className={cssModule.img4}
                src="//img12.360buyimg.com/ling/jfs/t1/230656/8/18183/2126/6646fda5F3f36859a/68204e2178934e4b.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row11}>
              <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
                首页
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt10}`}>
                已购课程
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt11}`}>
                个人中心
              </Text>
            </View>
            <View className={cssModule.color_view1}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default CoursesPurchased;
