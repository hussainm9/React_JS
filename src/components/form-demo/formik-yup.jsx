 import { useFormik } from "formik";
 import * as yup from 'yup'
 function FormikYup(){
    // console.log(yup)
    const formik = useFormik(
    {
        initialValues:{UserName:'',Mobile:'',City: ''},
        validationSchema:yup.object({
            UserName:yup.string().required('name mandatory').min(4,'name is too short'),
            Mobile:yup.string().required('mobile mandatory').matches('/\+91\d{10}','invalid mobile')
        }),
        onSubmit:(user)=>{
            console.log(user)

        }

    },
)
    return(
    <div>
        <h2>Register User</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>

                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>

                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange}>
                        <option value="-1">select city</option>
                        <option >DEL</option>
                        <option >HYD</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>

            </dl>
            <button type="submit">Submit</button>
        </form>
    </div>
    )}

export default FormikYup;