import { useFormik } from "formik";
export function FormFormik(){

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:''
        },
        onSubmit:(user)=>{
            console.log(user)

        }
    })

    return(
        <div >
            <h2>Register Form </h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange} >
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