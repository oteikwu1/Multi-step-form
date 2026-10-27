import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css"
import Button from "./Button";
import './Button.css'
import SideBar from "./SideBar";


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
        <SideBar activeStep={1} />
        
        <div className="detail">
        <h1 className="info-title">Personal Info</h1>
        <p className="sub-title">Please provide your name, email
           and phone number
        </p>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className={`name-group ${error.name ? "error" : ""}`}>
          <div className="label-container">
            <label className="name-label" htmlFor="name">Name</label>
            {error.name && <p className="error-message">{error.name}</p>}
          </div>
            <input type="text"
            id="name"
            name="name"
             placeholder="Vanessa Mint"
            value={formData.name}
            onChange={handleChange}
            />
          </div>

          <div className={`email-group ${error.email ? "error" : ""}`}>
            <div className="label-container">
              <label htmlFor="email" className="name-label">Email Address</label>
              {error.email && <p className="error-message">{error.email}</p>}
            </div>
            <input type="email"
            id="email"
            name="email"
            placeholder="vanessamint@"
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div className={`number-group ${error.phone ? "error" : ""}`}>
            <div className="label-container">
              <label className="name-label" htmlFor="number">Phone Number</label>
              {error.phone && <p className="error-message">{error.phone}</p>}
            </div>
            <input type="tel"
              placeholder="e.g +1234 567 890"
              name="phone"
              id="number" 
               value={formData.phone}
               onChange={handleChange}
              />
          </div>
           <div className="btn-container">
            <Button type="submit">
              Next page
            </Button>
         </div>
        </form>
        </div>
    </section>
    )
}

export default PersonalInfo