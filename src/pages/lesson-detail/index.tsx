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

interface LessonDetail {
  props: PageStateProps;
}

@inject("store")
@observer
class LessonDetail extends Component<PropsWithChildren> {
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
            <Text className={`${cssModule.line1} ${cssModule.tit}`}>
              下午9:41
            </Text>
            <Text className={cssModule.tit1}>HD</Text>
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
            src="//img12.360buyimg.com/ling/jfs/t1/217590/37/40687/312/663ae597F52e20c29/c32f56176e731ac9.png"
          ></Image>
          <Image
            className={cssModule.img}
            src="//img10.360buyimg.com/ling/jfs/t1/234241/10/16196/2028/663aed54F023c8b50/b4c0274c9273ed76.png"
          ></Image>
          <View className={cssModule.txt_wrap}>
            <Text className={cssModule.txt}>反馈</Text>
          </View>
          <Image
            className={cssModule.img1}
            src="//img20.360buyimg.com/ling/jfs/t1/177923/18/44491/2373/66432097Fa8df2732/8858f98b1e408126.png"
          ></Image>
          <Image
            className={cssModule.img2}
            src="//img11.360buyimg.com/ling/jfs/t1/125583/22/41237/5483/6643293dFad8800db/4e3d9eb00ff9cae3.png"
          ></Image>
          <View className={cssModule.main_img_wrap}>
            <Image
              className={cssModule.main_img}
              src="//img30.360buyimg.com/ling/jfs/t1/196189/7/45511/18772/6643293dFde86cc30/72d352fb56dd6b5a.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.txt1}`}>
              课程到手价
            </Text>
            <View className={cssModule.cnt_row1}>
              <Text className={`${cssModule.line1} ${cssModule.txt2}`}>
                直播价格¥
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.number}`}>
                49.90
              </Text>
              <Text className={cssModule.oriprice}>¥ 999.00</Text>
            </View>
          </View>
        </View>
        <View className={cssModule.color_view}></View>
        <View className={cssModule.wrapper}>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.view}></View>
            <View className={cssModule.cnt_row2}>
              <Image
                className={cssModule.icon3}
                src="//img30.360buyimg.com/ling/jfs/t1/165443/15/24645/365/66432941F7675b4f2/512768751399e65f.png"
              ></Image>
              <View className={cssModule.cnt_row3}>
                <Text className={cssModule.txt3}>阅读并同意</Text>
                <Text className={cssModule.txt4}>《文言言课程购买协议》</Text>
              </View>
            </View>
            <View className={cssModule.cnt_row4}>
              {/*商品价格*/}
              <View className={cssModule.price_wrap}>
                <Text className={cssModule.yuan}>¥</Text>
                <Text className={cssModule.price}>49.90</Text>
              </View>
              <Image
                className={cssModule.icon4}
                src="//img11.360buyimg.com/ling/jfs/t1/226707/19/17309/199/66432942F8bf16ade/03056926464eaf0b.png"
              ></Image>
            </View>
            <View className={cssModule.txt_wrap1}>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                立即抢购
              </Text>
            </View>
            <View className={cssModule.color_view1}></View>
          </View>
        </View>
        <View className={cssModule.cnt_col3}>
          <View className={cssModule.cnt_row5}>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
              2023暑假家长课堂提升数学思维
            </Text>
            <Image
              className={cssModule.icon5}
              src="//img11.360buyimg.com/ling/jfs/t1/134292/34/45038/559/66432942Fa5df47e6/44f0d987dea81ae3.png"
            ></Image>
          </View>
          <Image
            className={cssModule.icon6}
            src="//img11.360buyimg.com/ling/jfs/t1/244523/27/8928/2558/66432942Fc0bb2326/2deee5d125cffb2c.png"
          ></Image>
          <Image
            className={cssModule.icon7}
            src="//img10.360buyimg.com/ling/jfs/t1/239162/7/9364/2802/66432942F8bfd2a2e/3270b3e7d42e52e9.png"
          ></Image>
          <Image
            className={cssModule.icon8}
            src="//img13.360buyimg.com/ling/jfs/t1/204008/30/42311/2816/66432943Fd447cd48/e60eb922b354a051.png"
          ></Image>
          <View className={cssModule.cnt_row6}>
            <Image
              className={cssModule.img3}
              src="//img14.360buyimg.com/ling/jfs/t1/133985/13/42589/2594/66432943F62683b69/c4c5f1eb45278173.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
              273人报名
            </Text>
            <Image
              className={cssModule.img4}
              src="//img11.360buyimg.com/ling/jfs/t1/122316/39/43307/90/66432943Fe6334f11/ee6ba657fa902421.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
              2023-07-04 15:00-16:00
            </Text>
          </View>
          {/*以下是一个列表*/}
          <View className={cssModule.cnt_col_list}>
            {/*列表项*/}
            <View
              className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item}`}
            >
              <Image
                className={`${cssModule.icon9_common} ${cssModule.icon9}`}
                src="//img12.360buyimg.com/ling/jfs/t1/189799/3/45315/519/66432944F4cd41872/2ea57515e0c4739c.png"
              ></Image>
              <Text
                className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction}`}
              >
                课堂互动
              </Text>
              <Image
                className={cssModule.img5_common}
                src="//img10.360buyimg.com/ling/jfs/t1/238759/19/6993/466/66432944F566ff34a/6cf7c3531cffdc72.jpg"
              ></Image>
              <Image
                className={`${cssModule.icon9_common} ${cssModule.icon10}`}
                src="//img20.360buyimg.com/ling/jfs/t1/229012/12/18132/683/66432944F5a948a27/4b46d4595bcd6148.png"
              ></Image>
              <Text
                className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction1}`}
              >
                永久有效
              </Text>
              <Image
                className={cssModule.img5_common}
                src="//img10.360buyimg.com/ling/jfs/t1/238759/19/6993/466/66432944F566ff34a/6cf7c3531cffdc72.jpg"
              ></Image>
              <Image
                className={`${cssModule.icon9_common} ${cssModule.icon9}`}
                src="//img13.360buyimg.com/ling/jfs/t1/234894/37/17471/472/66432944Fe171b5ad/fc09ac6c6234fa81.png"
              ></Image>
              <Text
                className={`${cssModule.instruction_common} ${cssModule.instruction2}`}
              >
                系统学习
              </Text>
            </View>
            {/*列表项*/}
            <View
              className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item1}`}
            >
              <Image
                className={`${cssModule.icon9_common} ${cssModule.icon11}`}
                src="//img30.360buyimg.com/ling/jfs/t1/185815/34/47730/721/66432945Fe1958eb8/a8fdbf418ddc87f8.png"
              ></Image>
              <Text
                className={`${cssModule.instruction_common} ${cssModule.instruction3}`}
              >
                保障
              </Text>
              <Text
                className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.txt9}`}
              >
                消费者保障服务 · 版权保护 · 商家资质
              </Text>
              <Image
                className={cssModule.icon9_common}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            {/*列表项*/}
            <View className={cssModule.cnt_row_item_common}>
              <Image
                className={`${cssModule.icon9_common} ${cssModule.icon13}`}
                src="//img13.360buyimg.com/ling/jfs/t1/234894/37/17471/472/66432944Fe171b5ad/fc09ac6c6234fa81.png"
              ></Image>
              <Text
                className={`${cssModule.line1} ${cssModule.instruction_common} ${cssModule.instruction4}`}
              >
                课程目录
              </Text>
              <Image
                className={cssModule.icon9_common}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
          </View>
          <Image
            className={cssModule.main_img1}
            src="//img30.360buyimg.com/ling/jfs/t1/196189/7/45511/18772/6643293dFde86cc30/72d352fb56dd6b5a.png"
          ></Image>
          <Image
            className={cssModule.main_img2}
            src="//img30.360buyimg.com/ling/jfs/t1/196189/7/45511/18772/6643293dFde86cc30/72d352fb56dd6b5a.png"
          ></Image>
          <View className={cssModule.cnt_row7}>
            <Image
              className={cssModule.img6}
              src="//img13.360buyimg.com/ling/jfs/t1/227599/18/17973/13852/66432945F5d40e3cc/669299f702fd45ab.png"
            ></Image>
            <View className={cssModule.cnt_col4}>
              <View className={cssModule.cnt_row8}>
                <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                  非你莫数
                </Text>
                <View className={cssModule.cnt_row9}>
                  <Text className={`${cssModule.line1} ${cssModule.txt10}`}>
                    更多课程
                  </Text>
                  <Image
                    className={cssModule.icon14}
                    src="//img13.360buyimg.com/ling/jfs/t1/126448/39/45907/391/6643293fFd19d9d4e/7d4c4a3c86f2d43e.png"
                  ></Image>
                </View>
              </View>
              <Text className={`${cssModule.line1} ${cssModule.tit2}`}>
                专注于数学教学，家长课堂硕士学历 + 高数教资...
              </Text>
            </View>
          </View>
          <Image
            className={cssModule.img7}
            src="//img20.360buyimg.com/ling/jfs/t1/233595/39/15754/4204/66432940F65e40ebc/2db5be02edf92c75.png"
          ></Image>
          <View className={cssModule.cnt_row10}>
            <View className={cssModule.color_view2}></View>
            <Text className={`${cssModule.line1} ${cssModule.txt11}`}>
              课程介绍
            </Text>
          </View>
          <Image
            className={cssModule.bg}
            src="//img20.360buyimg.com/ling/jfs/t1/196001/9/46347/295084/6643293fF2d6f273b/91da0c36b939430b.jpg"
          ></Image>
          <View className={cssModule.cnt_row11}>
            <View className={cssModule.color_view2}></View>
            <Text className={`${cssModule.line1} ${cssModule.txt12}`}>
              课程评价
            </Text>
            <View className={cssModule.cnt_row12}>
              <Text className={`${cssModule.line1} ${cssModule.txt13}`}>
                查看全部
              </Text>
              <Image
                className={cssModule.icon15}
                src="//img13.360buyimg.com/ling/jfs/t1/126448/39/45907/391/6643293fFd19d9d4e/7d4c4a3c86f2d43e.png"
              ></Image>
            </View>
          </View>
          <View className={cssModule.cnt_row13}>
            <Image
              className={cssModule.icon16}
              src="//img13.360buyimg.com/ling/jfs/t1/162594/21/45983/5850/6643293fF24ae03f2/872d20cdb4960e87.png"
            ></Image>
            <View className={cssModule.cnt_col5}>
              <Text className={`${cssModule.line1} ${cssModule.tit3}`}>
                R***m
              </Text>
              <Image
                className={cssModule.img8}
                src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
              ></Image>
            </View>
          </View>
          <Text className={`${cssModule.line3} ${cssModule.tab_hd_txt}`}>
            师傅教的特别好，客服也很有耐心。由于个人原因，一共调整了预约的时间，客服都耐心服务了，点赞。
          </Text>
          <View className={cssModule.tab_active}></View>
          <View className={cssModule.cnt_row14}>
            <Image
              className={cssModule.icon16}
              src="//img20.360buyimg.com/ling/jfs/t1/98226/5/43103/4552/66432940Fb202032d/a7d3d9912df61011.png"
            ></Image>
            <View className={cssModule.cnt_col6}>
              <Text className={`${cssModule.line1} ${cssModule.tit4}`}>
                吴***雨
              </Text>
              <Image
                className={cssModule.img8}
                src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
              ></Image>
            </View>
          </View>
          <Text className={`${cssModule.line2} ${cssModule.txt14}`}>
            老师很温柔，第一次的体验比想象还要好，环境非常好，服务很周到，整体还是不错的！
          </Text>
          <View className={cssModule.cnt_row15}>
            <View className={cssModule.color_view2}></View>
            <Text className={`${cssModule.line1} ${cssModule.txt11}`}>
              课程须知
            </Text>
          </View>
          <View className={cssModule.cnt_row16}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction5}`}>
              购买课程后如何观看?
            </Text>
            <Image
              className={cssModule.icon18}
              src="//img14.360buyimg.com/ling/jfs/t1/217327/10/41219/276/66432940F94ec5a73/9afa440e1a2a0095.png"
            ></Image>
          </View>
          <View className={cssModule.section_wrap}>
            <Text className={`${cssModule.line2} ${cssModule.section}`}>
              手机端看课:搜索【文言言】进入小程序，点击底部【已购课程】按钮，即可观看购买课程。
            </Text>
          </View>
          <View className={cssModule.cnt_row17}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction5}`}>
              购买课程后能否退款?
            </Text>
            <Image
              className={cssModule.icon18}
              src="//img14.360buyimg.com/ling/jfs/t1/217327/10/41219/276/66432940F94ec5a73/9afa440e1a2a0095.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row18}>
            <Image
              className={cssModule.icon17}
              src="//img11.360buyimg.com/ling/jfs/t1/198285/30/45722/1188/66432940F1f48101b/07908a4ef56da1f9.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.instruction5}`}>
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

export default LessonDetail;
