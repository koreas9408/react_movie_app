import React from "react";

// component는 재사용 가능한 HTML을 생성한다.
// props == properties. 컴포넌트에 데이터를 전달한다.
// JSX = JavaScript + XML ( HTML )
// prop의 이름과 인지값의 이름은 같아야한다.

function Movie({ name }) {
  return (
    <div>
      <h2>I like {name}</h2>
    </div>
  );
}

const movieLike = [
  {
    name: "Hello"
  },
  {
    name: "JSX"
  },
  {
    name: "React"
  }
];

function App() {
  return (
    <div>
      {movieLike.map(item => (
        <Movie name={item.name} />
      ))}
      {/* <Movie fav="react" />
      <Movie fav="JSX" /> */}
      {/* 주석 신기하네 .. 데이터는 다른 서버에서 받아오기 때문에 수동으로 컴포넌트를 생성하는것은 좋지 않다. */}
    </div>
  );
}

export default App;
