import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css"
import Button from "./Button";
import './Button.css'

const PersonalInfo = () => {
  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: "arcade"
    });

  const [error, setError] = useState({
     name: "",
     email: "",
     phone: "",
  });

    const handleChange = (e) => {
      const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let newError = {}

        if(!formData.name.trim()) {
           newError.name = "This field is required"
        }

        if(!formData.email.trim()) {
          newError.email = "This field is required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
          newError.email = "Invalid email"
        }

        if(!formData.phone) {
          newError.phone = "This field is required"
        }

        setError(newError)

        if(Object.keys(newError).length === 0) {
          navigate("/plan");
        }

    }

  
    return ( 
        <section className="container">
        <div className="image">
          <div className="side-bar-container">
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
        </div>
        
        <div className="detail">
        <h1 className="info-title">Personal Info</h1>
        <p className="sub-title">Please provide your name, email
           and phone number
        </p>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className={`name-group ${error.name ? "error" : ""}`}>
          <div className="label-container">
            <label htmlFor="name">Name</label>
            {error.name && <p className="error-message">{error.name}</p>}
          </div>
            <input type="text"
            id="name"
             placeholder="Vanessa Mint"
            value={formData.name}
            onChange={handleChange}
            />
          </div>

          <div className={`email-group ${error.email ? "error" : ""}`}>
            <div className="label-container">
              <label htmlFor="email">Email Address</label>
              {error.email && <p className="error-message">{error.email}</p>}
            </div>
            <input type="email"
            id="email"
            placeholder="vanessamint@"
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div className={`number-group ${error.phone ? "error" : ""}`}>
            <div className="label-container">
              <label htmlFor="number">Phone Number</label>
              {error.phone && <p className="error-message">{error.phone}</p>}
            </div>
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
            <Button variant="primary" type="submit">
              Next Step
            </Button>
         </div>
        </div>
    </section>
    )
}

export default PersonalInfo