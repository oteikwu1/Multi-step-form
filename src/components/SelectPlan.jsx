import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "./SideBar"
import arcade from '../assets/icon-arcade.svg'
import advance from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'
import Button from "./Button"
import './SelectPlan.css'


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
          <h1 className="select-plan-heading">Select a plan</h1>
          <p className="select-plan-title">
            You have the option of monthly or yearly billing
          </p>
          
        <div className="plan-container">
            <div className={`plan-card ${selectPLan === "arcade" ? "active" : ""}`}
            onClick={() => handPlanName('arcade')}
            >
              <img className="plan-card-image" src={arcade} alt="arcade icon" />
              <div>
                <h4>Arcade</h4>
              <p>$9/mo</p>
              </div>
            </div>

            <div className={`plan-card ${selectPLan === "advance" ? "active" : ""}`}
            onClick={() => handPlanName('advance')}
            >
              <img className="plan-card-image" src={advance} alt="advance icon" />
              <div>
                <h4>Advance</h4>
                <p>$12/mo</p>
              </div>
            </div>

            <div className={`plan-card ${selectPLan === "pro" ? "active" : ""}`}
             onClick={() => handPlanName("pro")}
            >
              <img className="plan-card-image" src={pro} alt="pro icon" />
             <div>
               <h4>Pro</h4>
              <p>$15/mo</p>
             </div>
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
        <div className="back-btn">
           <Button variant="neutral" 
           onClick={() => navigate(-1)}>
           Go Back
        </Button>
        </div>
        <div className="next-btn" variant="secondary">
          <Button variant="primary"
           onClick={() => navigate("/addons")}>
            Next Page
          </Button>
        </div>
       </div>
      </div>
    </section>
  )
}

export default SelectPlan