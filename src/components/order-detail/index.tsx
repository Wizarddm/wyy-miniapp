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
          <Text className={`${cssModule.line1} ${cssModule.txt}`}>
            订单详情
          </Text>
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.cnt_row}>
              <Text className={`${cssModule.line1} ${cssModule.txt1}`}>
                课程价格
              </Text>
              <Image
                className={cssModule.img}
                src="//img30.360buyimg.com/ling/jfs/t1/248772/32/9179/3576/66457222F769a0251/ca324f21ed6dd9c5.png"
              ></Image>
              {/*商品价格*/}
              <View className={cssModule.price_wrap}>
                <Text className={cssModule.price}>¥49.90</Text>
              </View>
            </View>
            {/*商品价格*/}
            <View className={cssModule.oriprice_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.oriprice}`}>
                ¥999.90
              </Text>
            </View>
            <View className={cssModule.cnt_row1}>
              <Text className={cssModule.txt2}>优惠券</Text>
              <Text className={cssModule.txt3}>暂无可用</Text>
            </View>
            <View className={cssModule.cnt_row2}>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                合计
              </Text>
              {/*商品价格*/}
              <View className={cssModule.price_wrap1}>
                <Text className={`${cssModule.line1} ${cssModule.price1}`}>
                  ¥49.90
                </Text>
              </View>
            </View>
          </View>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.view}></View>
            <View className={cssModule.cnt_row3}>
              <Image
                className={cssModule.icon}
                src="//img10.360buyimg.com/ling/jfs/t1/137063/37/45301/123/66457222F72bb74eb/420c5f4fd4ba4f85.png"
              ></Image>
              <View className={cssModule.cnt_row4}>
                <Text className={cssModule.txt5}>阅读并同意</Text>
                <Text className={cssModule.txt6}>《文言言课程购买协议》</Text>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              {/*商品价格*/}
              <View className={cssModule.price_wrap2}>
                <Text className={cssModule.yuan}>¥</Text>
                <Text className={cssModule.price2}>49.90</Text>
              </View>
              <Image
                className={cssModule.icon1}
                src="//img12.360buyimg.com/ling/jfs/t1/224992/28/18113/199/664408abFd19d2a62/6ef9c026628d850c.png"
              ></Image>
            </View>
            <View className={cssModule.txt_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
                立即抢购
              </Text>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default TeacherCourse;
