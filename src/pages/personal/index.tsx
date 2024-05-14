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

interface Personal {
  props: PageStateProps;
}

@inject("store")
@observer
class Personal extends Component<PropsWithChildren> {
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
              src="//img14.360buyimg.com/ling/jfs/t1/242594/17/8582/745/663ae597F94410d3c/e39a1e7f76e20095.png"
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
          <View className={cssModule.cnt_row1}>
            <Image
              className={cssModule.img}
              src="//img12.360buyimg.com/ling/jfs/t1/188126/13/45190/4728/66432098Fbf480e58/b3825d55bd5a4c5b.png"
            ></Image>
            <View className={cssModule.cnt_row2}>
              <Text className={cssModule.tit}>反馈</Text>
              <View className={cssModule.txt_wrap}>
                <Text className={cssModule.txt2}>反馈</Text>
              </View>
            </View>
            <Image
              className={cssModule.img1}
              src="//img10.360buyimg.com/ling/jfs/t1/176236/9/40655/2403/6643209aF6e1fcf00/0acf266fb223952a.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row3}>
            <Image
              className={cssModule.main_img}
              src="//img12.360buyimg.com/ling/jfs/t1/209786/18/41540/5672/66432098Fb67b9495/b1a10f2e44ea6605.png"
            ></Image>
            <View className={cssModule.cnt_col1}>
              <Text className={`${cssModule.line1} ${cssModule.tit1}`}>
                用户2410878172827
              </Text>
              <View className={cssModule.txt_wrap1}>
                <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
                  156****6666
                </Text>
              </View>
            </View>
          </View>
          <View className={cssModule.cnt_col2}>
            <View className={cssModule.cnt_row4}>
              <Image
                className={cssModule.img}
                src="//img10.360buyimg.com/ling/jfs/t1/168519/27/46261/527/6643209aFa65b8d4f/6f37d608374ee417.png"
              ></Image>
              <Image
                className={cssModule.img2}
                src="//img10.360buyimg.com/ling/jfs/t1/168519/27/46261/527/6643209aFa65b8d4f/6f37d608374ee417.png"
              ></Image>
              <Image
                className={cssModule.img2}
                src="//img10.360buyimg.com/ling/jfs/t1/168519/27/46261/527/6643209aFa65b8d4f/6f37d608374ee417.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row5}>
              <Text className={`${cssModule.line1} ${cssModule.txt4}`}>
                订单
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                浏览记录
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt5}`}>
                消息
              </Text>
            </View>
          </View>
          <View className={cssModule.cnt_col3}>
            <View className={cssModule.cnt_row6}>
              <Image
                className={cssModule.icon3}
                src="//img30.360buyimg.com/ling/jfs/t1/99001/38/25346/756/66432099F89a7a82f/0cd9e581af8d34b7.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                我的收货地址
              </Text>
              <Image
                className={cssModule.icon4}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row7}>
              <Image
                className={cssModule.icon3}
                src="//img10.360buyimg.com/ling/jfs/t1/229951/25/16976/618/66432099F56686d86/db9b815dc5e33629.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                拼团
              </Text>
              <Image
                className={cssModule.icon5}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row8}>
              <Image
                className={cssModule.icon6}
                src="//img12.360buyimg.com/ling/jfs/t1/248389/19/9081/155/66432099F83db9f9b/724df69733859b95.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt7}`}>
                优惠券
              </Text>
              <Image
                className={cssModule.icon7}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row9}>
              <Image
                className={cssModule.icon3}
                src="//img12.360buyimg.com/ling/jfs/t1/175259/32/45439/678/66432099Fbc753614/fdb6e5cc2dd92a03.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                秒杀
              </Text>
              <Image
                className={cssModule.icon5}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row9}>
              <Image
                className={cssModule.icon3}
                src="//img13.360buyimg.com/ling/jfs/t1/109214/6/45130/607/6643209aF1e1b30fa/c801c4453ed9d49a.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                关于文言言
              </Text>
              <Image
                className={cssModule.icon8}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row10}>
              <Image
                className={cssModule.icon3}
                src="//img13.360buyimg.com/ling/jfs/t1/208130/20/33874/394/6643209aF09d908fc/601cd25893ad60e7.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.txt6}`}>
                咨询反馈
              </Text>
              <Image
                className={cssModule.icon9}
                src="//img20.360buyimg.com/ling/jfs/t1/235829/30/15490/327/66432098F90385910/468b124889999d1d.png"
              ></Image>
            </View>
          </View>
          <View className={cssModule.cnt_col4}>
            <View className={cssModule.view}></View>
            <Image
              className={cssModule.img3}
              src="//img20.360buyimg.com/ling/jfs/t1/247568/6/9049/1923/66431cceFcc9bdc2f/42c3c58cedadc884.png"
            ></Image>
            <View className={cssModule.cnt_row11}>
              <Image
                className={cssModule.img}
                src="//img12.360buyimg.com/ling/jfs/t1/227750/14/17403/1649/663ae599F948e4aff/aa8155f1c4153fa4.png"
              ></Image>
              <Image
                className={cssModule.img}
                src="//img20.360buyimg.com/ling/jfs/t1/108959/14/46368/1812/66432098Fd843da4a/e05413090944fc93.png"
              ></Image>
            </View>
            <View className={cssModule.cnt_row12}>
              <Text className={`${cssModule.line1} ${cssModule.txt8}`}>
                首页
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
                已购课程
              </Text>
              <Text className={`${cssModule.line1} ${cssModule.txt10}`}>
                个人中心
              </Text>
            </View>
            <View className={cssModule.color_view}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default Personal;
