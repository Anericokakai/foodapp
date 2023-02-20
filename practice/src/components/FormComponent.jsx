
import axios from "axios";
import './styles.css';
import { useState } from "react";
export const Form=()=>{

    // use state for storing the inputs
    const[inputs,setInput]= useState({})

    // handle on chage function for inputs
    const handleChange=(event)=>{
       const name= event.target.name
       const value=event.target.value
       setInput(values=>({...values, [name]:value}))

    }
    // create handlesubmit function
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs)
        axios.post('http://localhost/api/user/save',inputs)
    }

    return(
        <div  >
            <form action="" className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name"  onChange={handleChange}/>
                <br />
                <input type="email" name="email" placeholder="email"  onChange={handleChange}/>
                <br />
                <input type="tel" name="phone" placeholder="phone number"  onChange={handleChange}/>
                <br />
                <button > submit</button>
            </form>
        </div>
    )
}