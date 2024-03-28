import React, { useEffect, useState } from 'react'


let apiCallCount = 0;
let inputTrigger = 0;

const DebounceFun = () => {

//   const [apiCallCount, setApiCallCount] = useState(0);
//   const [inputTrigger, setInputTrigger] = useState(0);
//   const [inputValue, setInputValue] = useState('');
const [flag, setFlag] = useState(true)

  const myDebounce = (callBack, delay) => {
    let timer;
    return () => {
        inputTrigger++;
        console.log("onChange triggered", inputTrigger);
        // setInputTrigger(inputTrigger => inputTrigger + 1);
        clearTimeout(timer);
        timer = setTimeout(() => {
            callBack();
        }, delay);
    }
  }

  const handleChange = myDebounce((e) => {
    
    apiCallCount++;
    console.log("call to api ", apiCallCount);
    // setApiCallCount(apiCallCount => apiCallCount + 1);
    console.log(e)
  }, 200);

// useEffect(() => {
//     let timer = setTimeout(() => {
//         console.log("call api");
//     }, 2000);
//     return () => clearTimeout(timer);
// }, [inputValue]);

  return (
    <div>
      <div className='w-4 font-bold h-12'>Debounce Feature</div>
      <input className='font-black border border-cyan-400' type='text' onChange={(e) => handleChange(e)} />
      <div>inputTrigger = {inputTrigger}</div>
      <div>apiCallCount = {apiCallCount}</div>
      <button onClick={() => setFlag(flag => !flag)}>click me</button>
    </div>
  )
}

export default DebounceFun
