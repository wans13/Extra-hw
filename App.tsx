import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  function turnRed() {
    setColor("red");
  }
  function turnBlue() {
    setColor("blue");
  }
  function turnGreen() {
    setColor("green");
  }
  return (
    <div>
      <Button text="Red" onClick={turnRed} />
      <Button text="Blue" onClick={turnBlue} />
      <Button text="Green" onClick={turnGreen} />
      <Display color={color} />
    </div>
  );
}
interface ButtonProps {
  text: string;
  onClick: () => void;
}
function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
interface DisplayProps {
  color: string;
}
function Display(props: DisplayProps) {
  return <div id="display_area" style={{ backgroundColor: props.color }}></div>;
}
export default App;
