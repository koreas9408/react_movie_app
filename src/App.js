import React from "react";
import PropTypes from "prop-types";

// component는 재사용 가능한 HTML을 생성한다.
// props == properties. 컴포넌트에 데이터를 전달한다.
// JSX = JavaScript + XML ( HTML )
// prop의 이름과 인지값의 이름은 같아야한다.

class App extends React.Component {
  state = {
    // 내가 바꿀 데이터를 state에 넣는다.
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };
  // React는 state를 직접 접근하는 것을 허락하지 않는다 ( render 하지 않음 ! )
  // setState 메소드를 이용해서 state에 접근하면 React는 새로운 state 데이터를 가지고 새롭게 render 한다. ( 해당 변경된 부분만 ! awesome!)
  // 그리고 React는 현재 state에 접근하기 쉽게 current를 제공
  render() {
    return (
      <div>
        <h2>The number is : {this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
