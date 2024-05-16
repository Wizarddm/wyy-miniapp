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

interface TeacherCourse {
  props: PageStateProps;
}

@inject("store")
@observer
class TeacherCourse extends Component<PropsWithChildren> {
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
      <View className={cssModule.wrapper}>
        <View className={cssModule.cnt_col}>
          <View className={cssModule.cnt_row}>
            <Text className={`${cssModule.line1} ${cssModule.txt}`}>
              保障说明
            </Text>
            <Image
              className={cssModule.icon}
              src="//img30.360buyimg.com/ling/jfs/t1/191047/2/46983/694/664410b4F0909482f/5ae2fe768e81dc8c.png"
            ></Image>
          </View>
          <View className={cssModule.split_ver}></View>
          <View className={cssModule.cnt_row1}>
            <Image
              className={cssModule.icon1}
              src="//img30.360buyimg.com/ling/jfs/t1/245490/9/9180/1159/664410b4F6812a17b/c92286a24403fe02.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              版权保护
            </Text>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt1}`}>
            该课程受作者版权保护 盗用需承担法律责任
          </Text>
          <View className={cssModule.cnt_row2}>
            <Image
              className={cssModule.icon1}
              src="//img30.360buyimg.com/ling/jfs/t1/245490/9/9180/1159/664410b4F6812a17b/c92286a24403fe02.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              消费者保障服务
            </Text>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
            如商品有质量问题,描述不符等情况,您有权联系老师协商处理
          </Text>
          <View className={cssModule.cnt_row3}>
            <Image
              className={cssModule.icon1}
              src="//img30.360buyimg.com/ling/jfs/t1/245490/9/9180/1159/664410b4F6812a17b/c92286a24403fe02.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              企业资质
            </Text>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
            企业资质认证已通过
          </Text>
          <View className={cssModule.color_view}></View>
        </View>
      </View>
    );
  }
}

export default TeacherCourse;
