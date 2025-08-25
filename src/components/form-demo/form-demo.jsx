//taking values from the form 
import { useState } from "react";
export function FormDemo(){
    const [userDetails,setUserDetails] = useState({UserName:'',Mobile:'',City:''})
    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData(e.target)
        console.log( data,'data')
        console.log( data.entries,'data')
        for(let key of data){
            console.log(key)
        }
        

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
