import React, { useState,useRef } from 'react';
function Counter({ id }) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      {id}: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// WITHOUT KEYS:

export default function Test() {
    const [list,setList] = useState([<Counter id="a"/>,<Counter id="b"/>])
  return <>
    <h1>Hello world</h1>
    <div>
   {/* count = 3 */}
</div>
    <div>
        {
            list.map(el=>el)
        }
    </div>
    <button onClick={()=>{
        setList(list=>[<Counter id="c"/>,...list])
    }}>add</button>

  </>
}