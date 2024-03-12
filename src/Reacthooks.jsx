import React, { useState, useEffect} from "react"

function Reacthooks(){

    const [count, setCount] = useState(0)
    useEffect(()=>{
      document.title = `${count}`
    },
  [count])
    function addCount(){
    setCount((c)=> c + 1)
  }
    return(
        <>
        <p>count:{count}</p>
        <button onClick={addCount} className="butt1">add</button>
        </>
    )

}

export default Reacthooks 