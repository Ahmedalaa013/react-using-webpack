import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <h1>Hello </h1>
      <h2>Welcome to your First React App..!</h2>
      <h3>
        This following content is provided dynamically through the props system
      </h3>
      <Header content="Hi this is Ahmed" />
      <Header content="Hello this is Kareem" />
      <Header content="Hi this is Amr" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
