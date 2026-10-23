import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css"

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
         <div className="step-one">
           <div className="one"><span>1</span></div>
           <div className="step-one-content">
            <p className="step-one">Step 1</p>
            <h2 className="step-one-title">your info</h2>
           </div>
         </div>
        </div>
        <div className="detail">
        <h1>Personal Info</h1>
        <p>Please provide your name, email
           and phone number
        </p>
        <form action="">
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
            <input type="tell"
              placeholder="e.g +1234 567 890"
              name=""
              id="number" 
               value={formData.phone}
               onChange={handleChange}
              />
          </div>
        </form>
         <div className="btn-container">
          <button onClickCapture={() => navigate("/plan")}>
            Next
          </button>
         </div>
        </div>
    </section>
    )
}

export default PersonalInfo