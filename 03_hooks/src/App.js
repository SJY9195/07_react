import { useState } from "react";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import Test2 from "./01_useEffect/Question02";
import Profile from "./01_useEffect/Question03";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-controll";
import UseReducerCounter from "./02_useReducer/Question";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import ComplexCalculator from "./03_useMemo/02_complex-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-useMemo";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import Calculator from "./02_useReducer/Question02";
import SquareCalculator from "./03_useMemo/05_question1";
import ItemList from "./03_useMemo/06_question2";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import CallbackComponent from "./04_useCallback/03_components";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_useRef";
import LoginComponent from "./05_useRef/03_inputRef";
import Board from "./05_useRef/question";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";
import HooksProblem from "./07_custom-hooks/01_problem";
import CustomHooks from "./07_custom-hooks/02_custom-hooks";
import ProductFilter from "./03_useMemo/06_question2";



  // component는 무조건 대문자 시작이다! 소문자 시작이면 html인줄 안다!

function App() {
  const [message,setMessage] = useState("안녕하세요");

  return (
   <>
    {/*<UseEffectBasic message={message}/>*/}
    {/*<UseEffectMount/>*/}
    {/*<UseEffectUpdate/>*/}
    {/*<Container/>*/}
    {/*<Timer/>*/}
    {/*<Test2/>*/}
    {/*<Profile/>*/}
    {/*<UseReducerBasic/>*/}
    {/*<ReducerFormControl/>*/}
    {/*<Input/>*/}
    {/*<UseReducerCounter/>*/}
    {/*<HardCalculator/>*/}
    {/*<ComplexCalculator/>*/}
    {/*<UseMemoComponent/>*/}
    {/*<LocationComponent/>*/}
    {/*<Calculator/>*/}
    {/*<SquareCalculator/>*/}
    {/* {<ProductFilter/>} */}
    {/*<CallBackProblem/>*/}
    {/*<FunctionMemoization/>*/}
    {/*<CallbackComponent/>*/}
    {/*<CounterRef/>*/}
    {/*<UseRefCounter/>*/}
    {/*<LoginComponent/>*/}
    {<Board/>}
    {/*<Page/>*/}
    {/*<ContextContainer/>*/}
    {/* {<HooksProblem/>} */}
    {/* <CustomHooks/> */}
   </>
  );
}

export default App;
