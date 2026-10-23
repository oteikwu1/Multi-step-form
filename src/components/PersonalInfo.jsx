import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css"
import Button from "./Button";

const PersonalInfo = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: "arcade"
    })

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const navigate = useNavigate()

    return ( 
        <section className="container">
        <div className="image">
         <div className="step-one-container">
           <div className="one"><span>1</span></div>
           <div className="step-one-content">
            <p className="step-one">Step 1</p>
            <h2 className="step-one-title">your info</h2>
           </div>
         </div>
          <div className="step-two-container">
           <div className="two"><span>2</span></div>
           <div className="step-two-content">
            <p className="step-two">Step 2</p>
            <h2 className="step-two-title">Select  plan</h2>
           </div>
         </div>
          <div className="step-three-container">
           <div className="three"><span>3</span></div>
           <div className="step-three-content">
            <p className="step-three">Step 3</p>
            <h2 className="step-three-title">Add-ons</h2>
           </div>
         </div>
          <div className="step-four-container">
           <div className="four"><span>4</span></div>
           <div className="step-one-content">
            <p className="step-one">Step 4</p>
            <h2 className="step-one-title">summary</h2>
           </div>
         </div>
        </div>
        
        <div className="detail">
        <h1 className="info-title">Personal Info</h1>
        <p className="sub-title">Please provide your name, email
           and phone number
        </p>
        <form action="" className="form">
          <div className="name-group">
              <label htmlFor="name">Name</label>
            <input type="text"
            id="name"
             placeholder="Vanessa Mint"
            value={formData.name}
            onChange={handleChange}
            />
          </div>

          <div className="email-group">
            <label htmlFor="email">Email Address</label>
            <input type="email"
            id="email"
            placeholder="vanessamint@"
            value={formData.email}
            onChange={handleChange}
            />
            <p>This field is required</p>
          </div>
          <div className="number-group">
            <label htmlFor="number">Phone Number</label>
            <input type="tel"
              placeholder="e.g +1234 567 890"
              name=""
              id="number" 
               value={formData.phone}
               onChange={handleChange}
              />
          </div>
        </form>
         <div className="btn-container">
            <Button onClick={() => navigate("/plan")}>
              Next
            </Button>
         </div>
        </div>
    </section>
    )
}

export default PersonalInfo