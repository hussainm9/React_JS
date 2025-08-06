import {Formik,Form,Field,ErrorMessage}  from 'formik'
import * as yup from 'yup'
export function FormikComponents(){

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'',Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('name required').min(4,'name too short'),Mobile:yup.string().required('Mobile required').matches(/\+91\d{10}/,'invalid mobile')})} onSubmit={(values)=>{console.log(values,'values')}}>
                <Form>
                    <dl>
                        <dt>UserName</dt>
                        <dd><Field type='text' name='UserName'/></dd>
                        <dd><ErrorMessage name='UserName'/></dd>
                         <dt>Mobile</dt>
                        <dd><Field type='text' name='Mobile'/></dd>
                        <dd><ErrorMessage name='Mobile'/></dd>

                    </dl>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}