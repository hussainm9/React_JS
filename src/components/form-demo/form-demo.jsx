//taking values from the form 
import { useState } from "react";
export function FormDemo(){
    const [userDetails,setUserDetails] = useState({UserName:'',Mobile:'',City:''})
    function handleSubmit(e){
        e.preventDefault()
        alert('form submitted')
        console.log(userDetails)

    }
    function handleNameChange(e){
        setUserDetails({...userDetails,UserName:e.target.value})

    }
    function handleMobileChange(e){
        setUserDetails({
            Mobile:e.target.value,
            UserName:userDetails.UserName,
            City:userDetails.City
        })

    }
    function handleCityChange(e){
        setUserDetails({...userDetails,City:e.target.value})

    }

    return(
        <div >
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={handleNameChange} /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={handleMobileChange} /></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={handleCityChange} >
                        <option >Select a City</option>
                        <option >Del</option>
                        <option >Hyd</option>
                        

                    </select>
                </dd>
            </dl>
            <button type="submit">Submit</button>
            </form>
        </div>
    )

}
