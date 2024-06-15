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

interface Chat {
  props: PageStateProps;
}

@inject("store")
@observer
class Chat extends Component<PropsWithChildren> {
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
              咨询客服
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
        <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
          智能机器人 为您服务
        </Text>
        <View className={cssModule.cnt_row2}>
          <Image
            className={cssModule.img2}
            src="//img30.360buyimg.com/ling/jfs/t1/247098/16/9280/4866/6647094aFc29af837/327ae884661e28f3.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              文言言官方客服 今天10:22:40
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                你好，请问有什么可以帮助您的？
              </Text>
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_row3}>
          <View className={cssModule.color_view}></View>
          <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
            这个课程真的是永久有效的么
          </Text>
          <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
            小优 今天10:22:40
          </Text>
          <Image
            className={cssModule.img2}
            src="//img11.360buyimg.com/ling/jfs/t1/187930/27/44498/18477/6647094aFd9714033/5ce1cfee934ef2a6.png"
          ></Image>
        </View>
        <View className={cssModule.cnt_row4}>
          <Image
            className={cssModule.img2}
            src="//img30.360buyimg.com/ling/jfs/t1/247098/16/9280/4866/6647094aFc29af837/327ae884661e28f3.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              文言言官方客服 今天10:31:07
            </Text>
            <View className={cssModule.section_wrap1}>
              <Text className={cssModule.section1}>
                铍搭赞忌歧拣标浅彼否髓儒闷阿？重方置迪召扳支扭装？炮菇忆莎澜篷裕碑稳、景量抹壤旦褐铃负沉饭唐诚姿舵谈碍第淑血胁萍、祸炫肉皇疤蒂岩袖垫关虚…散答怖胡煞荚翔赴啃汛领血承咒抓剖舌寸叉灶冷输勇脂淮咕蒂沾瘦怎午眉诸。
              </Text>
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_row5}>
          <View className={cssModule.cnt_row6}>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              说点什么吧...
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img11.360buyimg.com/ling/jfs/t1/248609/13/9172/1141/6647094bF8df446da/a0d08843dc20a527.png"
            ></Image>
          </View>
          <View className={cssModule.icon_wrap}>
            <Image
              className={cssModule.icon3}
              src="//img12.360buyimg.com/ling/jfs/t1/186950/40/45848/329/6647094aFecab737b/2b88c59f6dcd1ce9.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.color_view1}></View>
      </View>
    );
  }
}

export default Chat;
