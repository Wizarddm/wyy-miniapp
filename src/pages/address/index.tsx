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

interface Address {
  props: PageStateProps;
}

@inject("store")
@observer
class Address extends Component<PropsWithChildren> {
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
              我的收货地址
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
          <View className={cssModule.main_img_wrap}>
            <Image
              className={cssModule.main_img}
              src="//img30.360buyimg.com/ling/jfs/t1/245429/16/8547/4374/6646b988Fb918d7cb/70c5f0f1c49ee2a4.png"
            ></Image>
          </View>
          <View className={cssModule.icon_wrap}>
            <Image
              className={cssModule.icon3}
              src="//img10.360buyimg.com/ling/jfs/t1/232206/32/17744/446/6646b989F34b4c2af/69ff682f55d9a30b.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.icon_wrap1}>
          <Image
            className={cssModule.icon4}
            src="//img20.360buyimg.com/ling/jfs/t1/245551/7/9262/561/6646b98aF9cdd18d0/c5018dce8fea7d66.png"
          ></Image>
        </View>
        <View className={cssModule.section_wrap}>
          <Text className={`${cssModule.line1} ${cssModule.section}`}>
            暂无地址
          </Text>
        </View>
        <Image
          className={cssModule.main_img1}
          src="//img12.360buyimg.com/ling/jfs/t1/214475/8/39802/4898/6646b988Fecb838cb/769e0207cd719c45.png"
        ></Image>
        <View className={cssModule.section_wrap1}>
          <Text className={`${cssModule.line1} ${cssModule.section1}`}>
            空空如也~
          </Text>
        </View>
        <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
          还没有收货地址
        </Text>
        <View className={cssModule.section_wrap2}>
          <Text className={`${cssModule.line1} ${cssModule.section2}`}>
            添加新地址
          </Text>
        </View>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default Address;
