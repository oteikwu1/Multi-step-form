import { useState } from "react"
import SideBar from "./SideBar"
import './AddsOn.css'

const AddsOn = () => {
  const [isChecked, setIsChecked] = useState([])

  const handleCheckboxChange = (e) => {
     const {value, check} = e.target.value

     if(check) {
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
              <label htmlFor="online-service">
              <input 
              type="checkbox"
              id="online-service"
              value="online-service"
              checked={isChecked.includes('online-service')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
               <span> +1$/mo</span>
              </label>
            </div>

           <div className="large-storage">
              <label htmlFor="large-storage">
              <input 
              type="checkbox"
              id="large-storage"
              value="large-storage"
              checked={isChecked.includes('large-storage')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Large storage</h3>
                <p>Extra 1TB of cloud service</p>
              </div>
              <span>+2$/mo</span>
              </label>
            </div>

           <div className="customizable-profile">
              <label htmlFor="">
              <input 
              type="checkbox"
              value="customizable-profile"
              checked={isChecked.includes('customizable-profile')}
              onChange={handleCheckboxChange}
              />
              <div>
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
              </div>
              <span>+2$/mo</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AddsOn