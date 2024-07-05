import { Component, PropsWithChildren } from "react";
import { Provider } from "mobx-react";

import counterStore from "./store/counter";
import userStore from "./store/user";
import courseStore from "./store/course";

import "./app.less";

const store = {
  counterStore,
  userStore,
  courseStore,
};

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
