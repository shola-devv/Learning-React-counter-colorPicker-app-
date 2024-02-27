import React, { useState } from 'react';


function Food(props) {

    const [name, setName] = useState("invalid");
    const [age, setAge] = useState(0)
    const [isEmployed, setEmployed] = useState(false);
    const [counter, upCounter] = useState(0)
    const [content, upContent] = useState("boo")


    const addCounter = () => {
        upCounter((c) => c + 1);
        upCounter((c) => c + 1);
        upCounter((c) => c + 1);
    }
    const minusCounter = () => {
        upCounter(counter - 1)
    }
    const clearCounter = ()=>{
        upCounter(0)
       }
    const upName = () => {
        setName("shola")
    }

    const upDateAge = () => {
        setAge(age + 1)
    }
    const newEmploy = () => {
        setEmployed(!isEmployed)
    }

   const theText =(event)=>{
    upContent(event.target.value)
   }
 const [payment, upPayment] = useState("ghj");
  const changePayment = (event)=>{
        upPayment(event.target.value);
  }
  const [ship, upshipping] = useState();
  const changeShip = (event)=>{
    upshipping(event.target.value)
  }
    return (
        <div>
            
            <div className='main'>
            <h1 className="num">{counter}</h1>
            <button onClick={addCounter} className="butt1">add</button>
            <button onClick={minusCounter} className="butt1">minus</button>
            <button onClick={clearCounter} className="butt1">clear</button>
            </div>
           
        </div>
    )
}


export default Food