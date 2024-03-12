import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
     age: yup.number().required(),
     email: yup.string().email().required,
     password: yup.string().min(4).max(10).required(),
     confirmPassword: yup.string().oneOf([yup.ref("password"), null])

});

function ReduxT (){
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })
    const textU =(data)=>{
      console.log(data)
    }
    return(
        <div>
            <p>hookform tutorial</p>

            <div className="">
                 <p className="SIGN-UP"></p>
           <form onSubmit={()=>handleSubmit(textU)}>
            <input type="text" name="firstName" ref={register} placeholder="firstname" /><br/>
            <input type="text" name="lastName" ref={register} placeholder="lastname" /><br/>
            <input type="text" name="email" ref={register} placeholder="e mail..."  /><br/>
            <input type="text" name="age" ref={register} placeholder="age..." /><br/>
            <input type="text" name="password" ref={register} placeholder="password" />&nbsp;
            <input type="text" name="ConfirmPassword" ref={register} placeholder="confirmpassword" />&nbsp;
            <input type="Submit" className="butt1"/>
            <button className="butt1">submit</button>
           
           
           </form>
           
            </div>
        </div>
    )
}
export default ReduxT