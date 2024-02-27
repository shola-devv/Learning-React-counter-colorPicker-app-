import finey from './fine.jpg'
import style from './card.module.css'
import propTypes from 'prop-types'



function Card(props){
    const clicked = (e)=>{
    e.target.style.display= "none";    
    }
    


    const theCard = <div className={style.good}>
    
    <img src={finey}  onClick={(e)=> clicked(e)} alt="profile picture" className={style.pic}></img>
    <h2 className='title'>{props.name}</h2>
     <p>Age: {props.age} </p>
     <p>student: {props.isStudent ? 'Yes' : 'No'}</p>
    <p>i learn the mern stack</p>
    <button className={style.butt1}>ADD</button>
         </div> ;
         const lety =  <p>fuck</p>
       
          
    return(props.isStudent ? theCard
        : lety
    )
}
Card.propTypes={
    name : propTypes.string 
} 
Card.defaultProps ={
    name: "unknown",
    age: 9
}
export default Card