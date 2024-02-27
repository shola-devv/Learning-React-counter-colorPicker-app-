import React, { useState } from 'react';



const News = ()=>{

    const [car, upCar] = useState([]);
    const [year, upYear] = useState(new Date().getFullYear());
    const [make, upMake] = useState([]);
    const [model, upModel] = useState([]);
    
    function addCar(){
       const arrCar = {
        make : make,
        year : year,
         model : model

       }
       upCar((c)=> [...c, arrCar])
    }
    function removeCar(){
    
    }
    function setYear(event){
        upYear(event.target.value)
    }
    function setMake(event){
        upMake(event.target.value)
    }
    function setModel(event){
        upModel(event.target.value)
    }


  const [foods, upFoods]= useState(["apple🍏", "🍕🍕🍕🍕🥞🍟🍟🍿🍿", "pawpaw🍑🍆🍆"])

  const addFood = ()=>{
  const newy = document.getElementById("foody").value;
  document.getElementById("foody").value = "";
  upFoods((f)=>[...foods, newy])

}

const removeFood = (index)=>{
  upFoods(foods.filter((_, i)=> i !== index))  
  }

    return(
        <>
        <div>
        <h2>list of cars🚛🚒🚓</h2>
        <ul>{car.map((car, index)=> <li key={index}>{car.year} {car.make} {car.model}</li>)}</ul>
        <input type="number" value={year} onChange={setYear}></input><br></br>
        <input type="text" value ={make} onchange={setMake} placeholder='set make'></input><br></br>
        <input type="text"value ={make}  onchange={setModel} placeholder='set model'></input><br></br>
        <button onClick={addCar}>add car</button>
        </div>









        <h2>list of food</h2>
        <ol>{foods.map((h, index)=><li key={index} onClick={()=>removeFood(index)}>{h}</li>)}</ol>
       <input type ="text" id="foody" placeholder='add your food'></input>
       <button onClick={addFood}>add food</button>
        </>
    )
}

export default News