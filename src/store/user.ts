import { observable } from "mobx";

const userStore = observable({
  token: "722e060d647abeaec6e5f78f6b1654f6",
  app_id: 10001,

  // counterStore() {
  //   this.counter++
  // },
  // increment() {
  //   this.counter++
  // },
  // decrement() {
  //   this.counter--
  // },
  // incrementAsync() {
  //   setTimeout(() => {
  //     this.counter++
  //   }, 1000)
  // }
});

export default userStore;
