import { Component, PropsWithChildren } from "react";
import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { post } from "utils/request";

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
  componentDidMount() {
    post("/api/course.course/list");
  }

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
        <View className={cssModule.cnt}>
          <View className={cssModule.wrapper}>
            <View className={cssModule.cnt_col}>
              <Image
                className={cssModule.banner}
                src="//img30.360buyimg.com/ling/jfs/t1/163375/40/44222/782474/66456b15F3600d7c9/b9d7d67e09c2c199.png"
              ></Image>
              <View className={cssModule.cnt_col1}>
                <Image
                  className={cssModule.main_img}
                  src="//img10.360buyimg.com/ling/jfs/t1/219148/32/39813/26100/66456b18F7d6cc2bc/3f46c7ab130fb319.png"
                ></Image>
                <Image
                  className={cssModule.icon}
                  src="//img30.360buyimg.com/ling/jfs/t1/247642/26/8908/561/66456b16F3c70c700/1cf26002c64dbf18.png"
                ></Image>
                <Image
                  className={cssModule.img}
                  src="//img10.360buyimg.com/ling/jfs/t1/223721/33/43388/5874/66456b18F41229801/a3f601540949d708.png"
                ></Image>
              </View>
              <View className={cssModule.cnt_row}>
                <Text className={`${cssModule.line1} ${cssModule.tit}`}>
                  下午9:41
                </Text>
                <Text className={cssModule.txt}>HD</Text>
                <Image
                  className={cssModule.icon1}
                  src="//img12.360buyimg.com/ling/jfs/t1/217604/7/41469/785/66431588F6d6aa425/ef0257665c85808e.png"
                ></Image>
                <Image
                  className={cssModule.icon2}
                  src="//img11.360buyimg.com/ling/jfs/t1/209644/19/41684/861/66456b1aFdefa20a4/1a15c41626ae5af4.png"
                ></Image>
              </View>
              <Image
                className={cssModule.icon3}
                src="//img11.360buyimg.com/ling/jfs/t1/166293/10/46020/327/66431588F579b5bba/02a48db42b638e6d.png"
              ></Image>
              <View className={cssModule.cnt_row1}>
                <Image
                  className={cssModule.img1}
                  src="//img11.360buyimg.com/ling/jfs/t1/227380/1/17509/2233/66431589Ff0ddf3dc/eef3f5f73947b32f.png"
                ></Image>
                <View className={cssModule.txt_wrap}>
                  <Text className={cssModule.txt1}>反馈</Text>
                </View>
                <Image
                  className={cssModule.img2}
                  src="//img12.360buyimg.com/ling/jfs/t1/225263/20/17894/2010/66431589Ff0b8380e/e32818e5e824248c.png"
                ></Image>
              </View>
              <Image
                className={cssModule.main_img1}
                src="//img14.360buyimg.com/ling/jfs/t1/127778/25/44118/11698/66456b15Fb1f661c4/e78c3f9403510287.png"
              ></Image>
              <Image
                className={cssModule.main_img2}
                src="//img12.360buyimg.com/ling/jfs/t1/189484/17/45795/5535/66456b15F48f67921/ba32d15e94001651.png"
              ></Image>
              <View className={cssModule.cnt_col2}>
                <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
                  好课轻松学
                </Text>
                <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
                  好课轻松学
                </Text>
              </View>
              <Image
                className={cssModule.main_img3}
                src="//img14.360buyimg.com/ling/jfs/t1/185647/30/45727/26227/66456b17F20d3f72c/3b7437c3a2bf1dec.png"
              ></Image>
              <View className={cssModule.bg_view}></View>
              <Image
                className={cssModule.icon4}
                src="//img30.360buyimg.com/ling/jfs/t1/247642/26/8908/561/66456b16F3c70c700/1cf26002c64dbf18.png"
              ></Image>
              <View className={cssModule.cnt_row2}>
                <Text className={`${cssModule.line1} ${cssModule.tit1}`}>
                  文言言官方认证导师
                </Text>
                <Image
                  className={cssModule.img3}
                  src="//img20.360buyimg.com/ling/jfs/t1/245148/34/8088/1096/66456b16F1b0d008b/7998a2ce0ece9262.png"
                ></Image>
              </View>
              <Image
                className={cssModule.icon5}
                src="//img20.360buyimg.com/ling/jfs/t1/85334/16/42784/366/66456b16F56e624fe/4a6d20ae7f719474.png"
              ></Image>
              <View className={cssModule.cnt_row3}>
                <Image
                  className={cssModule.icon6}
                  src="//img20.360buyimg.com/ling/jfs/t1/85334/16/42784/366/66456b16F56e624fe/4a6d20ae7f719474.png"
                ></Image>
                <Image
                  className={cssModule.icon7}
                  src="//img20.360buyimg.com/ling/jfs/t1/172309/16/45383/756/66456b17Fb50dde2a/5d112de64b4027bc.png"
                ></Image>
                <Image
                  className={cssModule.icon8}
                  src="//img14.360buyimg.com/ling/jfs/t1/231946/26/18440/244/66456b17Ff07632a7/12c621ef5ac12c4e.png"
                ></Image>
              </View>
              <View className={cssModule.color_view}></View>
            </View>
          </View>
          <View className={cssModule.wrapper1}>
            <View className={cssModule.cnt_row4}>
              <Image
                className={cssModule.img4}
                src="//img13.360buyimg.com/ling/jfs/t1/227599/18/17973/13852/66432945F5d40e3cc/669299f702fd45ab.png"
              ></Image>
              <View className={cssModule.cnt_col3}>
                <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                  非你莫数
                </Text>
                <Text className={`${cssModule.line3} ${cssModule.instruction}`}>
                  专注于数学教学，家长课堂硕士学历+高数教资曾任星火精品课堂初高数学老师学生累计4000+
                </Text>
              </View>
            </View>
          </View>
          <View className={cssModule.wrapper2}>
            <View className={cssModule.cnt_row5}>
              <Text className={cssModule.txt5}>· 老师介绍 </Text>
              <Text className={cssModule.txt5}>·</Text>
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_col4}>
          <View className={cssModule.cnt_row6}>
            <Text className={cssModule.txt6}>全部</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>销量</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>价格</Text>
            <View className={cssModule.cnt_col5}>
              <Image
                className={cssModule.img5}
                src="//img14.360buyimg.com/ling/jfs/t1/208997/21/43497/143/66456b19F658b5d9f/403e1fc396849313.png"
              ></Image>
              <Image
                className={cssModule.img6}
                src="//img30.360buyimg.com/ling/jfs/t1/174108/24/46303/147/66456b19Fea64e574/71f0eb36c5718d82.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row7}>
              <Image
                className={cssModule.icon9}
                src="//img13.360buyimg.com/ling/jfs/t1/225231/17/17594/465/66456b1aF1448cbc8/07d186bdb8dc61e9.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                搜索
              </Text>
            </View>
          </View>
          <View className={cssModule.wrapper3}>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_col_list}>
              {/*列表项*/}
              {[0, 1, 2].map((item, index) => (
                <View
                  className={`${cssModule.wrapper_item_common} ${cssModule.wrapper_item}`}
                  key={index}
                >
                  <View
                    className={`${cssModule.section_wrap_common} ${cssModule.section_wrap}`}
                  >
                    <Text
                      className={`${cssModule.section1_common} ${cssModule.section1}`}
                    >
                      1
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View className={cssModule.wrapper4}>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_col_list}>
              {/*列表项*/}
              {[0, 1, 2].map((item, index) => (
                <View
                  className={`${cssModule.cnt_col_item_common} ${cssModule.cnt_col_item}`}
                  key={index}
                >
                  <View
                    className={`${cssModule.txt_wrap1_common} ${cssModule.txt_wrap1}`}
                  >
                    <Text
                      className={`${cssModule.line1} ${cssModule.txt8_common}`}
                    >
                      暑假家长数学素养课--初阶三
                    </Text>
                  </View>
                  <View
                    className={`${cssModule.cnt_row8_common} ${cssModule.cnt_row8}`}
                  >
                    <Image
                      className={cssModule.icon10_common}
                      src="//img13.360buyimg.com/ling/jfs/t1/247154/5/8599/423/66456b1aFb8b8ed77/fb52eb123b2e7df2.png"
                    ></Image>
                    <Text
                      className={`${cssModule.line1} ${cssModule.instruction1_common}`}
                    >
                      273人已学习
                    </Text>
                  </View>
                  <View className={cssModule.cnt_row9_common}>
                    {/*商品价格*/}
                    <View className={cssModule.price_wrap_common}>
                      <Text className={cssModule.yuan_common}>¥</Text>
                      <Text className={cssModule.price_common}>49.90</Text>
                    </View>
                    <Text
                      className={`${cssModule.txt9_common} ${cssModule.txt9}`}
                    >
                      起
                    </Text>
                    <Text
                      className={`${cssModule.line1} ${cssModule.oriprice_common} ${cssModule.oriprice}`}
                    >
                      ¥ 999.00
                    </Text>
                    <View className={cssModule.section_wrap2_common}>
                      <Text className={cssModule.section3_common}>抢</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TeacherCourse;
