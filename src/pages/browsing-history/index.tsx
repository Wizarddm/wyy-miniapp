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

interface BrowsingHistory {
  props: PageStateProps;
}

@inject("store")
@observer
class BrowsingHistory extends Component<PropsWithChildren> {
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
                src="//img12.360buyimg.com/ling/jfs/t1/180257/24/39966/780/66457410F808a148f/f16032043625e6d8.png"
              ></Image>
            </View>
            <Image
              className={cssModule.icon2}
              src="//img12.360buyimg.com/ling/jfs/t1/171940/8/46175/310/66440c69F40793a7b/690a18e61c18a057.png"
            ></Image>
            <View className={cssModule.cnt_row1}>
              <Image
                className={cssModule.img}
                src="//img30.360buyimg.com/ling/jfs/t1/190312/37/45194/2028/66456d7fF74b334cf/5912f3b6e5e0c9da.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
                浏览记录
              </Text>
              <View className={cssModule.txt_wrap}>
                <Text className={cssModule.txt3}>反馈</Text>
              </View>
              <Image
                className={cssModule.img1}
                src="//img20.360buyimg.com/ling/jfs/t1/186064/10/45759/2373/6645771aF3793dcc4/19c36d97748df57f.png"
              ></Image>
            </View>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
            仅展示最近3天的浏览课程记录
          </Text>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row2}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt6}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap1}>
                  <Text className={cssModule.section1}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt6}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap1}>
                  <Text className={cssModule.section1}>图文</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt6}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt6}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>直播</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt6}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row3}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap}>
                  <Text className={cssModule.section}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col5}>
                <Text className={`${cssModule.line2} ${cssModule.txt5}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default BrowsingHistory;
