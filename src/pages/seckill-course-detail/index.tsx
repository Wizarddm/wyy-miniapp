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

interface SeckillCourseDetail {
  props: PageStateProps;
}

@inject("store")
@observer
class SeckillCourseDetail extends Component<PropsWithChildren> {
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
              src="//img10.360buyimg.com/ling/jfs/t1/177610/7/46719/744/6643293cF58df17ba/3b5bb154afa2b667.png"
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
              src="//img30.360buyimg.com/ling/jfs/t1/190312/37/45194/2028/66456d7fF74b334cf/5912f3b6e5e0c9da.png"
            ></Image>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt2}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img14.360buyimg.com/ling/jfs/t1/183495/19/40116/2933/6646c4c2Fd8e542c4/4a9db4c53f529baf.png"
            ></Image>
          </View>
          <Image
            className={cssModule.banner}
            src="//img14.360buyimg.com/ling/jfs/t1/234629/16/17615/53006/6643293cF5092cd49/46e47936e68d1378.jpg"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.cnt_row2}>
              <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
                课程到手价
              </Text>
              <Image
                className={cssModule.img2}
                src="//img11.360buyimg.com/ling/jfs/t1/125583/22/41237/5483/6643293dFad8800db/4e3d9eb00ff9cae3.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row3}>
              <Text className={`${cssModule.line1} ${cssModule.tit}`}>
                直播价格¥
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.tit1}`}>
                49.90
              </Text>
              <Text className={cssModule.oriprice}>¥ 999.00</Text>
            </View>
          </View>
        </View>
        <View className={cssModule.color_view}></View>
        <View className={cssModule.cnt_col2}>
          <Image
            className={cssModule.img3}
            src="//img10.360buyimg.com/ling/jfs/t1/237726/24/17513/4204/6646ca1aF9d5d36fd/f3744197d297c1b8.png"
          ></Image>
          <View className={cssModule.cnt_row4}>
            <View className={cssModule.view}></View>
            <View className={cssModule.cnt_col3}>
              <Image
                className={cssModule.icon3}
                src="//img14.360buyimg.com/ling/jfs/t1/166612/7/45182/665/6646ca1aF00413c22/8d363f1a5b384c41.png"
              ></Image>
              <Text className={cssModule.txt4}>咨询</Text>
            </View>
            <View className={cssModule.section_wrap}>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                已设置开播提醒
              </Text>
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_col4}>
          <View className={cssModule.cnt_row5}>
            <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
              2023暑假家长课堂提升数学思维
            </Text>
            <Image
              className={cssModule.icon4}
              src="//img11.360buyimg.com/ling/jfs/t1/134292/34/45038/559/66432942Fa5df47e6/44f0d987dea81ae3.png"
            ></Image>
          </View>
          <Image
            className={cssModule.icon5}
            src="//img11.360buyimg.com/ling/jfs/t1/244523/27/8928/2558/66432942Fc0bb2326/2deee5d125cffb2c.png"
          ></Image>
          <Image
            className={cssModule.icon6}
            src="//img10.360buyimg.com/ling/jfs/t1/239162/7/9364/2802/66432942F8bfd2a2e/3270b3e7d42e52e9.png"
          ></Image>
          <Image
            className={cssModule.icon7}
            src="//img13.360buyimg.com/ling/jfs/t1/204008/30/42311/2816/66432943Fd447cd48/e60eb922b354a051.png"
          ></Image>
          <View className={cssModule.cnt_row6}>
            <Image
              className={cssModule.img4}
              src="//img14.360buyimg.com/ling/jfs/t1/133985/13/42589/2594/66432943F62683b69/c4c5f1eb45278173.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              273人报名
            </Text>
            <Image
              className={cssModule.img5}
              src="//img11.360buyimg.com/ling/jfs/t1/122316/39/43307/90/66432943Fe6334f11/ee6ba657fa902421.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
              2023-07-04 15:00-16:00
            </Text>
          </View>
          {/*以下是一个列表*/}
          <View className={cssModule.cnt_col_list}>
            {/*列表项*/}
            {[0, 1, 2].map((item, index) => (
              <View
                className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item}`}
                key={index}
              >
                <Image
                  className={`${cssModule.icon8_common} ${cssModule.icon8}`}
                  src="//img12.360buyimg.com/ling/jfs/t1/189799/3/45315/519/66432944F4cd41872/2ea57515e0c4739c.png"
                ></Image>
                <Text
                  className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction}`}
                >
                  课堂互动
                </Text>
                <Image
                  className={`${cssModule.icon8_common} ${cssModule.icon9}`}
                  src="//img20.360buyimg.com/ling/jfs/t1/229012/12/18132/683/66432944F5a948a27/4b46d4595bcd6148.png"
                ></Image>
                <Text
                  className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction}`}
                >
                  永久有效
                </Text>
                <Image
                  className={`${cssModule.icon8_common} ${cssModule.icon9}`}
                  src="//img13.360buyimg.com/ling/jfs/t1/234894/37/17471/472/66432944Fe171b5ad/fc09ac6c6234fa81.png"
                ></Image>
                <Text
                  className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction}`}
                >
                  商家资质
                </Text>
                <Image
                  className={cssModule.icon8_common}
                  src="//img14.360buyimg.com/ling/jfs/t1/244349/15/8836/417/6646ca1bF98b363d3/2350287690da24d1.png"
                ></Image>
                <Text className={cssModule.instruction_common}>支持PC端</Text>
              </View>
            ))}
          </View>
          <View className={cssModule.cnt_row7}>
            <Image
              className={cssModule.img6}
              src="//img13.360buyimg.com/ling/jfs/t1/227599/18/17973/13852/66432945F5d40e3cc/669299f702fd45ab.png"
            ></Image>
            <View className={cssModule.cnt_col5}>
              <View className={cssModule.cnt_row8}>
                <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                  非你莫数
                </Text>
                <View className={cssModule.cnt_row9}>
                  <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
                    更多课程
                  </Text>
                  <Image
                    className={cssModule.icon14}
                    src="//img13.360buyimg.com/ling/jfs/t1/126448/39/45907/391/6643293fFd19d9d4e/7d4c4a3c86f2d43e.png"
                  ></Image>
                </View>
              </View>
              <Text className={`${cssModule.line1} ${cssModule.txt10}`}>
                专注于数学教学，家长课堂硕士学历 + 高数教资...
              </Text>
            </View>
          </View>
          <View className={cssModule.wrapper}>
            <View className={cssModule.color_view1}></View>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.tab_hd_txt}`}>
            课程介绍
          </Text>
          <Image
            className={cssModule.bg}
            src="//img30.360buyimg.com/ling/jfs/t1/233161/38/17886/285705/6646ca19F5c347ab7/75c04dea8d6fc059.jpg"
          ></Image>
          <View className={cssModule.wrapper1}>
            <View className={cssModule.color_view1}></View>
          </View>
          <View className={cssModule.cnt_row10}>
            <Text className={`${cssModule.line1} ${cssModule.txt11}`}>
              课程评价
            </Text>
            <View className={cssModule.cnt_row11}>
              <Text className={`${cssModule.line1} ${cssModule.txt12}`}>
                查看全部
              </Text>
              <Image
                className={cssModule.icon15}
                src="//img13.360buyimg.com/ling/jfs/t1/126448/39/45907/391/6643293fFd19d9d4e/7d4c4a3c86f2d43e.png"
              ></Image>
            </View>
          </View>
          <View className={cssModule.cnt_row12}>
            <Image
              className={cssModule.icon16}
              src="//img13.360buyimg.com/ling/jfs/t1/162594/21/45983/5850/6643293fF24ae03f2/872d20cdb4960e87.png"
            ></Image>
            <View className={cssModule.cnt_col6}>
              <Text className={`${cssModule.line1} ${cssModule.tit2}`}>
                R***m
              </Text>
              <Image
                className={cssModule.img7}
                src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
              ></Image>
            </View>
          </View>
          <Text className={`${cssModule.line3} ${cssModule.tab_hd_txt1}`}>
            师傅教的特别好，客服也很有耐心。由于个人原因，一共调整了预约的时间，客服都耐心服务了，点赞。
          </Text>
          <View className={cssModule.tab_active}></View>
          <View className={cssModule.cnt_row13}>
            <Image
              className={cssModule.icon16}
              src="//img20.360buyimg.com/ling/jfs/t1/98226/5/43103/4552/66432940Fb202032d/a7d3d9912df61011.png"
            ></Image>
            <View className={cssModule.cnt_col7}>
              <Text className={`${cssModule.line1} ${cssModule.tit3}`}>
                吴***雨
              </Text>
              <Image
                className={cssModule.img7}
                src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
              ></Image>
            </View>
          </View>
          <Text className={`${cssModule.line2} ${cssModule.txt13}`}>
            老师很温柔，第一次的体验比想象还要好，环境非常好，服务很周到，整体还是不错的！
          </Text>
          <View className={cssModule.wrapper2}>
            <View className={cssModule.color_view1}></View>
          </View>
          <Text className={`${cssModule.line1} ${cssModule.txt14}`}>
            课程须知
          </Text>
          <View className={cssModule.cnt_row14}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction4}`}>
              购买课程后如何观看?
            </Text>
            <Image
              className={cssModule.icon18}
              src="//img14.360buyimg.com/ling/jfs/t1/217327/10/41219/276/66432940F94ec5a73/9afa440e1a2a0095.png"
            ></Image>
          </View>
          <View className={cssModule.section_wrap1}>
            <Text className={`${cssModule.line2} ${cssModule.section1}`}>
              手机端看课:搜索【文言言】进入小程序，点击底部【已购课程】按钮，即可观看购买课程。
            </Text>
          </View>
          <View className={cssModule.cnt_row15}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction4}`}>
              购买课程后能否退款?
            </Text>
            <Image
              className={cssModule.icon18}
              src="//img14.360buyimg.com/ling/jfs/t1/217327/10/41219/276/66432940F94ec5a73/9afa440e1a2a0095.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row16}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction4}`}>
              售后问题如何咨询?
            </Text>
            <Image
              className={cssModule.icon19}
              src="//img14.360buyimg.com/ling/jfs/t1/217327/10/41219/276/66432940F94ec5a73/9afa440e1a2a0095.png"
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}

export default SeckillCourseDetail;
