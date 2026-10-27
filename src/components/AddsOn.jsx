import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "./SideBar"
import './AddsOn.css'
import Button from "./Button"

const AddsOn = () => {
   const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState([])

  const handleCheckboxChange = (e) => {
     const {value, checked} = e.target

     if(checked) {
      setIsChecked((prev) => [...prev, value]) 
     }else {
      setIsChecked((prev) => prev.filter((item) => item !== value))
     }
  }
    return (
      <section className="add-on-container">
        <SideBar activeStep={3} />

        <div className="content-container">
            <h2 className="add-on-heading">Picks add-ons</h2>
            <p className="add-on-title">
              Add-ons helps enhance gaming experience
            </p>
          <div className="service-container">
            <div className="online-service">
              <label htmlFor="online-service" className="add-on-label"></label>
              <input 
              type="checkbox"
              id="online-service"
              className="add-on-checkbox"
              value="online-service"
              checked={isChecked.includes('online-service')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
               <span className="add-on-price">+1$/mo</span>
            </div>

           <div className="large-storage">
              <label htmlFor="large-storage"></label>
              <input 
              type="checkbox"
              id="large-storage"
              className="add-on-checkbox"
              value="large-storage"
              checked={isChecked.includes('large-storage')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Large storage</h3>
                <p>Extra 1TB of cloud service</p>
              </div>
              <span className="add-on-price">+2$/mo</span>
            </div>

           <div className="customizable-profile">
              <label htmlFor=""></label>
              <input 
              type="checkbox"
              value="customizable-profile"
              className="add-on-checkbox"
              checked={isChecked.includes('customizable-profile')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
              </div>
              <span className="add-on-price">+2$/mo</span>
            </div>
          </div>
            <div className="btn-container">
          <div className="back-btn">
            <Button variant="neutral"
            onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
          <div className="next-btn">
            <Button>
              Next Page
            </Button>
          </div>
        </div>
        </div>
      </section>
    )
}

export default AddsOn