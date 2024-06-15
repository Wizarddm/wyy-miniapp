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

interface AddressCreate {
  props: PageStateProps;
}

@inject("store")
@observer
class AddressCreate extends Component<PropsWithChildren> {
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
              src="//img14.360buyimg.com/ling/jfs/t1/222982/33/40746/2536/6646babbFa05f0139/88cb327a2b339049.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
              添加新地址
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img20.360buyimg.com/ling/jfs/t1/225789/1/17051/2379/6646babbFf37171c6/8635155d3ec0e27f.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.cnt_col1}>
          <View className={cssModule.cnt_row2}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              收货人
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                请输入姓名
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_row2}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              手机号
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                请输入手机号
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_row2}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              所在地区
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                请选择地区
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_row3}>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              详细地址
            </Text>
            <View className={cssModule.txt_wrap1}>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                如街道、小区、门牌号
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_row4}>
            <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
              默认地址
            </Text>
            <Image
              className={cssModule.img2}
              src="//img30.360buyimg.com/ling/jfs/t1/216716/28/41780/1035/6646babbF7facff74/2200c24266bc6148.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.section_wrap1}>
          <Text className={`${cssModule.line1} ${cssModule.section1}`}>
            保存
          </Text>
        </View>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default AddressCreate;
