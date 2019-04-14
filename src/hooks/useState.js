import React, {useState} from 'react';
import useInputValue from "./inputValue";

export default function UseStateTest(){
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('');

  const name = useInputValue("huangJie");

  return (
    <div>
      <p onClick={() => setCount(count + 1)}>点我试试{count}</p>
      <p onClick={() => setStr(str + 1)}>点我试试{str}</p>
      <input {...name} />
    </div>
  )
}