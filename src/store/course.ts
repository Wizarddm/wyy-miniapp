import { observable } from "mobx";
import { post } from "utils/request";
import userStore from "./user";

const courseStore = observable({
  list: [],

  async fetchList() {
    const res = await post("/api/course.course/list", {
      token: userStore.token,
      app_id: userStore.app_id,
    });
    if (res.data.code == 1) {
      this.list = res.data.data;

      return;
    }
  },

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

export default courseStore;
