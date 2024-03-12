import React, { useState } from 'react'


function RandomJoke(){
 
    const [joke, setJoke] = useState("what is a computer's favourite snack");
    const [punch, setPunch] = useState("computer chips");
    const [emoji, setEmoji] = useState("")
    const getter  = () =>{
      //  Axios.get("https://official-joke-api.appipot.com/random_joke").then((res)=>{
   // setJoke(res.data.setup);
   // setPunch(res.data.punchLine);
   
      //   })
    }

    return (<>
<div className="top"><p className='laugh'>😂</p><p class="text"><span className= 'jo' >EMMANUELS</span>RANDOM<span className="jo">JOKE</span>GENERATOR</p></div>
<div className="bottom">
<p className='story'>{joke}</p>
<p className='line'>-{punch}</p> 
<button className='butt5' onClick={getter()}>GET A JOKE NOW</button>
</div>
<p className='laugh a'>🤣</p>
 <p className='laugh c'>🤣</p>
<p className='laugh d'>😂</p>
<p className='laugh e'>🤣</p>
<p className='laugh f'>🤣</p>

    </>)
}

export default RandomJoke