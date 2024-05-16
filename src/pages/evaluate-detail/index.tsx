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

interface EvaluateDetail {
  props: PageStateProps;
}

@inject("store")
@observer
class EvaluateDetail extends Component<PropsWithChildren> {
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
              src="//img20.360buyimg.com/ling/jfs/t1/237121/11/16314/2610/66457410Ffe9f9e81/dcfd8f357995092d.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.tit}`}>
              2023暑假家长课...
            </Text>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt2}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img13.360buyimg.com/ling/jfs/t1/185023/18/45225/2911/66457410F2dde8a8b/c1ceb17b030d2e22.png"
            ></Image>
          </View>
        </View>
        <Image
          className={cssModule.main_img}
          src="//img30.360buyimg.com/ling/jfs/t1/196189/7/45511/18772/6643293dFde86cc30/72d352fb56dd6b5a.png"
        ></Image>
        <View className={cssModule.cnt_row2}>
          <View className={cssModule.color_view}></View>
          <Text className={`${cssModule.line1} ${cssModule.tit1}`}>
            课程评价
          </Text>
          <View className={cssModule.cnt_row3}>
            <Text className={cssModule.txt3}>(</Text>
            <Text className={cssModule.txt4}>8)</Text>
          </View>
          <Text className={cssModule.txt5}>好评度</Text>
          <Text className={cssModule.txt6}>100%</Text>
        </View>
        <View className={cssModule.cnt_row4}>
          <Image
            className={cssModule.icon3}
            src="//img13.360buyimg.com/ling/jfs/t1/162594/21/45983/5850/6643293fF24ae03f2/872d20cdb4960e87.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.tit2}`}>
              R***m
            </Text>
            <Image
              className={cssModule.img2}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line3} ${cssModule.tab_hd_txt}`}>
          师傅教的特别好，客服也很有耐心。由于个人原因，一共调整了预约的时间，客服都耐心服务了，点赞。
        </Text>
        <View className={cssModule.tab_active}></View>
        <View className={cssModule.cnt_row5}>
          <Image
            className={cssModule.icon3}
            src="//img20.360buyimg.com/ling/jfs/t1/98226/5/43103/4552/66432940Fb202032d/a7d3d9912df61011.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.tit2}`}>
              吴***雨
            </Text>
            <Image
              className={cssModule.img2}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line2} ${cssModule.tab_hd_txt1}`}>
          老师很温柔，第一次的体验比想象还要好，环境非常好，服务很周到，整体还是不错的！
        </Text>
        <View className={cssModule.tab_active1}></View>
        <View className={cssModule.cnt_row6}>
          <Image
            className={cssModule.icon3}
            src="//img12.360buyimg.com/ling/jfs/t1/167189/1/45758/5641/66457410F472bed00/477decfc2df25986.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row7}>
              <Text className={cssModule.tit3}>李</Text>
              <Text className={cssModule.tit4}>***</Text>
              <Text className={cssModule.tit3}>文</Text>
            </View>
            <Image
              className={cssModule.img3}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line1} ${cssModule.tab_hd_txt2}`}>
          服务人员很热情，服务态度很好，非常赞！
        </Text>
        <View className={cssModule.tab_active1}></View>
        <View className={cssModule.cnt_row6}>
          <Image
            className={cssModule.icon3}
            src="//img10.360buyimg.com/ling/jfs/t1/220032/11/41342/5973/66457411F147758be/2d76203a519fd2a9.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row7}>
              <Text className={cssModule.tit3}>尹</Text>
              <Text className={cssModule.tit4}>***</Text>
              <Text className={cssModule.tit3}>芮</Text>
            </View>
            <Image
              className={cssModule.img3}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line2} ${cssModule.tab_hd_txt3}`}>
          这家店是我去过最好的店！服务态度真的是一流！支持店家，满分好评！
        </Text>
        <View className={cssModule.tab_active}></View>
        <View className={cssModule.cnt_row6}>
          <Image
            className={cssModule.icon3}
            src="//img20.360buyimg.com/ling/jfs/t1/178329/17/46571/4122/66457411F87572ce0/daa25763feafa290.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row7}>
              <Text className={cssModule.tit3}>赵</Text>
              <Text className={cssModule.tit4}>***</Text>
              <Text className={cssModule.tit3}>鑫</Text>
            </View>
            <Image
              className={cssModule.img3}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line3} ${cssModule.tab_hd_txt}`}>
          一般很少评价，但是这个一定要强烈好评，好的东西要给大家分享一下下。老师的教学态度非常好，很有耐心。
        </Text>
        <View className={cssModule.tab_active}></View>
        <View className={cssModule.cnt_row6}>
          <Image
            className={cssModule.icon3}
            src="//img30.360buyimg.com/ling/jfs/t1/191234/13/45967/5466/66457411F0228feb3/9e4723bcb96fdd03.png"
          ></Image>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row7}>
              <Text className={cssModule.tit3}>王</Text>
              <Text className={cssModule.tit4}>***</Text>
              <Text className={cssModule.tit3}>芳</Text>
            </View>
            <Image
              className={cssModule.img3}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <Text className={`${cssModule.line2} ${cssModule.tab_hd_txt1}`}>
          老师热情且不失礼貌，让人觉得很亲切舒服。也会对我的问题做很详细的解答，一次很好的体验。
        </Text>
        <View className={cssModule.tab_active1}></View>
        <View className={cssModule.cnt_row5}>
          <Image
            className={cssModule.icon3}
            src="//img11.360buyimg.com/ling/jfs/t1/224965/4/17144/5171/66457412Fe4d8126e/4571ed3f62036fd8.png"
          ></Image>
          <View className={cssModule.cnt_col1}>
            <Text className={`${cssModule.line1} ${cssModule.tit2}`}>
              周***海
            </Text>
            <Image
              className={cssModule.img2}
              src="//img12.360buyimg.com/ling/jfs/t1/176522/40/46161/2670/6643293fFf8ed38a4/ecec311dc2cc6145.png"
            ></Image>
          </View>
        </View>
        <View className={cssModule.color_view1}></View>
        <Text className={`${cssModule.line2} ${cssModule.txt7}`}>
          老师热情且不失礼貌，让人觉得很亲切舒服。也会对我的问题做很详细的解答，一次很好的体验。
        </Text>
      </View>
    );
  }
}

export default EvaluateDetail;
