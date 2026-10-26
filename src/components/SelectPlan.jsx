import SideBar from "./SideBar"
import arcade from '../assets/icon-arcade.svg'
import advance from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'
import Button from "./Button"
import './SelectPlan.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SelectPlan = () => {
  const navigate = useNavigate();

  const [selectPLan, setSelectPlan] = useState("arcade")
  const [isToggled, setIsToggled] = useState(false)

  const handPlanName = (planName) => {
    setSelectPlan(planName)
  }

  return (
    <section className="main-container">
      <SideBar activeStep={2} />

      <div className="content-container">
          <h2>Select a plan</h2>
          <p>You have the option of monthly or yearly billing</p>
          
        <div className="plan-container">
            <div className={`plan-card ${selectPLan === "arcade" ? "active" : ""}`}
            onClick={() => handPlanName('arcade')}
            >
              <img className="plan-card-image" src={arcade} alt="arcade icon" />
              <h4>Arcade</h4>
              <p>$9/mo</p>
            </div>

            <div className={`plan-card ${selectPLan === "advance" ? "active" : ""}`}
            onClick={() => handPlanName('advance')}
            >
              <img className="plan-card-image" src={advance} alt="advance icon" />
              <h4>Advance</h4>
              <p>$12/mo</p>
            </div>

            <div className={`plan-card ${selectPLan === "pro" ? "active" : ""}`}
             onClick={() => handPlanName("pro")}
            >
              <img className="plan-card-image" src={pro} alt="pro icon" />
              <h4>Pro</h4>
              <p>$15/mo</p>
            </div>
        </div>

        <div className="toggle-container">
          <p className="monthly-text">Monthly</p>
          <input 
            type="checkbox" 
            id="switch" 
            checked={isToggled} 
            onChange={(e) => setIsToggled(e.target.checked)} 
          />
          <label htmlFor="switch" className="label"></label>
          <p className="yearly-text">Yearly</p>
        </div>

        <div className="btn-container">
          <div className="next-btn">
            <Button variant="btn-primary" type="button" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>

         <div className="back-btn">
            <Button onClick={() => navigate("/addons")}>
              Next Step
            </Button>
         </div>
        </div>
      </div>
    </section>
  )
}

export default SelectPlan