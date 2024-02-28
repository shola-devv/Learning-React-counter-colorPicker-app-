import Card from './Card/Card.jsx'
import Food from './CounterApp.jsx'
import News from './News.jsx' 
import Button from './Button.jsx'
import Todolist from './Todolist'
import Reacthooks from './Reacthooks.jsx'
import Color from './ColorPicker.jsx'


function App() {
  const fruits =[
    {id : 1,name:"apple", calories: 122}, 
    { id : 2,name: "pawpaw", calories: 123}, 
      {id : 3,name: "cocounut", calories: 233}, 
    {id : 4,name: "mango", calories: 133}
  ];
    const foods =[
      {id : 1,name:"garri", calories: 122}, 
      { id : 2,name: "beans", calories: 123}, 
      {id : 3,name: "ewa", calories: 233}, 
      {id : 4,name: "agbado", calories: 133} ];
    
    

  return (
    <>
    <Todolist/>
   </>

  )
}

export default App;
