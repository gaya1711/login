import React from "react"
import './SignUp.css'
import {addDoc, collection} from "firebase/firestore"
import {db} from "../firebase"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"


export default function SignUp () {
    const navigate = useNavigate();
    const [formData, setFormData]  = React.useState(
        {
          First_Name : "",
          Last_Name : "",
          Email_Id : "",
          Phone_Number : 0,
          selectedDate : null,
        }
    )
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleDateChange (date) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedDate: date
      }));
    };
    
    const usersCollectionRef = collection(db, "users")
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     await addDoc(usersCollectionRef, {formData})
    // }

    const create_user = async (event) => {
      event.preventDefault();
      await addDoc(usersCollectionRef, {formData})
      navigate('/successfulsignup')
      
    }

    return (
        <form  onSubmit = {create_user}>
        <div className = "display_signup">
        <div  className = "welcome_message">
          <div className = "welcome_heading">New User ?</div>
          <div className = "login_message">
            Create an account before proceeding
          </div>
        </div>
      
          <div className = "sign_up_container">
            <div className = "signupdeclare">
              Create an account
            </div>
            
            <div className = "signForm">
            <div>
              <input className = "input_fld" type = "text" placeholder = "First Name" onChange={handleChange} name = "First_Name"/>
            </div>
            <div>
              <input className = "input_fld" type = "text" placeholder = "Last Name" onChange={handleChange} name = "Last_Name"/>
            </div>
            <div>
            <input className = "input_fld" type = "text" placeholder = "Email Id" onChange={handleChange} name = "Email_Id"/>
            </div>
            <div>
            <input className = "input_fld" placeholder = "Phone Number" onChange={handleChange} name = "Phone_Number"/>
            </div>
            <div>
              <DatePicker
                placeholder = 'DOB'
                selected={formData.selectedDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                className="datepicker-input"
            />
            </div>
            <div>
            <button className = "create_Acc">Create Account</button>
            </div>
            </div>

        </div>

        </div>

    </form>
    
    )
}