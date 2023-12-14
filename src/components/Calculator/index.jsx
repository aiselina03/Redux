import { useDispatch, useSelector } from "react-redux";

export function Calculator() {
  const calculator = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [inputValue1, setInputValue1] = useState();
  const [inputValue2, setInputValue2] = useState();


  return (
    <div>
      <input type="text"  placeholder="Enter num 1" 
      value={inputValue1} onChange={(e) => setInputValue1(e.target.value)}/>
      <input type="text"   placeholder="Enter num 2" 
      value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/>
      <br/>
      <button onClick={()=>{dispatch(add)}}>add</button>
      <button onClick={()=>{dispatch(subsctract)}}>subsctract</button>
      <button onClick={()=>{dispatch(divide)}}>divide</button>
      <button onClick={()=>{dispatch(multiple)}}>multiple</button>
    </div>
  );
}
