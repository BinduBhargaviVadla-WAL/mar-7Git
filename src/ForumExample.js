import { useFormik, Field, form } from "formik";
const ForumExample = () => {
    let user = [];
    let formik = useFormik({
        initialValues: {
            topic:"",
            users:""
        },
        onSubmit(values) {
            console.log(`form submit`);
            console.log(values);
            let userOb = {
                ForumTopic: values.topic,
                ForumUsers:values.users
            }
            console.log(userOb);
            if (JSON.parse(localStorage.getItem("users"))) {
                let localUsers = JSON.parse(localStorage.getItem("users"));
                user.push(localUsers);
                console.log("local storage")
            }
            user.push(userOb);
            localStorage.setItem("users", JSON.stringify(user));
        },


        validate() {
            const errors = {};
            console.log(formik.values.topic.length)
            if (formik.values.topic.length <= 5) {
                errors.topic = "Topic shoud be min 5 characters and max 20 characters"
            }
           
            return errors;
        },
    });
    console.log(`Formiks:${formik}`);
    return (
        <div className="registration">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1>Registration Form</h1>
                <textarea name="topic"
                     value={formik.values.fullName}
                     onChange={formik.handleChange}>

                </textarea>
                <div className="text-danger">
                    {formik.errors.topic ? formik.errors.topic : null}
                </div>
               <select name="users"
                onChange={formik.handleChange}>
                   <option value="UserOne">User One</option>
                   <option value="Usertwo">User Two</option>
                   <option value="UserThree">User Three</option>
                </select>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>

    )
}
export default ForumExample;