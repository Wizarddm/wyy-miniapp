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

interface Search {
  props: PageStateProps;
}

@inject("store")
@observer
class Search extends Component<PropsWithChildren> {
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
              文言言
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img12.360buyimg.com/ling/jfs/t1/204261/10/40556/1883/6642b361F48ab86b7/e2d2e44f4513e610.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row2}>
            <Image
              className={cssModule.icon3}
              src="//img11.360buyimg.com/ling/jfs/t1/248521/27/8533/770/663aed54F82329dcd/d91999f54173cacc.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              输入感兴趣的课程关键字
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={cssModule.section}>搜索</Text>
            </View>
          </View>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              热门搜索
            </Text>
            <View className={cssModule.cnt_row3}>
              <View className={cssModule.cnt_row4}>
                <Image
                  className={cssModule.icon4}
                  src="//img13.360buyimg.com/ling/jfs/t1/179948/8/45453/879/663aed54Fe71da30e/73b8ecc2bf611fe5.png"
                ></Image>
                <Text className={cssModule.section1}>编织</Text>
              </View>
              <View className={cssModule.section_wrap1}>
                <Text className={cssModule.section1}>英语</Text>
              </View>
              <View className={cssModule.section_wrap1}>
                <Text className={cssModule.section1}>舞蹈</Text>
              </View>
              <View className={cssModule.section_wrap2}>
                <Text className={cssModule.section2}>短视频</Text>
              </View>
              <View className={cssModule.section_wrap3}>
                <Text className={cssModule.section2}>瑜伽</Text>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.section_wrap4}>
                <Text className={cssModule.section3}>书法</Text>
              </View>
              <View className={cssModule.section_wrap3}>
                <Text className={cssModule.section3}>数学</Text>
              </View>
              <View className={cssModule.section_wrap3}>
                <Text className={cssModule.section3}>吉他</Text>
              </View>
              <View className={cssModule.section_wrap3}>
                <Text className={cssModule.section3}>健身</Text>
              </View>
              <View className={cssModule.section_wrap3}>
                <Text className={cssModule.section3}>剪辑</Text>
              </View>
            </View>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              搜索历史
            </Text>
            <View className={cssModule.cnt_row6}>
              <View className={cssModule.section_wrap4}>
                <Text className={cssModule.section3}>英语</Text>
              </View>
              <View className={cssModule.section_wrap4}>
                <Text className={cssModule.section3}>数学</Text>
              </View>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default Search;
