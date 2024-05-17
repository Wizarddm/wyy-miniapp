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

interface AddressNoEmpty {
  props: PageStateProps;
}

@inject("store")
@observer
class AddressNoEmpty extends Component<PropsWithChildren> {
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
              src="//img30.360buyimg.com/ling/jfs/t1/93193/1/25529/2375/6646bf5aFd8be2701/de8449b00a2e4dee.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
              我的收货地址
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt3}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img12.360buyimg.com/ling/jfs/t1/223647/25/43490/2921/6646bf5aF4b892d31/c78d2154ae7d8661.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.cnt_col1}>
          <View className={cssModule.cnt_row2}>
            <Text className={cssModule.txt4}>赖刚</Text>
            <Text className={`${cssModule.line1} ${cssModule.phone}`}>
              13377021580
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img11.360buyimg.com/ling/jfs/t1/167483/11/44665/512/6646bf5bF384c0846/4254ba578d2d4d46.png"
            ></Image>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
            四川省遂宁市市辖区 2 幢 276 室
          </Text>
          <Image
            className={cssModule.act}
            src="//img13.360buyimg.com/ling/jfs/t1/186060/29/43735/824/6646bf5aF26ee8ada/33b66b5726ade7ed.jpg"
          ></Image>
          <View className={cssModule.cnt_row3}>
            <Image
              className={cssModule.icon4}
              src="//img10.360buyimg.com/ling/jfs/t1/137063/37/45301/123/66457222F72bb74eb/420c5f4fd4ba4f85.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              默认地址
            </Text>
            <Text className={cssModule.txt7}>删除</Text>
          </View>
        </View>
        <View className={cssModule.cnt_col2}>
          <View className={cssModule.cnt_row4}>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              邵国豪
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.phone1}`}>
              13766451794
            </Text>
            <Image
              className={cssModule.icon5}
              src="//img11.360buyimg.com/ling/jfs/t1/167483/11/44665/512/6646bf5bF384c0846/4254ba578d2d4d46.png"
            ></Image>
          </View>
          <Text className={`${cssModule.line2} ${cssModule.txt9}`}>
            贵州省黔东南苗族侗族自治州剑河县久仰乡 3 幢 264 室
          </Text>
          <Image
            className={cssModule.act1}
            src="//img13.360buyimg.com/ling/jfs/t1/186060/29/43735/824/6646bf5aF26ee8ada/33b66b5726ade7ed.jpg"
          ></Image>
          <View className={cssModule.cnt_row5}>
            <Image
              className={cssModule.icon4}
              src="//img12.360buyimg.com/ling/jfs/t1/99976/12/42865/632/6646bf5bF8c5d7d15/f36bbb1f2a9571bb.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              默认地址
            </Text>
            <Text className={cssModule.txt7}>删除</Text>
          </View>
        </View>
        <View className={cssModule.section_wrap}>
          <Text className={`${cssModule.line1} ${cssModule.section}`}>
            添加新地址
          </Text>
        </View>
        <View className={cssModule.color_view}></View>
      </View>
    );
  }
}

export default AddressNoEmpty;
