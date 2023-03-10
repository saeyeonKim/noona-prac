import React, { Component } from "react";
import BoxClass from "../../component/box/BoxClass";

// 클래스 컴포넌트 lifecycle : 상태에 따라 실행이 가능한 함수들 - constructor, componentDidMount, componentDidMount, componentDidUpdate, render
export default class AppClass extends Component {
  constructor(props) {
    // constructor : 생성자 - 클래스를 생성할 때 쓰이는 함수
    // constructor : state 만듬
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor");
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log("increase function", this.state);
  };

  componentDidMount() {
    // componentDidMount : api 콜, render 끝나고 호출됨.
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // 종료할 때 실행됨
    console.log("componentDidUpdate", this.state);
  }

  render() {
    // render : UI,UX 만듬
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
