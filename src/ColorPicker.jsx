import React, {useState} from 'react'

function Color (){

    const [color, upColor] = useState("#FFFFFF");
 const colorUp =(event)=>{
    upColor(event.target.value);
 }

 const [car, setCar] = useState(
    {
        year: 2023,
        make:"Lamborgini",
        model:"Urus"
    }
   
 )
 const newYear= (event)=>{
setCar(car => ({...car, year :event.target.value}))
 }
 const newModel= (event)=>{
    setCar(car => ({...car, model :event.target.value}))
     }
     const newMake= (event)=>{
        setCar(car => ({...car, make :event.target.value}))
         }
const [food, upFood] = useState({
    food: "rice",
    value: 1

});

const setFood =()=> {
    let roota = document.getElementById("textfood").value;
    document.getElementById("textfood").value = ""; 
  upFood((d)=>({...food, food : roota}) )
}


return( 

<div>
   
    <h1>
        color-picker
        </h1>
        <div className="colory"  style={{backgroundColor: color}}></div>
        <p className="pum">selected-color: {color}</p>
        <label>select a color:</label>
        <input type ="color" onChange={colorUp}/>     
</div>
)

}

export default Color