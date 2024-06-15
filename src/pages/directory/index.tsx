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

interface Directory {
  props: PageStateProps;
}

@inject("store")
@observer
class Directory extends Component<PropsWithChildren> {
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
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.view}></View>
            <View className={cssModule.cnt_row}>
              <Text className={`${cssModule.line1} ${cssModule.txt}`}>
                下午9:41
              </Text>
              <Text className={cssModule.txt1}>HD</Text>
              <Image
                className={cssModule.icon}
                src="//img30.360buyimg.com/ling/jfs/t1/233972/38/16477/748/66440c69F9a423685/a909295b7cc15f79.png"
              ></Image>
              <Image
                className={cssModule.icon1}
                src="//img13.360buyimg.com/ling/jfs/t1/191869/7/44937/795/6642b361Ff9a0e03d/0eedbcbb4ecfbce1.png"
              ></Image>
            </View>
            <Image
              className={cssModule.icon2}
              src="//img12.360buyimg.com/ling/jfs/t1/171940/8/46175/310/66440c69F40793a7b/690a18e61c18a057.png"
            ></Image>
            <View className={cssModule.cnt_row1}>
              <Image
                className={cssModule.img}
                src="//img10.360buyimg.com/ling/jfs/t1/234241/10/16196/2028/663aed54F023c8b50/b4c0274c9273ed76.png"
              ></Image>
              <View className={cssModule.txt_wrap}>
                <Text className={cssModule.txt2}>反馈</Text>
              </View>
              <Image
                className={cssModule.img1}
                src="//img11.360buyimg.com/ling/jfs/t1/246670/3/9154/2916/66440c69Fac829666/48dfef340da988cb.png"
              ></Image>
            </View>
          </View>
          <View className={cssModule.cnt_row2}>
            <View className={cssModule.view1}></View>
            <View className={cssModule.cnt_row3}>
              <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
                介绍
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                评价
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                须知
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                目录
              </Text>
              <View className={cssModule.cnt_row4}>
                <Text className={cssModule.txt7}>(</Text>
                <Text className={cssModule.txt8}>8)</Text>
              </View>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
          <View className={cssModule.cnt_row5}>
            <Text className={cssModule.number}>1</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
              特殊的平行四边形.mp4
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img10.360buyimg.com/ling/jfs/t1/174491/15/45548/2453/663ae594F85c6338b/c351e2b85e7ccc46.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row6}>
            <Image
              className={cssModule.img2}
              src="//img13.360buyimg.com/ling/jfs/t1/159603/34/25716/2687/66440c68F44a1e4a3/114fb1385c007554.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              02时03分50秒
            </Text>
          </View>
          <View className={cssModule.split_ver}></View>
          <View className={cssModule.cnt_row7}>
            <Text className={cssModule.number}>2</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
              特殊的平行四边形.mp4
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img14.360buyimg.com/ling/jfs/t1/233293/24/16370/1078/66440c68F0022956b/8bb0a69b83b6be15.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row6}>
            <Image
              className={cssModule.img2}
              src="//img13.360buyimg.com/ling/jfs/t1/99083/17/43661/2780/66440c68F12965abe/c3062180ede58413.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              02时03分50秒
            </Text>
          </View>
          <View className={cssModule.split_ver}></View>
          <View className={cssModule.cnt_row7}>
            <Text className={cssModule.number}>3</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
              特殊的平行四边形.mp4
            </Text>
            <Image
              className={cssModule.icon3}
              src="//img14.360buyimg.com/ling/jfs/t1/233293/24/16370/1078/66440c68F0022956b/8bb0a69b83b6be15.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row8}>
            <Image
              className={cssModule.img2}
              src="//img13.360buyimg.com/ling/jfs/t1/99083/17/43661/2780/66440c68F12965abe/c3062180ede58413.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              02时03分50秒
            </Text>
          </View>
        </View>
        <Image
          className={cssModule.img3}
          src="//img12.360buyimg.com/ling/jfs/t1/194630/39/45511/4204/66440c6aF562d15e9/40920cd8bbd2c757.png"
        ></Image>
        <View className={cssModule.cnt_col2}>
          <View className={cssModule.view2}></View>
          <View className={cssModule.cnt_row9}>
            <Image
              className={cssModule.icon4}
              src="//img30.360buyimg.com/ling/jfs/t1/165443/15/24645/365/66432941F7675b4f2/512768751399e65f.png"
            ></Image>
            <View className={cssModule.cnt_row10}>
              <Text className={cssModule.txt10}>阅读并同意</Text>
              <Text className={cssModule.txt11}>《文言言课程购买协议》</Text>
            </View>
          </View>
          <View className={cssModule.cnt_row11}>
            {/*商品价格*/}
            <View className={cssModule.price_wrap}>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={cssModule.price}>49.90</Text>
            </View>
            <Image
              className={cssModule.icon5}
              src="//img11.360buyimg.com/ling/jfs/t1/226707/19/17309/199/66432942F8bf16ade/03056926464eaf0b.png"
            ></Image>
          </View>
          <View className={cssModule.txt_wrap1}>
            <Text className={`${cssModule.line1} ${cssModule.txt12}`}>
              立即抢购
            </Text>
          </View>
          <View className={cssModule.color_view1}></View>
        </View>
      </View>
    );
  }
}

export default Directory;
