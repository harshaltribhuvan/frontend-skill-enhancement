import Button from "./components/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button
        text="Purple button"
        bgColor="purple"
        msg="Purple button got clicked"
      />
      <Button
        text="Orange button"
        bgColor="orange"
        msg="Orange button got clicked"
      />
      <Button text="Blue button" bgColor="blue" msg="Blue button got clicked" />
      <Button text="Red button" bgColor="red" msg="Red button got clicked" />
    </div>
  );
}
