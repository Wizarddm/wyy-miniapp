import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import cssModule from "./index.module.less";

class Mod extends React.Component {
  render() {
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
              src="//img30.360buyimg.com/ling/jfs/t1/240111/22/7468/4730/663ae598F5457ab04/a73f6ee3b153fea7.png"
            ></Image>
            <View className={cssModule.cnt_row2}>
              <Image
                className={cssModule.icon3}
                src="//img11.360buyimg.com/ling/jfs/t1/183635/5/44458/531/663ae598F427fb86f/531e700db0f1e0ce.png"
              ></Image>
              <Text className={`${cssModule.line1} ${cssModule.section}`}>
                大家都在搜：剪辑
              </Text>
            </View>
            <View className={cssModule.txt_wrap}>
              <Text className={cssModule.txt2}>反馈</Text>
            </View>
            <Image
              className={cssModule.img1}
              src="//img12.360buyimg.com/ling/jfs/t1/204261/10/40556/1883/6642b361F48ab86b7/e2d2e44f4513e610.png"
            ></Image>
          </View>
          <Image
            className={cssModule.banner}
            src="//img11.360buyimg.com/ling/jfs/t1/228127/3/17996/5099/663ae58dF26e161ad/c0f5043c80fb9558.png"
          ></Image>
          <View className={cssModule.cnt_row3}>
            <Image
              className={cssModule.img2}
              src="//img13.360buyimg.com/ling/jfs/t1/223648/5/42571/2565/663ae58dFaf0f2204/2ceda24393e2da14.jpg"
            ></Image>
            <Image
              className={cssModule.img3}
              src="//img11.360buyimg.com/ling/jfs/t1/165083/11/37785/1912/663ae58eF2282cb4b/e61a0e4b267194f1.jpg"
            ></Image>
            <Image
              className={cssModule.img4}
              src="//img14.360buyimg.com/ling/jfs/t1/188798/24/44553/2265/663ae58fF39ec716f/c7dd33102723704e.jpg"
            ></Image>
            <Image
              className={cssModule.img3}
              src="//img10.360buyimg.com/ling/jfs/t1/245404/6/8593/747/6642b360F1977bcc0/9ae63ab0e6cc149a.jpg"
            ></Image>
            <Image
              className={cssModule.img4}
              src="//img20.360buyimg.com/ling/jfs/t1/244614/30/8970/801/6642b360Fe83e6346/482ec67de6cb1826.jpg"
            ></Image>
          </View>
          <View className={cssModule.cnt_row4}>
            <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
              游戏娱乐
            </Text>
            <Text className={cssModule.txt4}>舞蹈健身</Text>
            <Text className={cssModule.txt5}>亲子教育</Text>
            <Text className={cssModule.txt4}>心理健康</Text>
            <Text className={cssModule.txt5}>职场办公</Text>
          </View>
          <View className={cssModule.cnt_row5}>
            <Image
              className={cssModule.img2}
              src="//img13.360buyimg.com/ling/jfs/t1/193282/33/45597/1630/6642b35fF7333150e/9a05ac2bc8f55c09.jpg"
            ></Image>
            <Image
              className={cssModule.img3}
              src="//img10.360buyimg.com/ling/jfs/t1/131754/13/42714/1686/6642b35fFf850cbec/9109e0eb44f588ad.jpg"
            ></Image>
            <Image
              className={cssModule.img4}
              src="//img11.360buyimg.com/ling/jfs/t1/229946/3/16919/2621/663ae590Ffa205ae4/0605c442e468aeb8.jpg"
            ></Image>
            <Image
              className={cssModule.img3}
              src="//img11.360buyimg.com/ling/jfs/t1/243148/9/4136/1456/6642b360F992107bd/0543bb14837aaab6.jpg"
            ></Image>
            <Image
              className={cssModule.img4}
              src="//img12.360buyimg.com/ling/jfs/t1/186666/38/45744/2189/663ae590Fd10de3e8/2b0d92e80a431cb1.jpg"
            ></Image>
          </View>
          <View className={cssModule.cnt_row6}>
            <Text className={`${cssModule.line1} ${cssModule.txt3}`}>
              休闲生活
            </Text>
            <Text className={cssModule.txt4}>个人提升</Text>
            <Text className={`${cssModule.line1} ${cssModule.txt6}`}>音乐</Text>
            <Text className={cssModule.txt7}>资格考试</Text>
            <Text className={cssModule.txt8}>更多</Text>
          </View>
          <View className={cssModule.cnt_col1}>
            <View className={cssModule.cnt_row7}>
              <View className={cssModule.color_view}></View>
              <Text className={`${cssModule.line1} ${cssModule.txt9}`}>
                热门试听
              </Text>
              <View className={cssModule.cnt_row8}>
                <Image
                  className={cssModule.icon4}
                  src="//img11.360buyimg.com/ling/jfs/t1/158171/23/45344/844/663ae594F105341da/c431d827d8d2bcec.png"
                ></Image>
                <Text className={`${cssModule.line1} ${cssModule.section1}`}>
                  换一换
                </Text>
              </View>
            </View>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_col_list}>
              {/*列表项*/}
              {[0, 1].map((item, index) => (
                <View
                  className={`${cssModule.cnt_row_item_common} ${cssModule.cnt_row_item}`}
                  key={index}
                >
                  <Image
                    className={cssModule.main_img_common}
                    src="//img11.360buyimg.com/ling/jfs/t1/191658/30/44253/83738/663aee50Fe717e80c/1df0398e3dda36e5.png"
                  ></Image>
                  <View className={cssModule.cnt_col2_common}>
                    <View className={cssModule.cnt_row9_common}>
                      <Image
                        className={cssModule.img5_common}
                        src="//img14.360buyimg.com/ling/jfs/t1/249736/16/8513/3679/663ae594F1ececf2e/ad7bbc201dce7296.png"
                      ></Image>
                      <View className={cssModule.cnt_row10_common}>
                        <Text className={cssModule.txt10_common}>
                          女装下装六面
                        </Text>
                        <Text className={cssModule.txt10_common}>原</Text>
                        <Text
                          className={`${cssModule.txt10_common} ${cssModule.txt11}`}
                        >
                          型
                        </Text>
                      </View>
                    </View>
                    <View className={cssModule.cnt_row11}>
                      <Text className={cssModule.tit_common}>型</Text>
                      <Text className={cssModule.tit_common}>结构详解</Text>
                    </View>
                    <View
                      className={`${cssModule.cnt_row12_common} ${cssModule.cnt_row12}`}
                    >
                      <Text
                        className={`${cssModule.line1} ${cssModule.txt12_common}`}
                      >
                        273人已学习
                      </Text>
                      <Image
                        className={cssModule.icon5}
                        src="//img10.360buyimg.com/ling/jfs/t1/174491/15/45548/2453/663ae594F85c6338b/c351e2b85e7ccc46.png"
                      ></Image>
                    </View>
                  </View>
                  <Image
                    className={cssModule.icon6}
                    src="//img20.360buyimg.com/ling/jfs/t1/239422/22/8897/4769/6642bb11Ff9d416b3/5ba895d9befc3cbd.png"
                  ></Image>
                  <Image
                    className={cssModule.icon7}
                    src="//img10.360buyimg.com/ling/jfs/t1/133359/12/45568/5483/663ae595F778180f2/19c24e201f1ff904.png"
                  ></Image>
                  <Image
                    className={cssModule.icon8}
                    src="//img30.360buyimg.com/ling/jfs/t1/176006/23/42018/5565/6642bb11F066ca0c9/9758d63cfc792652.png"
                  ></Image>
                  <Image
                    className={cssModule.icon9}
                    src="//img12.360buyimg.com/ling/jfs/t1/187280/1/44961/5764/6642bb12F92103893/c41b49ab709ae799.png"
                  ></Image>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_col3}>
          <Image
            className={cssModule.main_img1}
            src="//img30.360buyimg.com/ling/jfs/t1/217969/22/39516/53580/663ae590Fbefc0381/f2c553e46dfbdb34.png"
          ></Image>
          <Image
            className={cssModule.main_img2}
            src="//img13.360buyimg.com/ling/jfs/t1/233497/32/16553/3580/663ae591F4032d35f/d703326dc367f8d1.png"
          ></Image>
          <View className={cssModule.cnt_row14}>
            <Image
              className={cssModule.img6}
              src="//img30.360buyimg.com/ling/jfs/t1/218540/7/38863/2911/663ae593Fbb77dc9d/54995a9db15ef52f.png"
            ></Image>
            <View className={cssModule.section_wrap}>
              <Text className={cssModule.section2}>12</Text>
            </View>
            <Image
              className={cssModule.img7}
              src="//img30.360buyimg.com/ling/jfs/t1/248614/19/8592/254/663ae593F801f3507/72bf93d815a50d52.png"
            ></Image>
            <View className={cssModule.section_wrap1}>
              <Text className={cssModule.section2}>12</Text>
            </View>
            <Image
              className={cssModule.img7}
              src="//img30.360buyimg.com/ling/jfs/t1/248614/19/8592/254/663ae593F801f3507/72bf93d815a50d52.png"
            ></Image>
            <View className={cssModule.section_wrap1}>
              <Text className={cssModule.section3}>12</Text>
            </View>
            <Text className={`${cssModule.line1} ${cssModule.txt13}`}>
              查看更多
            </Text>
            <Image
              className={cssModule.icon14}
              src="//img11.360buyimg.com/ling/jfs/t1/150995/16/25144/682/663ae592Fd2c92269/a6e4b9ddb0b48362.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row15}>
            <Image
              className={cssModule.img8}
              src="//img30.360buyimg.com/ling/jfs/t1/193116/30/45050/16630/6642bb11Fbd159d14/d5df24f245d63855.png"
            ></Image>
            <Text className={`${cssModule.line1} ${cssModule.subtit}`}>
              273人已抢购
            </Text>
          </View>
          <View className={cssModule.wrapper}>
            {/*以下是一个列表*/}
            <View className={cssModule.cnt_row_list}>
              {/*列表项*/}
              {[0, 1, 2].map((item, index) => (
                <View
                  className={`${cssModule.cnt_col_item_common} ${cssModule.cnt_col_item}`}
                  key={index}
                >
                  <Image
                    className={cssModule.main_img3_common}
                    src="//img14.360buyimg.com/ling/jfs/t1/223440/17/32792/93008/6642bb10F8ada9fff/242f16cd09f923d6.png"
                  ></Image>
                  <Text
                    className={`${cssModule.line2} ${cssModule.tit2_common}`}
                  >
                    女装下装六面原型结构详解
                  </Text>
                  <View className={cssModule.cnt_row16_common}>
                    <View
                      className={`${cssModule.price_wrap_common} ${cssModule.price_wrap}`}
                    >
                      {/*商品价格*/}
                      <View
                        className={`${cssModule.price_wrap1_common} ${cssModule.price_wrap1}`}
                      >
                        <Text className={cssModule.yuan_common}>¥</Text>
                        <Text
                          className={`${cssModule.price_common} ${cssModule.price}`}
                        >
                          49.90
                        </Text>
                      </View>
                      <Text
                        className={`${cssModule.line1} ${cssModule.price1_common} ${cssModule.price1}`}
                      >
                        ¥ 499.00
                      </Text>
                    </View>
                    <Image
                      className={cssModule.img9_common}
                      src="//img20.360buyimg.com/ling/jfs/t1/184968/40/45506/9393/663ae591F76c17add/91852cd687fa9149.png"
                    ></Image>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View className={cssModule.cnt_col4}>
          <View className={cssModule.cnt_row17}>
            <View className={cssModule.color_view1}></View>
            <Text className={`${cssModule.line1} ${cssModule.txt14}`}>
              优质好课
            </Text>
          </View>
          <View className={cssModule.wrapper1}>
            <View className={cssModule.cnt_col5}>
              <View className={cssModule.cnt_row18}>
                <Image
                  className={cssModule.img5}
                  src="//img14.360buyimg.com/ling/jfs/t1/249736/16/8513/3679/663ae594F1ececf2e/ad7bbc201dce7296.png"
                ></Image>
                <View className={cssModule.cnt_row19}>
                  <Text className={cssModule.txt15}>女装下装六面</Text>
                  <Text className={cssModule.txt10}>原</Text>
                  <Text className={cssModule.txt10}>型</Text>
                  <Text className={cssModule.txt11}>结构详解</Text>
                  <Text className={cssModule.txt10}>详解</Text>
                  <Text className={cssModule.txt10}>解</Text>
                  <Text className={cssModule.txt16}>...</Text>
                </View>
              </View>
              <View className={cssModule.cnt_row20}>
                <Image
                  className={cssModule.img10}
                  src="//img13.360buyimg.com/ling/jfs/t1/245402/1/8660/8055/6642bb12F0684aaaa/98ac361ea3c68a92.png"
                ></Image>
                <Text className={`${cssModule.line1} ${cssModule.instruction}`}>
                  273人已学习
                </Text>
              </View>
            </View>
          </View>
          {/*以下是一个列表*/}
          <View className={cssModule.cnt_col_list1}>
            {/*列表项*/}
            {[0, 1].map((item, index) => (
              <View
                className={`${cssModule.cnt_row_item2_common} ${cssModule.cnt_row_item2}`}
                key={index}
              >
                <View className={cssModule.wrapper2_common}>
                  <View
                    className={`${cssModule.section_wrap2_common} ${cssModule.section_wrap2}`}
                  >
                    <Text
                      className={`${cssModule.section4_common} ${cssModule.section4}`}
                    >
                      专栏
                    </Text>
                  </View>
                </View>
                <View className={cssModule.cnt_col6_common}>
                  <Text
                    className={`${cssModule.line2} ${cssModule.txt17_common}`}
                  >
                    洗衣洗鞋营销集训营洗衣洗鞋营销集训营
                  </Text>
                  <View className={cssModule.cnt_row21_common}>
                    {/*商品价格*/}
                    <View className={cssModule.price_wrap4_common}>
                      <Text className={cssModule.yuan_common}>¥</Text>
                      <Text className={cssModule.price_common}>49.90</Text>
                    </View>
                    <Text className={cssModule.txt18}>起</Text>
                    <Text className={cssModule.price4}>¥ 999.00</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className={cssModule.cnt_col8}>
          <View className={cssModule.view}></View>
          <Image
            className={cssModule.img11}
            src="//img14.360buyimg.com/ling/jfs/t1/131928/7/44836/1733/663ae598F86d3b427/1bc5deea2856dab7.png"
          ></Image>
          <View className={cssModule.cnt_row22}>
            <Image
              className={cssModule.img}
              src="//img12.360buyimg.com/ling/jfs/t1/227750/14/17403/1649/663ae599F948e4aff/aa8155f1c4153fa4.png"
            ></Image>
            <Image
              className={cssModule.img}
              src="//img30.360buyimg.com/ling/jfs/t1/175288/21/40525/2126/663ae599F348593af/ac6054954e4d3a09.png"
            ></Image>
          </View>
          <View className={cssModule.cnt_row23}>
            <Text className={`${cssModule.line1} ${cssModule.txt20}`}>
              首页
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt21}`}>
              已购课程
            </Text>
            <Text className={`${cssModule.line1} ${cssModule.txt22}`}>
              个人中心
            </Text>
          </View>
          <View className={cssModule.color_view2}></View>
        </View>
      </View>
    );
  }
}
export default Mod;
