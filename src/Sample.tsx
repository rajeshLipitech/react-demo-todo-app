import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Form";
import { FormUc } from "./Form-uc";

// const name = (name: string) => {
//   return "heellow " + name;
// };
interface appProo {
  isShow: boolean;
}

const Sample: any = () => {
  const numbers = [1, 2, 3, 4, 5];
  return numbers.map((numb: number, index: number) => (
    <li key={`list-${index}`}>{numb}</li>
  ));
};

export default Sample;
