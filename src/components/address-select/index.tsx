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

interface AddressSelect {
  props: PageStateProps;
}

@inject("store")
@observer
class AddressSelect extends Component<PropsWithChildren> {
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
        <View className={cssModule.cnt_col1}>
          <View className={cssModule.cnt_row2}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              选择地区
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img20.360buyimg.com/ling/jfs/t1/248374/19/9109/698/6646bd0fF5bf2a9c7/c72ed2a3a556c9f1.png"
            ></Image>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
            热门城市
          </Text>
          <View className={cssModule.cnt_row3}>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                吉林市
              </Text>
            </View>
            <View className={cssModule.section_wrap1}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                上海市
              </Text>
            </View>
            <View className={cssModule.section_wrap2}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                南京市
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_row4}>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                杭州市
              </Text>
            </View>
            <View className={cssModule.section_wrap1}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                长沙市
              </Text>
            </View>
            <View className={cssModule.section_wrap2}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                郑州市
              </Text>
            </View>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
            选择省份/地区
          </Text>
          <View className={cssModule.cnt_row5}>
            <Text className={cssModule.txt7}>A</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              安徽省
            </Text>
          </View>
          <View className={cssModule.cnt_row6}>
            <Text className={cssModule.txt7}>B</Text>
            <Text className={cssModule.txt9}>北京</Text>
          </View>
          <View className={cssModule.cnt_row6}>
            <Text className={cssModule.txt7}>C</Text>
            <Text className={cssModule.txt9}>重庆</Text>
          </View>
          <View className={cssModule.cnt_row5}>
            <Text className={cssModule.txt7}>F</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              福建省
            </Text>
          </View>
          <View className={cssModule.cnt_row5}>
            <Text className={cssModule.txt7}>G</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              甘肃省
            </Text>
          </View>
          <View className={cssModule.cnt_row5}>
            <Text className={cssModule.txt10}>G</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              广东省
            </Text>
          </View>
          <View className={cssModule.cnt_row7}>
            <Text className={cssModule.txt10}>G</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              广西壮族自治区
            </Text>
          </View>
          <View className={cssModule.color_view}></View>
        </View>
      </View>
    );
  }
}

export default AddressSelect;
