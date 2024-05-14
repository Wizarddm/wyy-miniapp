import { Component, PropsWithChildren } from "react";
import { View, Text, Image } from "@tarojs/components";
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

interface PurchasedCourses {
  props: PageStateProps;
}

@inject("store")
@observer
class PurchasedCourses extends Component<PropsWithChildren> {
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
              src="//img14.360buyimg.com/ling/jfs/t1/242594/17/8582/745/663ae597F94410d3c/e39a1e7f76e20095.png"
            ></Image>
            <Image
              className={cssModule.icon1}
              src="//img13.360buyimg.com/ling/jfs/t1/191869/7/44937/795/6642b361Ff9a0e03d/0eedbcbb4ecfbce1.png"
            ></Image>
          </View>
          <Image
            className={cssModule.icon2}
            src="//img12.360buyimg.com/ling/jfs/t1/217590/37/40687/312/663ae597F52e20c29/c32f56176e731ac9.png"
          ></Image>
          <View className={cssModule.cnt_row1}>
            <Image
              className={cssModule.img}
              src="//img10.360buyimg.com/ling/jfs/t1/234241/10/16196/2028/663aed54F023c8b50/b4c0274c9273ed76.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
              已购课程
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img20.360buyimg.com/ling/jfs/t1/199634/24/43019/2392/663aee53Fa4913747/7b47dd79a29111ce.png"
            ></Image>
          </View>
          <Image
            className={cssModule.main_img}
            src="//img14.360buyimg.com/ling/jfs/t1/182139/26/45488/10026/66431cceF6e8aa249/f704371108833e6d.png"
          ></Image>
          <Text className={`${cssModule.line2} ${cssModule.tit}`}>
            没有要学习的课程\n去首页挑选喜欢的课吧~
          </Text>
          <View className={cssModule.section_wrap}>
            <Text className={`${cssModule.line1} ${cssModule.section}`}>
              去看看
            </Text>
          </View>
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.cnt_row2}>
              <View className={cssModule.color_view}></View>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                猜你喜欢
              </Text>
              <View className={cssModule.cnt_row3}>
                <Image
                  className={cssModule.icon3}
                  src="//img11.360buyimg.com/ling/jfs/t1/158171/23/45344/844/663ae594F105341da/c431d827d8d2bcec.png"
                ></Image>
                <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                  换一换
                </Text>
              </View>
            </View>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_col_list}>
              {/*列表项*/}
              {[0, 1].map((item, index) => (
                <View
                  className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item}`}
                  key={index}
                >
                  <View className={cssModule.wrapper_common}>
                    <View className={cssModule.section_wrap1_common}>
                      <Text
                        className={`${cssModule.section2_common} ${cssModule.section2}`}
                      >
                        专栏
                      </Text>
                    </View>
                  </View>
                  <View className={cssModule.cnt_col2_common}>
                    <View className={cssModule.cnt_row4_common}>
                      <Image
                        className={cssModule.img2_common}
                        src="//img14.360buyimg.com/ling/jfs/t1/249736/16/8513/3679/663ae594F1ececf2e/ad7bbc201dce7296.png"
                      ></Image>
                      <View className={cssModule.cnt_row5_common}>
                        <Text className={cssModule.txt5_common}>
                          女装下装六面
                        </Text>
                        <Text className={cssModule.txt5_common}>原</Text>
                        <Text
                          className={`${cssModule.txt5_common} ${cssModule.txt6}`}
                        >
                          型
                        </Text>
                      </View>
                    </View>
                    <View className={cssModule.cnt_row6_common}>
                      <Text className={cssModule.txt5_common}>型</Text>
                      <Text className={cssModule.txt5_common}>结构详解</Text>
                    </View>
                    <View className={cssModule.cnt_row7_common}>
                      <Text
                        className={`${cssModule.line1} ${cssModule.section2_common} ${cssModule.txt7}`}
                      >
                        273人已学习
                      </Text>
                      <Image
                        className={cssModule.icon4}
                        src="//img10.360buyimg.com/ling/jfs/t1/174491/15/45548/2453/663ae594F85c6338b/c351e2b85e7ccc46.png"
                      ></Image>
                    </View>
                  </View>
                  <Image
                    className={cssModule.icon5}
                    src="//img20.360buyimg.com/ling/jfs/t1/239422/22/8897/4769/6642bb11Ff9d416b3/5ba895d9befc3cbd.png"
                  ></Image>
                  <Image
                    className={cssModule.icon6}
                    src="//img10.360buyimg.com/ling/jfs/t1/133359/12/45568/5483/663ae595F778180f2/19c24e201f1ff904.png"
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
          <View className={cssModule.cnt_col3}>
            <View className={cssModule.view}></View>
            <Image
              className={cssModule.img3}
              src="//img20.360buyimg.com/ling/jfs/t1/247568/6/9049/1923/66431cceFcc9bdc2f/42c3c58cedadc884.png"
            ></Image>
            <View className={cssModule.cnt_row8}>
              <Image
                className={cssModule.img4}
                src="//img14.360buyimg.com/ling/jfs/t1/215304/4/40184/1675/66431cceF2cbe362d/bc476f6abd1f0a09.png"
              ></Image>
              <Image
                className={cssModule.img4}
                src="//img30.360buyimg.com/ling/jfs/t1/175288/21/40525/2126/663ae599F348593af/ac6054954e4d3a09.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row9}>
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

export default PurchasedCourses;
