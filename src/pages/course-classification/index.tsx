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

interface CourseClassification {
  props: PageStateProps;
}

@inject("store")
@observer
class CourseClassification extends Component<PropsWithChildren> {
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
                src="//img30.360buyimg.com/ling/jfs/t1/190312/37/45194/2028/66456d7fF74b334cf/5912f3b6e5e0c9da.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
                文言言
              </Text>
              <View className={cssModule.txt_wrap}>
                <Text className={cssModule.txt3}>反馈</Text>
              </View>
              <Image
                className={cssModule.img1}
                src="//img10.360buyimg.com/ling/jfs/t1/223642/21/39760/2359/664572afFd768ec59/5d8bba870409bd98.png"
              ></Image>
            </View>
          </View>
          <View className={cssModule.cnt_row2}>
            <Image
              className={cssModule.icon3}
              src="//img20.360buyimg.com/ling/jfs/t1/150872/36/41831/770/664572afFf9772ec9/fa91ac7395478517.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
              大家都在搜
            </Text>
            <View className={cssModule.section_wrap}>
              <Text className={cssModule.section}>搜索</Text>
            </View>
          </View>
          <View className={cssModule.cnt_row3}>
            <View className={cssModule.cnt_row4}>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                游戏娱乐
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                舞蹈健身
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                亲子教育
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                心理健康
              </Text>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap1}>
                  <Text className={cssModule.section1}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row7}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap1}>
                  <Text className={cssModule.section1}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>图文</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>视频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt7}>起</Text>
                  <Text className={cssModule.price1}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>直播</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.tit}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <Image
              className={cssModule.img2}
              src="//img10.360buyimg.com/ling/jfs/t1/172119/1/44625/4215/664572afF701491db/3dac1ac73c453c7c.png"
            ></Image>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col4}>
                <Text className={`${cssModule.line2} ${cssModule.tit}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row6}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col5}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row8}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col5}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row8}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row5}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col5}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row8}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
            <View className={cssModule.cnt_row9}>
              <View className={cssModule.wrapper}>
                <View className={cssModule.section_wrap2}>
                  <Text className={cssModule.section2}>音频</Text>
                </View>
              </View>
              <View className={cssModule.cnt_col5}>
                <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                  洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                </Text>
                <View className={cssModule.cnt_row8}>
                  {/*商品价格*/}
                  <View className={cssModule.price_wrap}>
                    <Text className={cssModule.yuan}>¥</Text>
                    <Text className={cssModule.price}>49.90</Text>
                  </View>
                  <Text className={cssModule.txt8}>起</Text>
                  <Text className={cssModule.price2}>¥ 999.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View className={cssModule.color_view1}></View>
        </View>
      </View>
    );
  }
}

export default CourseClassification;
