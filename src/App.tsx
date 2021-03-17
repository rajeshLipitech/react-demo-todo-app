import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Form";
import { FormUc } from "./Form-uc";
import Sample from "./Sample";

// const name = (name: string) => {
//   return "heellow " + name;
// };
interface appProo {
  name: string;
  lastName?: string;
  calculateAge?: any;
}

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  // const [count1, setCount1] = useState<number>(1);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = (op: string) => {
    if (op === "add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return <Button handleClick={handleClick} count={count} />;
};

const Button: React.FC<{ handleClick: any; count: number }> = ({
  handleClick,
  count,
}) => {
  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => handleClick("add")}>INcrease Click Me</button>
      <button onClick={() => handleClick("sub")}>Decrease Click Me</button>
    </>
  );
};

function App({ name, calculateAge }: appProo) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form sbumited");
  };
  return (
    // <div className="App">
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome {name}
        <button onClick={(e) => calculateAge(25)}>click me </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    // <>
    //   <Form handleSubmit={handleSubmit} />
    //   <FormUc />
    // </>
    // </div>
    // <Sample />
    <Count />
  );
}

export default App;
