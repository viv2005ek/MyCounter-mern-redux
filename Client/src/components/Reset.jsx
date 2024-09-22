import { useSelector, useDispatch } from "react-redux";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { pushNewCount, reset } from "../../store/counterSlice";
function Reset() {
  const dispatch = useDispatch();
  let count = useSelector((store) => store.counter.count);
  const setCount = () => {
    dispatch(reset());
    dispatch(pushNewCount(0));
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount()}>count is {count}</button>
        <p>Click to Reset the count</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default Reset;
