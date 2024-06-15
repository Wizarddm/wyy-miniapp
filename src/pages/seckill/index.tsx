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

interface Seckill {
  props: PageStateProps;
}

@inject("store")
@observer
class Seckill extends Component<PropsWithChildren> {
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
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>秒杀</Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img14.360buyimg.com/ling/jfs/t1/183495/19/40116/2933/6646c4c2Fd8e542c4/4a9db4c53f529baf.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.main_img_wrap}>
          <Image
            className={cssModule.main_img}
            src="//img10.360buyimg.com/ling/jfs/t1/236597/28/16521/3719/66457663F7da6637d/d9bd78fd5d48f570.png"
          ></Image>
        </View>
        <Image
          className={cssModule.main_img1}
          src="//img13.360buyimg.com/ling/jfs/t1/189384/19/46847/15757/6646c826F09bb0452/217bed46777bad1b.png"
        ></Image>
        <View className={cssModule.section_wrap}>
          <Text className={`${cssModule.line1} ${cssModule.section}`}>
            还没抢到秒杀课程
          </Text>
        </View>
        <View className={cssModule.section_wrap1}>
          <Text className={`${cssModule.line1} ${cssModule.section1}`}>
            空空如也~
          </Text>
        </View>
        <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
          快去首页抢限时秒杀课程
        </Text>
        <View className={cssModule.section_wrap2}>
          <Text className={`${cssModule.line1} ${cssModule.section2}`}>
            去首页逛逛
          </Text>
        </View>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default Seckill;
