

function Button (){

    let count = 0;
    const wish =  ()=>{
   console.log("ouch!!")
}
const handleClick2 =(e)=> {
    e.target.textContent = "baby dont hurt me"
}
return(
    <button className="butt1" onDoubleClick={(e)=>handleClick2(e)}>click me</button>
)
}
export default Button