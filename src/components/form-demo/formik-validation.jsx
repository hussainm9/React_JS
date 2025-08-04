import { useFormik } from "formik";
export function FormikValidation(){
    function validateUser(user){
        let errors = {UserName:'',Mobile:'',City:''}
        if(user.UserName.length === 0){
            errors.UserName = 'Name Required'
        }else if ( user.UserName.length<4){
            errors.UserName = 'Name too Short'
        }
        if(user.Mobile.length == 0){
            errors.Mobile = 'Mobile Required'
        }else if(!(user.Mobile.match(/\+91\d{10}/))){
            errors.Mobile = 'Invalid Mobile'
        }
        console.log(user)
        if(user.City === '-1'){
            errors.City = 'Select Your City'
        }
        return errors

    }

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:''
        },
        validate:validateUser,
        onSubmit:(user)=>{

        }
    })
    return(
        <div >
            <h2>Register  </h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                 <dd className="text-danger">{formik.errors.Mobile}</dd>

                <dt>City</dt>
                <dd>
                    <select name="City"  onChange={formik.handleChange} >
                        <option value='-1' >Select a City</option>
                        <option >Del</option>
                        <option >Hyd</option>
                        

                    </select>

                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
            </dl>
            <button type="submit">Submit</button>
            </form>
        </div>
    )

}