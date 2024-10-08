import { useSelector, useDispatch } from "react-redux";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { pushNewCount, decrement } from "../../store/counterSlice";
function Dec() {
  const dispatch = useDispatch();
  let count = useSelector((store) => store.counter.count);
  const setCount = () => {
    dispatch(decrement());
    dispatch(pushNewCount(count - 1));
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
        <p>Click to Decrease the count</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default Dec;
