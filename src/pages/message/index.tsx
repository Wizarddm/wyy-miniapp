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

interface Message {
  props: PageStateProps;
}

@inject("store")
@observer
class Message extends Component<PropsWithChildren> {
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
          <View className={cssModule.view}></View>
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
              系统消息
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
            src="//img12.360buyimg.com/ling/jfs/t1/167197/25/45852/4854/664577ccF66c5c066/853bee23ddacd738.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.cnt_row3}>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                文言言
              </Text>
              <View className={cssModule.section_wrap}>
                <Text className={cssModule.section}>官方</Text>
              </View>
            </View>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              欢迎来到文言言！
            </Text>
          </View>
        </View>
        <Image
          className={cssModule.act}
          src="//img11.360buyimg.com/ling/jfs/t1/232143/16/17511/154/664577ccFf644f3f6/6d897bcc1cc52b26.png"
        ></Image>
        <View className={cssModule.cnt_row4}>
          <Image
            className={cssModule.img3}
            src="//img10.360buyimg.com/ling/jfs/t1/159695/32/45738/20684/664577cdF0b452a23/c8c9b8b6db266755.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              非你莫数
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              这样啊
            </Text>
          </View>
        </View>
        <Image
          className={cssModule.act1}
          src="//img11.360buyimg.com/ling/jfs/t1/232143/16/17511/154/664577ccFf644f3f6/6d897bcc1cc52b26.png"
        ></Image>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default Message;
