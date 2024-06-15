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

interface LimitedTimeDiscount {
  props: PageStateProps;
}

@inject("store")
@observer
class LimitedTimeDiscount extends Component<PropsWithChildren> {
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
        <View className={cssModule.wrapper}>
          <View className={cssModule.cnt_col}>
            <View className={cssModule.cnt_row}>
              <Text className={`${cssModule.line1} ${cssModule.txt}`}>
                下午9:41
              </Text>
              <Text className={cssModule.txt1}>HD</Text>
              <Image
                className={cssModule.icon}
                src="//img12.360buyimg.com/ling/jfs/t1/217604/7/41469/785/66431588F6d6aa425/ef0257665c85808e.png"
              ></Image>
              <Image
                className={cssModule.icon1}
                src="//img11.360buyimg.com/ling/jfs/t1/243694/25/9151/866/66431588F3bb94971/d6734603e01abda3.png"
              ></Image>
            </View>
            <Image
              className={cssModule.icon2}
              src="//img11.360buyimg.com/ling/jfs/t1/166293/10/46020/327/66431588F579b5bba/02a48db42b638e6d.png"
            ></Image>
            <View className={cssModule.cnt_row1}>
              <Image
                className={cssModule.img}
                src="//img11.360buyimg.com/ling/jfs/t1/227380/1/17509/2233/66431589Ff0ddf3dc/eef3f5f73947b32f.png"
              ></Image>
              <View className={cssModule.txt_wrap}>
                <Text className={cssModule.txt2}>反馈</Text>
              </View>
              <Image
                className={cssModule.img1}
                src="//img12.360buyimg.com/ling/jfs/t1/225263/20/17894/2010/66431589Ff0b8380e/e32818e5e824248c.png"
              ></Image>
            </View>
            <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
              限时优惠遇好礼，低价捡漏拼手速
            </Text>
          </View>
        </View>
        <View className={cssModule.cnt_col1}>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_col3}>
              <View className={cssModule.wrapper1}>
                {/*以下是一个列表*/}
                <View className={cssModule.cnt_col_list}>
                  {/*列表项*/}
                  {[0, 1, 2, 3, 4].map((item, index) => (
                    <View
                      className={`${cssModule.wrapper_item_common} ${cssModule.wrapper_item}`}
                      key={index}
                    >
                      <View className={cssModule.section_wrap_common}>
                        <Text className={cssModule.section_common}>1</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              <Text className={`${cssModule.line2} ${cssModule.txt4}`}>
                【教师编制】21天笔面重点班【教师编制】21天笔面重点班
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price}`}>
                49.90
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price1}`}>
                273人在看
              </Text>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={`${cssModule.line1} ${cssModule.oriprice}`}>
                ¥ 99.00
              </Text>
              <View className={cssModule.cnt_row2}>
                <View className={cssModule.view}></View>
                <Text className={cssModule.txt5}>红包优惠</Text>
              </View>
              <View className={cssModule.section_wrap1}>
                <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                  限时优惠88.00元
                </Text>
              </View>
              <View className={cssModule.split_ver}></View>
              <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                【教师编制】21天笔面重点班【教师编制】21天笔面重点班
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price2}`}>
                49.90
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price1}`}>
                273人在看
              </Text>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={`${cssModule.line1} ${cssModule.oriprice}`}>
                ¥ 99.00
              </Text>
              <View className={cssModule.cnt_row3}>
                <View className={cssModule.view}></View>
                <Text className={cssModule.txt5}>红包优惠</Text>
              </View>
              <View className={cssModule.section_wrap1}>
                <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                  限时优惠88.00元
                </Text>
              </View>
              <View className={cssModule.split_ver}></View>
              <Text className={`${cssModule.line2} ${cssModule.txt6}`}>
                【教师编制】21天笔面重点班【教师编制】21天笔面重点班
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price}`}>
                49.90
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price3}`}>
                273人在看
              </Text>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={`${cssModule.line1} ${cssModule.oriprice}`}>
                ¥ 99.00
              </Text>
              <View className={cssModule.cnt_row4}>
                <View className={cssModule.view}></View>
                <Text className={cssModule.txt7}>红包优惠</Text>
              </View>
              <View className={cssModule.section_wrap2}>
                <Text className={`${cssModule.line1} ${cssModule.section2}`}>
                  限时优惠88.00元
                </Text>
              </View>
              <View className={cssModule.split_ver}></View>
              <Text className={`${cssModule.line2} ${cssModule.txt8}`}>
                【教师编制】21天笔面重点班【教师编制】21天笔面重点班
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price}`}>
                49.90
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.price1}`}>
                273人在看
              </Text>
              <Text className={cssModule.yuan}>¥</Text>
              <Text className={`${cssModule.line1} ${cssModule.oriprice}`}>
                ¥ 99.00
              </Text>
              <View className={cssModule.cnt_row5}>
                <View className={cssModule.view}></View>
                <Text className={cssModule.txt5}>红包优惠</Text>
              </View>
              <View className={cssModule.section_wrap1}>
                <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                  限时优惠88.00元
                </Text>
              </View>
              <View className={cssModule.split_ver}></View>
            </View>
            <Text className={`${cssModule.line2} ${cssModule.tab_hd_txt}`}>
              【教师编制】21天笔面重点班【教师编制】21天笔面重点班
            </Text>
          </View>
          <View className={cssModule.color_view}></View>
          <View className={cssModule.tab_active}></View>
        </View>
      </View>
    );
  }
}

export default LimitedTimeDiscount;
