import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
const Child = ({count})=>{
    return <div>
     count: {count}
    </div>
}
export const FocusDelayDemo = () => {
  const [useLayout, setUseLayout] = useState(false);
  const inputRef = useRef(null);
  const [count,setCount] = useState(0)
  // Focus using useEffect - causes visible flicker/delay
  useEffect(() => {
   if(count==0){
    for(let i=0;i<100000;i++)
    setCount(10)
   }
  }, [useLayout]);

console.log("render successfully",useLayout)
  return (
    <Child count={count}/>
  );
};
