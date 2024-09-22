import { useSelector, useDispatch } from "react-redux";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
// eslint-disable-next-line no-unused-vars
import { increment, initial, pushNewCount } from "../../store/counterSlice";
function Inc() {
  const dispatch = useDispatch();
  let count = useSelector((store) => store.counter.count);
  const setCount = () => {
    dispatch(increment());
    dispatch(pushNewCount(count + 1));
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
        <p>Click on Count to Increase Count</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default Inc;
